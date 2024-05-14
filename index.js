
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

app.get('/', (req,res) => {
    res.render("index");
});

app.get('/createUser', (req,res) => {
    res.render("createUser");
});


app.get('/login', (req,res) => {
    res.send("login");
});

app.post('/createUser', async (req,res) => {
	res.send("create user post");
//     var username = req.body.username;
//     var password = req.body.password;

// 	const schema = Joi.object(
// 		{
// 			username: Joi.string().alphanum().max(20).required(),
// 			password: Joi.string().max(20).required()
// 		});
	
// 	const validationResult = schema.validate({username, password});
// 	if (validationResult.error != null) {
// 	   console.log(validationResult.error);
// 	   res.redirect("/createUser");
// 	   return;
//    }

//     var hashedPassword = await bcrypt.hash(password, saltRounds);
	
// 	await userCollection.insertOne({username: username, password: hashedPassword, user_type: "user"});
// 	console.log("Inserted user");

//     var html = "successfully created user";
//     res.render("submitUser", {html: html});
});

app.post('/login', async (req,res) => {
	res.send("this is post login");
    // var username = req.body.username;
    // var password = req.body.password;

	// const schema = Joi.string().max(20).required();
	// const validationResult = schema.validate(username);
	// if (validationResult.error != null) {
	//    console.log(validationResult.error);
	//    res.redirect("/login");
	//    return;
	// }

	// const result = await userCollection.find({username: username}).project({username: 1, password: 1, user_type: 1, _id: 1}).toArray();

	// console.log(result);
	// if (result.length != 1) {
	// 	console.log("user not found");
	// 	res.redirect("/login");
	// 	return;
	// }
	// if (await bcrypt.compare(password, result[0].password)) {
	// 	console.log("correct password");
	// 	req.session.authenticated = true;
	// 	req.session.username = username;
    //     req.session.user_type = result[0].user_type;
	// 	req.session.cookie.maxAge = expireTime;

	// 	res.redirect('/loggedIn');
	// 	return;
	// }
	// else {
	// 	console.log("incorrect password");
	// 	res.redirect("/login");
	// 	return;
	// }
});

app.get('/logout', (req,res) => {
	req.session.destroy();
    res.send("log out");
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

app.get('/profile', (req,res) => {

    res.render("profile");
});

app.get('/loggingin', (req,res) => {

    res.render("loggingin");
});

app.get('/review', (req,res) => {

    res.render("review");
});

app.use(express.static(__dirname + "/public"));

app.get("*", (req,res) => {
	res.status(404).render("404");
})

app.listen(port, () => {
	console.log("Node application listening on port "+port);
}); 