//all the "requires"
require("./utils.js");
require('dotenv').config();
const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const bcrypt = require('bcrypt');
var bodyParser = require('body-parser');
var mongoose = require('mongoose')
var imgSchema = require('./model.js');
var fs = require('fs');
var path = require('path');
var multer = require('multer');
const Joi = require("joi");

/* secret information section */
const mongodb_host = process.env.MONGODB_HOST;
const mongodb_user = process.env.MONGODB_USER;
const mongodb_password = process.env.MONGODB_PASSWORD;
const mongodb_database = process.env.MONGODB_DATABASE;
const mongodb_session_secret = process.env.MONGODB_SESSION_SECRET;
const node_session_secret = process.env.NODE_SESSION_SECRET;
/* END secret section */

//all the const variables
const app = express();
const saltRounds = 12;
const port = process.env.PORT || 3000;
const expireTime = 6 * 4 * 7 * 24 * 60 * 60 * 1000; //expires after 6 months  (hours * minutes * seconds * millis)
 
//all the app.use
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.urlencoded({extended: false}));

app.set('view engine', 'ejs');

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});
var upload = multer({ storage: storage });

//database related variables and functions on start up
var {database} = include('databaseConnection');
const userCollection = database.db(mongodb_database).collection('users');
var mongoStore = MongoStore.create({
	mongoUrl: `mongodb+srv://${mongodb_user}:${mongodb_password}@${mongodb_host}/sessions`,
	crypto: {
		secret: mongodb_session_secret
	}
})

mongoose.connect(process.env.MONGO_URL).then(console.log("DB Connected"));

app.use(session({ 
    secret: node_session_secret,
	store: mongoStore, //default is memory store 
	saveUninitialized: false, 
	resave: true
}
));

// function isValidSession(req) {
//     if (req.session.authenticated) {
//         return true;
//     }
//     return false;
// }

// function sessionValidation(req,res,next) {
//     if (isValidSession(req)) {
//         next();
//     }
//     else {
//         res.redirect('/login');
//     }
// }


// function isAdmin(req) {
//     if (req.session.user_type == 'admin') {
//         return true;
//     }
//     return false;
// }

// function adminAuthorization(req, res, next) {
//     if (!isAdmin(req)) {
//         res.status(403);
//         res.render("errorMessage", {error: "Not Authorized"});
//         return;
//     }
//     else {
//         next();
//     }
// }


//This fuction returns the username of the user that is currently logged in
async function getUserName(req) {
	if (req.session.authenticated) {
		var email = req.session.email;
		const result = await userCollection.find({ email: email }).project({ username: 1, _id: 1 }).toArray();
		return result[0].username;
	}else {
		return null;
	}
}

//This block of code to do sign up, login, log out, and home page is from COMP2537 assignment 2 and modified to fit the project
app.get('/', async(req,res) => {
	if (req.session.authenticated) {
		res.render("index" /*, { user: await getUserName(req)}*/);

	} else {
		res.render("index" /*, { user: null} */);
	}});

app.get('/createUser', (req,res) => {
    res.render("createUser");
});

app.get('/login', (req,res) => {
	res.render("login");
});

app.post('/createUser', async (req,res) => {
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
	var hashedPassword = await bcrypt.hash(password, saltRounds);
	await userCollection.insertOne({ username: username, email: email, password: hashedPassword});
	req.session.authenticated = true;
	req.session.email = email;
	req.session.cookie.maxAge = expireTime;
	res.redirect('/');
});

app.get('/incorrectInput', (req, res) => {
	var msg = req.query.message;
	res.render("submitUser", { msg: msg ,previousPage: req.query.previousPage});
});

app.post('/login', async (req,res) => {
    var email = req.body.email;
	var password = req.body.password;
	const schema = Joi.object(
		{
			email: Joi.string().max(50).required(),
			password: Joi.string().max(20).required()
		});
	const validationResult = schema.validate({ email, password });
	if (validationResult.error != null) {
		res.redirect("/incorrectInput?message=invalid email or password"+"&previousPage=login");
		return;
	}
	const result = await userCollection.find({ email: email }).project({ username: 1, email: 1, password: 1, _id: 1 }).toArray();
	if (result.length != 1) {
		res.redirect("/incorrectInput?message=user not found"+"&previousPage=login");
		return;
	}
	if (await bcrypt.compare(password, result[0].password)) {
		req.session.authenticated = true;
		req.session.email = email;
		req.session.cookie.maxAge = expireTime;
		res.redirect('/');
		return;
	}
	else {
		res.redirect("/incorrectInput?message=incorrect password"+"&previousPage=login");
		return;
	}
});

app.get('/loggingin', (req,res) => {
    res.render("loggingin");
});

app.get('/logout', (req,res) => {
	req.session.destroy();
    res.redirect("/");
});

app.get('/info', (req,res) => {
    res.render("info");
});

app.get('/about_us', (req,res) => {
    res.render("about_us");
});

app.get('/destination', (req,res) => {
    res.render("destination");
});

app.get('/home', (req,res) => {
    res.render("home");
});

// This section allows the user to set their profile picture and is from geeksforgeeks website(https://www.geeksforgeeks.org/upload-and-retrieve-image-on-mongodb-using-mongoose/)
app.get('/profile', async(req,res) => {
	imgSchema.find({})
    .then(async(data, err)=>{
        if(err){
            console.log(err);
        }
        res.render('profile',{items: data, user: await getUserName(req)})
    })
});

app.post('/setProfile', upload.single('image'), (req, res, next) => {
 
    var obj = {
        name: req.body.name,
        desc: req.body.desc,
        img: {
            data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
            contentType: 'image/png'
        }
    }
    imgSchema.create(obj)
    .then ((err, item) => {
        if (err) {
            console.log(err);
        }
        else {
            // item.save();
            res.redirect('/img');
        }
    });
});

app.get('/setting', (req,res) => {
	res.render("setting");
});

app.post('/changePersonalinfo', async(req,res) => {
	var username = req.body.username;
	var password = req.body.newpassword;
	var curentPassword = req.body.curpassword;
	const schema = Joi.object(
		{
			username: Joi.string().alphanum().max(20).required(),
			password: Joi.string().max(20).required()
		});
	const validationResult = schema.validate({ username , password});
	if (validationResult.error != null) {
		var msg = validationResult.error.message;
		res.redirect("/incorrectInput?message=" + msg+"&previousPage=setting");
		return;
	}
	var currentPassword = await userCollection.find({ email: req.session.email }).project({ password: 1, _id: 0 }).toArray();
	if(await bcrypt.compare(curentPassword, currentPassword[0].password)) {
		var hashedPassword = await bcrypt.hash(password, saltRounds);
	await userCollection.updateOne({ email: req.session.email }, { $set: { username: username, password: hashedPassword } });
	res.redirect('/profile');
	}else {
		res.redirect("/incorrectInput?message=incorrect password"+"&previousPage=setting");
	}
});


app.get('/review', (req,res) => {
    res.render("review");
});

app.get("*", (req,res) => {
	res.status(404).render("404");
})

app.listen(port, () => {
	console.log("Node application listening on port "+port);
}); 