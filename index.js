// //Define the include function for absolute file name
global.base_dir = __dirname;
global.abs_path = function (path) {
	return base_dir + path;
}
global.include = function (file) {
	return require(abs_path('/' + file));
}

//all the "requires"
require("./utils.js");
require('dotenv').config();
const express = require('express');
const router = include('routes/router');
var { database } = include('databaseConnection');
const { google } = require('googleapis');
const port = process.env.PORT || 3000;
const app = express();
app.set('view engine', 'ejs');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Joi = require("joi");

const saltRounds = 12;
const expireTime = 6 * 4 * 7 * 24 * 60 * 60 * 1000; //expires after 6 months (months * weeks * days * hours * minutes * seconds * millis)

/* secret information section */
const mongodb_host = process.env.MONGODB_HOST;
const mongodb_user = process.env.MONGODB_USER;
const mongodb_password = process.env.MONGODB_PASSWORD;
const mongodb_database = process.env.MONGODB_DATABASE;
const mongodb_session_secret = process.env.MONGODB_SESSION_SECRET;
const node_session_secret = process.env.NODE_SESSION_SECRET;
/* END secret section */

//database related variables and functions on start up

const userCollection = database.db(mongodb_database).collection('users');
const locationCollection = database.db(mongodb_database).collection('locations');

var mongoStore = MongoStore.create({
	mongoUrl: `mongodb+srv://${mongodb_user}:${mongodb_password}@${mongodb_host}/sessions`,
	crypto: {
		secret: mongodb_session_secret
	}
})

//forgot password
const oauth2Client = new google.auth.OAuth2(
	process.env.CLIENT_ID,
	process.env.CLIENT_SECRET,
	"http://localhost:3000/auth/google/callback"  // This should match the one in your Google Console
);

// Generate a url that asks permissions for Gmail scopes
const SCOPES = [
	'https://www.googleapis.com/auth/gmail.send'
];

app.get('/auth/google', (req, res) => {
	const url = oauth2Client.generateAuthUrl({
		access_type: 'offline',
		scope: SCOPES
	});
	res.redirect(url);
});

app.get('/auth/google/callback', async (req, res) => {
	const { code } = req.query;
	const { tokens } = await oauth2Client.getToken(code);
	oauth2Client.setCredentials(tokens);

	// Save the tokens to your database for long-term use here
	console.log("Access Token:", tokens.access_token);
	console.log("Refresh Token:", tokens.refresh_token);

	res.send('Authentication successful! You can now close this window.');
});

const nodemailer = require('nodemailer');
const { name } = require("ejs");

let transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: process.env.EMAIL, // Your Gmail address
		pass: process.env.APP_PASSWORD // Your Google App Password
	}
});

//all the app.use
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public"));
app.use('/', router);
app.use(session({
	secret: node_session_secret,
	store: mongoStore, //default is memory store 
	saveUninitialized: false,
	resave: true
}
));

//moongose connection and review/user schemas
mongoose.connect(`mongodb+srv://${mongodb_user}:${mongodb_password}@${mongodb_host}/${mongodb_database}`, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
	console.log('Connected to MongoDB');
});

const reviewSchema = new mongoose.Schema({
	text: { type: String, default: "" },
	starRating: { type: Number, default: 0 },
	user: { type: String, default: "" },
	date: { type: Date, default: Date.now }
});

const userSchema = new mongoose.Schema({
	username: { type: String, required: true },
	email: { type: String, required: true, unique: true },
	profilePicture: {
		data: Buffer,
		contentType: String
	},
});
const locationSchema = new mongoose.Schema({
	name: { type: String, required: true, unique: true },
	description: { type: String, required: true },
	reviews: { type: [reviewSchema], default: [{ text: "" }] },
	picture: {
		data: Buffer,
		contentType: String
	},
});

const User = mongoose.model('User', userSchema);
const Location = mongoose.model('Location', locationSchema);

//This fuction returns the user obj that is currently logged in
async function getUserName(req) {
	if (req.session.authenticated) {
		var email = req.session.email;
		const result = await userCollection.find({ email: email }).project({ username: 1, _id: 1 }).toArray();
		return result[0].username;
	} else {
		return null;
	}
}
function sessionValidation(req, res, next) {
	if (req.session.authenticated) {
		next();
	}
	else {
		res.redirect('/login');
	}
}



