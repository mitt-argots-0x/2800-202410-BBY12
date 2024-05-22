const router = require('express').Router();

var { database } = include('databaseConnection');
var ObjectId = require('mongodb').ObjectId;

const crypto = require('crypto');
const { v4: uuid } = require('uuid');

const passwordPepper = "SeCretPeppa4MySal+";

const cloud_name = process.env.CLOUDINARY_CLOUD_NAME;

const cloudinary = require('cloudinary');
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_CLOUD_KEY,
  api_secret: process.env.CLOUDINARY_CLOUD_SECRET
});

const multer = require('multer')
const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

const mongodb_database = process.env.MONGODB_DATABASE;
const userCollection = database.db(mongodb_database).collection('users');

const Joi = require("joi");
const mongoSanitize = require('express-mongo-sanitize');

router.use(mongoSanitize(
  { replaceWith: '%' }
));

router.post('/picUpload', upload.single('image'), function (req, res, next) {
  let buf64 = req.file.buffer.toString('base64');
  stream = cloudinary.uploader.upload("data:image/png;base64," + buf64, async function (result) { //_stream
    await userCollection.updateOne({ email: req.query.email }, { $set: { image_id: result.url } });
    res.redirect('/profile');
  });
});
module.exports = router;


// the weather fetch from API
const fetch = require('node-fetch'); // Ensure you have node-fetch installed
const weatherApiKey = process.env.WEATHER_API_KEY; // Make sure you add your API key to the .env file

const cities = ["seoul", "vancouver", "toronto", "montreal", "edmonton", "halifax", "ottawa", "winnipeg", "quebec city", "hamilton", "kitchener", "london", "victoria", "oshawa", "windsor", "saskatoon", "kelowna", "abbotsford", "kingston", "nanaimo"];

router.get('/weather', (req, res) => {
  res.render('weather');
});

router.post('/weather', async (req, res) => {
  const { weatherType, startDate, endDate } = req.body;

  try {
    const allResults = [];

    for (const city of cities) {
      const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/${startDate}/${endDate}?unitGroup=metric&include=days&key=${weatherApiKey}&contentType=json`);
      const data = await response.json();

      // Filter data based on the weatherType
      const filteredData = data.days.filter(day => day.conditions.toLowerCase().includes(weatherType.toLowerCase()));
      filteredData.forEach(day => allResults.push({ ...day, city }));
    }

    res.render('weatherResults', { data: allResults });
  } catch (error) {
    console.error('Error fetching weather data:', error);
    res.status(500).send('Failed to fetch weather data');
  }
});
// end of weather fetch from API


module.exports = router;
