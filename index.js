
require("./utils.js");

require('dotenv').config();
const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const bcrypt = require('bcrypt');
const saltRounds = 12;

const port = process.env.PORT || 3000;

const app = express();

const Joi = require("joi");


const expireTime = 1 * 60 * 60 * 1000; //expires after 1 day  (hours * minutes * seconds * millis)

/* secret information section */
const mongodb_host = process.env.MONGODB_HOST;
const mongodb_user = process.env.MONGODB_USER;
const mongodb_password = process.env.MONGODB_PASSWORD;
const mongodb_database = process.env.MONGODB_DATABASE;
const mongodb_session_secret = process.env.MONGODB_SESSION_SECRET;

const node_session_secret = process.env.NODE_SESSION_SECRET;
/* END secret section */

var {database} = include('databaseConnection');

const userCollection = database.db(mongodb_database).collection('users');

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: false}));

var mongoStore = MongoStore.create({
	mongoUrl: `mongodb+srv://${mongodb_user}:${mongodb_password}@${mongodb_host}/sessions`,
	crypto: {
		secret: mongodb_session_secret
	}
})

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

app.get('/', async(req,res) => {
	if (req.session.authenticated) {
		var email = req.session.email;
		const result = await userCollection.find({ email: email }).project({ username: 1, email: 1, password: 1, _id: 1 }).toArray();
		res.render("index", { user: result[0].username});

	} else {
		res.render("index", { user: null});
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
		res.redirect("/signUpSubmit?message=" + msg);
		return;
	}


	var hashedPassword = await bcrypt.hash(password, saltRounds);

	await userCollection.insertOne({ username: username, email: email, password: hashedPassword});
	req.session.authenticated = true;
	req.session.email = email;
	req.session.cookie.maxAge = expireTime;
	res.redirect('/');
});

app.get('/signUpSubmit', (req, res) => {
	var msg = req.query.message;
	res.render("submitUser", { msg: msg ,previousPage: "createUser"});
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
		res.redirect("/loginSubmit?message=invalid email or password");
		return;
	}

	const result = await userCollection.find({ email: email }).project({ username: 1, email: 1, password: 1, _id: 1 }).toArray();

	if (result.length != 1) {
		res.redirect("/loginSubmit?message=user not found");
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
		res.redirect("/loginSubmit?message=incorrect password");
		return;
	}
});

app.get('/loginSubmit', (req, res) => {
	var msg = req.query.message;
	res.render("submitUser", { msg: msg,previousPage: "login" });
});


app.get('/logout', (req,res) => {
	req.session.destroy();
    res.redirect("/");
});

app.use(express.static(__dirname + "/public"));

app.get("*", (req,res) => {
	res.status(404).render("404");
})

app.listen(port, () => {
	console.log("Node application listening on port "+port);
}); 