app.use(function sessionInfo(req, res, next) {
	res.locals.name = req.session.name;
	res.locals.authenticated = req.session.authenticated;
	next();
});

//This block of code to do sign up, login, log out, and home page is from COMP2537 assignment 2 and modified to fit the project
app.get('/', async (req, res) => {
	if (req.session.authenticated) {
		const result = await locationCollection.find().project({ name: 1, description: 1, reviews: 1, _id: 1 }).toArray();
	    res.redirect("/home");
	} else {
		res.render("index", { user: null});
	}});

app.get('/createUser', (req, res) => {
	res.render("createUser");
});

app.get('/login', (req,res) => {
	res.render("login");
});

app.post('/createUser', async (req, res) => {
	var username = req.body.username;
	var email = req.body.email;
	var password = req.body.password;

	const schema = Joi.object(
		{
			username: Joi.string().alphanum().max(20).required(),
			email: Joi.string().max(50).required(),
			password: Joi.string().max(20).required()
		});
	const validationResult = schema.validate({ username, email, password });

	if (validationResult.error != null) {
		var msg = validationResult.error.message;
		res.redirect("/incorrectInput?message=" + msg + "&previousPage=createUser");
		return;
	}

	let user = await userCollection.findOne({email: email});
	if(user) {
		res.locals.message = "Email already exist. Please use other email address";
		return res.status(400).render("errorMessage");
	}

	var hashedPassword = await bcrypt.hash(password, saltRounds);

	await userCollection.insertOne({ username: username, email: email, password: hashedPassword, reviews: [{ text: "" }], savedLocations: []});
	req.session.authenticated = true;
	req.session.email = email;
	req.session.cookie.maxAge = expireTime;
	res.redirect('/');
});



app.post('/post_review', async (req, res) => {
	try {
		let name = req.query.location;
		var description = "blah blah blah";
		const email = req.session.email;
		var user = await getUserName(req);
		const { opinion } = req.body;
		const { starRating } = req.body;
		// Find the user by email or create a new one
		let l = await Location.findOne({ "name": name });
		console.log(name);
		// Ensure the reviews array is initialized 
		if (!l) {
			l = new Location({ name, description, reviews: [{ text: "" }] });
		}
		// Add the new review to the reviews array
		l.reviews.push({ text: opinion, starRating: starRating, user: user, date: Date.now() });

		// Save the user
		await l.save();

		res.status(200).redirect('/review?location=' + name);


	} catch (error) {
		console.error(error);
		res.status(500).send('Failed to update review');
	}


});


app.get('/incorrectInput', (req, res) => {
	var msg = req.query.message;
	res.render("submitUser", { msg: msg, previousPage: req.query.previousPage });
});

app.post('/login', async (req, res) => {
	var email = req.body.email;
	var password = req.body.password;
	const schema = Joi.object(
		{
			email: Joi.string().max(50).required(),
			password: Joi.string().max(20).required()
		});
	const validationResult = schema.validate({ email, password });
	if (validationResult.error != null) {
		res.redirect("/incorrectInput?message=invalid email or password" + "&previousPage=login");
		return;
	}
	const result = await userCollection.find({ email: email }).project({ username: 1, email: 1, password: 1, _id: 1 }).toArray();
	if (result.length != 1) {
		res.redirect("/incorrectInput?message=user not found" + "&previousPage=login");
		return;
	}
	if (await bcrypt.compare(password, result[0].password)) {
		req.session.authenticated = true;
		req.session.email = email;
		req.session.cookie.maxAge = expireTime;
		res.redirect('/home');
		return;
	}
	else {
		res.redirect("/incorrectInput?message=incorrect password" + "&previousPage=login");
		return;
	}
});

app.get('/loggingin', (req, res) => {
	res.render("loggingin");
});

app.get('/logout', sessionValidation, (req,res) => {
	req.session.destroy();
	res.redirect("/");
});

app.get('/info', sessionValidation, (req,res) => {
    res.render("info");
});

app.get('/about_us', sessionValidation, (req,res) => {
    res.render("about_us");
});

