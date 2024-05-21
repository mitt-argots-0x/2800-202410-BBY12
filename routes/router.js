const router = require('express').Router();

var {database} = include('databaseConnection');
var ObjectId = require('mongodb').ObjectId;

const crypto = require('crypto');
const {v4: uuid} = require('uuid');

const passwordPepper = "SeCretPeppa4MySal+";

const cloud_name = process.env.CLOUDINARY_CLOUD_NAME;

const cloudinary = require('cloudinary');
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_CLOUD_KEY,
  api_secret: process.env.CLOUDINARY_CLOUD_SECRET
});

const multer  = require('multer')
const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

const mongodb_database = process.env.MONGODB_DATABASE;
const userCollection = database.db(mongodb_database).collection('users');

const Joi = require("joi");
const mongoSanitize = require('express-mongo-sanitize');

router.use(mongoSanitize(
    {replaceWith: '%'}
));

router.post('/picUpload', upload.single('image'), function(req, res, next) {
	let buf64 = req.file.buffer.toString('base64');
  stream = cloudinary.uploader.upload("data:image/png;base64," + buf64, async function(result) { //_stream
	await userCollection.updateOne({email: req.query.email}, {$set: {image_id: result.url}});
	res.redirect('/profile');
  } );
});
module.exports = router;