app.get('/destination',sessionValidation, async(req, res) => {
	var locationName = req.query.location;
	var location = await locationCollection.find({ name: locationName }).project({ name: 1, description: 1, reviews: 1, _id: 1 }).toArray();
	var bookmark= false;
	const savedLocationsArr = await userCollection.find({ email: req.session.email }).project({ savedLocations: 1, _id: 0 }).toArray();
	const savedLocations = savedLocationsArr[0].savedLocations;
	const savedLocationsNames = savedLocations.map(location => location.name);
	if(savedLocationsNames.includes(locationName)){
		bookmark = true;
	}
	if(typeof bookmark != "undefined"){
		res.render("destination", { location: location[0], bookmark: bookmark});
	}else{
		res.render("destination", { location: location[0]});
	}
});


app.get('/home',sessionValidation, async(req, res) => {
<<<<<<< HEAD
	// var bookmark = req.query.bookmark;
	const result = await locationCollection.find().project({ name: 1, description: 1, reviews: 1, _id: 1 }).toArray();
	// res.render("home", { locations: result , bookmark: bookmark});
	res.render("home");
=======
	const result = await locationCollection.find().project({ name: 1, description: 1, reviews: 1, _id: 1 }).toArray();
	const savedLocationsArr = await userCollection.find({ email: req.session.email }).project({ savedLocations: 1, _id: 0 }).toArray();
	const savedLocations = savedLocationsArr[0].savedLocations;
	const savedLocationsNames = savedLocations.map(location => location.name);
	res.render("home", { locations: result, savedLocationsNames: savedLocationsNames});
>>>>>>> Saba_saving_locations
});

app.get('/post_review',sessionValidation, async (req, res) => {
	var locationName = req.query.location;
	try {
		const username = await getUserName(req);
		const email = req.session.email;
		const user = await User.findOne({ email });

		res.render('post_review', {
			user: user,
			username: username,
			location: locationName
		});

	} catch (err) {
		console.error(err);
		res.status(500).send('Internal server error');
	}

});

// This section allows the user to set their profile picture and is from one of the Tech Gems code on learning hub
app.get('/profile', sessionValidation, async(req,res) => {
	var imgSrc = await userCollection.find({ email: req.session.email }).project({ image_id: 1, _id: 0 }).toArray();
	res.render('profile', { user: await getUserName(req), email: req.session.email, imgSrc: imgSrc[0].image_id });

});

app.get('/setting', sessionValidation, (req,res) => {
	res.render("setting");
});

//This block of code is to change the user's password and username
app.post('/changePersonalinfo', sessionValidation, async(req,res) => {
	var username = req.body.username;
	var password = req.body.newpassword;
	var curentPassword = req.body.curpassword;
	const schema = Joi.object(
		{
			username: Joi.string().alphanum().max(20).required(),
			password: Joi.string().max(20).required()
		});
	const validationResult = schema.validate({ username, password });
	if (validationResult.error != null) {
		var msg = validationResult.error.message;
		res.redirect("/incorrectInput?message=" + msg + "&previousPage=setting");
		return;
	}
	var currentPassword = await userCollection.find({ email: req.session.email }).project({ password: 1, _id: 0 }).toArray();
	if (await bcrypt.compare(curentPassword, currentPassword[0].password)) {
		var hashedPassword = await bcrypt.hash(password, saltRounds);
		await userCollection.updateOne({ email: req.session.email }, { $set: { username: username, password: hashedPassword } });
		res.redirect('/profile');
	} else {
		res.redirect("/incorrectInput?message=incorrect password" + "&previousPage=setting");
	}
});


app.get('/review',sessionValidation, async (req, res) => {
	var locationName = req.query.location;
	var location = await locationCollection.find({ name: locationName }).project({ name: 1, description: 1, reviews: 1, _id: 1 }).toArray();
	reviews =location[0].reviews;
	var avg = 0;
	var a=0,b=0,c=0,d=0,e=0;
	if(reviews.length != 0){
		for (var i = 0; i < reviews.length; i++) {
			switch (reviews[i].starRating) {
				case 1:
					a++;
					break;
				case 2:
					b++
					break;
				case 3:
					c++;
					break;
				case 4:
					d++;
					break;
				case 5:
					e++;
					break;
				}
			}
			avg= (a*1+b*2+c*3+d*4+e*5)/reviews.length;
		}
		avg = Math.round(avg * 100) / 100;
		await locationCollection.updateOne({ name: locationName }, { $set: { rating: avg } });
	    res.render("review", { location: location[0], avgRating:avg });
});

app.get('/saveLocation', sessionValidation, async (req, res) => {
	var bookmark;
	var locationName = req.query.location;
	var location = await locationCollection.find({ name: locationName }).project({ name: 1, description: 1, reviews: 1, _id: 1 }).toArray();
	result = await userCollection.find({ email: req.session.email }).project({ savedLocations: 1, _id: 0 }).toArray();
	var savedLocations = result[0].savedLocations;
	if (savedLocations.length == 0) {
		await userCollection.updateOne({ email: req.session.email }, { $push: { savedLocations: location[0] } });
		bookmark = true;
	}else{
	for (var i = 0; i < savedLocations.length; i++) {
		if (savedLocations[i].name == locationName) {
			await userCollection.updateOne({ email: req.session.email }, { $pull: { savedLocations: location[0] } });
			bookmark = false;
		}else{
			await userCollection.updateOne({ email: req.session.email }, { $push: { savedLocations: location[0] } });
		}
	}
}

res.redirect(req.get('referer'));
});


// Route to display the reset password request form
app.get('/resetPassword', (req, res) => {
	res.render('resetPassword');
});

// Route to display the reset link sent confirmation
app.get('/resetLinkSent', (req, res) => {
	res.render('resetLinkSent');
});

// Route to display the new password form
app.get('/newPassword', (req, res) => {
	res.render('newPassword');
});

const crypto = require('crypto');
const moment = require('moment');

app.post('/sendResetLink', async (req, res) => {
	const email = req.body.email;
	const user = await userCollection.findOne({ email: email });

	if (!user) {
		console.log('No user found with that email.');
		res.redirect('/resetLinkSent');  // Optionally inform the user that the email has been sent for security reasons
		return;
	}

	// Generate a secure token
	const resetToken = crypto.randomBytes(20).toString('hex');
	// Set expiration time to 1 hour


	// Store the reset token and its expiration time in the user's record
	await userCollection.updateOne({ _id: user._id }, {
		$set: {
			resetPasswordToken: resetToken,
			resetPasswordExpires: new Date(Date.now() + expireTime) // set to current time + 1 hour
		}
	});


	const resetLink = `http://${req.headers.host}/reset-password/${resetToken}`;

	// setup email data with unicode symbols
	let mailOptions = {
		from: `"sunspot" <${process.env.EMAIL}>`, // sender address
		to: email, // list of receivers
		subject: 'Password Reset', // Subject line
		text: 'You requested a password reset. Please use the following link to reset your password: ' + resetLink, // plain text body
		html: `<b>Click on the link to reset your password:</b> <a href="${resetLink}">Reset Password</a>` // html body
	};

	// send mail with defined transport object
	try {
		let info = await transporter.sendMail(mailOptions);
		console.log('Message sent: %s', info.messageId);
		res.redirect('/resetLinkSent');
	} catch (error) {
		console.error('Error sending email:', error);
		res.status(500).send('Failed to send reset link');
	}
});


app.get('/reset-password/:token', async (req, res) => {
	const token = req.params.token;
	const user = await userCollection.findOne({
		resetPasswordToken: token,
		resetPasswordExpires: { $gt: new Date() } // Checks if the token is not expired
	});

	if (!user) {
		console.error('Password reset token is invalid or has expired.');
		res.status(400).send('Password reset token is invalid or has expired.');
		return;
	}

	// Render the reset password form with the token
	res.render('newPassword', { token: token });
});


app.post('/reset-password/:token', async (req, res) => {
	const { token } = req.params;
	const { newPassword } = req.body; // make sure the 'name' attribute in the form matches "newPassword"

	const user = await userCollection.findOne({
		resetPasswordToken: token,
		resetPasswordExpires: { $gt: new Date() } // ensure the token is still valid
	});

	if (!user) {
		console.error('Password reset token is invalid or has expired.');
		return res.status(400).send('Password reset token is invalid or has expired.');
	}

	// Hash the new password
	const hashedPassword = await bcrypt.hash(newPassword, saltRounds);

	// Update the user's password and remove the reset token and expiration date
	await userCollection.updateOne({ _id: user._id }, {
		$set: {
			password: hashedPassword
		},
		$unset: {
			resetPasswordToken: "",
			resetPasswordExpires: ""
		}
	});

	res.send('Your password has been updated successfully.');
});

app.get("*", (req, res) => {
	res.status(404).render("404");
})

app.listen(port, () => {
	console.log("Node application listening on port " + port);
}); 