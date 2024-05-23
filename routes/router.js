const express = require('express');
const router = express.Router();
require('dotenv').config();

const { database } = include('databaseConnection');
const ObjectId = require('mongodb').ObjectId;
const crypto = require('crypto');
const { v4: uuid } = require('uuid');
const passwordPepper = "SeCretPeppa4MySal+";

const cloudinary = require('cloudinary').v2;
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_CLOUD_KEY,
  api_secret: process.env.CLOUDINARY_CLOUD_SECRET
});

const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const mongodb_database = process.env.MONGODB_DATABASE;
const userCollection = database.db(mongodb_database).collection('users');
const locationCollection = database.db(mongodb_database).collection('locations');

const Joi = require("joi");
const mongoSanitize = require('express-mongo-sanitize');

router.use(mongoSanitize({ replaceWith: '%' }));

router.post('/picUpload', upload.single('image'), async function (req, res, next) {
  let buf64 = req.file.buffer.toString('base64');
  cloudinary.uploader.upload("data:image/png;base64," + buf64, async function (error, result) {
    if (error) {
      return next(error);
    }
    await userCollection.updateOne({ email: req.query.email }, { $set: { image_id: result.url } });
    res.redirect('/profile');
  });
});
module.exports = router;

// the weather fetch from API
const weatherApiKey = process.env.WEATHER_API_KEY; // Make sure you add your API key to the .env file
const unsplashAccessKey = process.env.UNSPLASH_ACCESS_KEY;

const cities = ["seoul", "vancouver", "toronto", "montreal", "edmonton", "halifax", "ottawa", "winnipeg", "quebec city", "hamilton", "kitchener", "london", "victoria", "oshawa", "windsor", "saskatoon", "kelowna", "abbotsford", "kingston", "nanaimo"];

// Function to get image URL from Unsplash
const getImageUrl = async (city) => {
  const { default: fetch } = await import('node-fetch');
  const response = await fetch(`https://api.unsplash.com/search/photos?query=${city}&client_id=${unsplashAccessKey}`);
  const data = await response.json();
  if (data.results && data.results.length > 0) {
    return data.results[0].urls.small; // Return the URL of the first image
  }
  return null; // Return null if no image is found
};

router.get('/weather', async (req, res) => {
  console.log("in weather get route");
  email = req.query.email;
  const result = await locationCollection.find().project({ _id: 0 }).toArray();
	const savedLocationsArr = await userCollection.find({ email: email }).project({ savedLocations: 1, _id: 0 }).toArray();
  const savedLocations = savedLocationsArr[0].savedLocations;
	var savedLocationsNames = [];
  savedLocations.forEach(async location => {
    savedLocationsNames.push(location.name);
  });
  console.log(savedLocationsNames);
  res.render('weatherResults', { data: result, savedLocations: savedLocationsNames });
});

router.post('/weather', async (req, res) => {
  // const { weatherType, startDate, endDate } = req.body;
  // const { default: fetch } = await import('node-fetch');

  // try {
  //   const allResults = [];

  //   for (const city of cities) {
  //     const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/${startDate}/${endDate}?unitGroup=metric&include=days&key=${weatherApiKey}&contentType=json`);
  //     const textData = await response.text();
  //     let data;

  //     try {
  //       data = JSON.parse(textData);
  //     } catch (jsonError) {
  //       console.error(`Error parsing JSON for city ${city}:`, textData);
  //       throw new Error('Received non-JSON response from the weather API');
  //     }

  //     const filteredData = data.days.filter(day => day.conditions.toLowerCase().includes(weatherType.toLowerCase()));
  //     const imageUrl = await getImageUrl(city);

  //     filteredData.forEach(day => allResults.push({ ...day, city, imageUrl }));
  //   }
  allResults = [
    {
      city: 'Seoul',
      datetime: '2021-08-01',
      conditions: ['Sunny'],
      tempmax: 30,
      tempmain: 0,
      humidity: 50,
      imageUrl: 'https://images.unsplash.com/photo-1627322480993-8b7e5e7f9c1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNTA5MzZ8MHwxfGFsbHwxfHNvbWV8fHxlYXJuaW5nfHx8fHx8fHwxNjI3MzIyNzIw&ixlib=rb-1.2.1&q=80&w=400' },  

    {
      city: 'Vancouver',
      datetime: '2021-08-01',
      conditions: ['Sunny'],   
      tempmax: 25,
      tempmin: 5,
      humidity: 50,
      imageUrl: 'https://images.unsplash.com/photo-1627322480993-8b7e5e7f9c1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNTA5MzZ8MHwxfGFsbHwxfHNvbWV8fHxlYXJuaW5nfHx8fHx8fHwxNjI3MzIyNzIw&ixlib=rb-1.2.1&q=80&w=400' }

  ];
  email = req.query.email;
  const savedLocationsArr = await userCollection.find({ email: email }).project({ savedLocations: 1, _id: 0 }).toArray();
  const savedLocations = savedLocationsArr[0].savedLocations;
	var savedLocationsNames = [];
  
  savedLocations.forEach(async location => {
    savedLocationsNames.push(location.name);
  });
    allResults.forEach(async result => {
      await locationCollection.updateOne({ city: result.city}, { $set: { name: result.city, description:null, date: result.datetime, conditions: result.conditions, temp: result.tempmax, imageUrl: result.imageUrl, reviews: [], rating: 0 } }, { upsert: true });
    });
    res.render('weatherResults', { data: allResults, savedLocations: savedLocationsNames});
  // } catch (error) {
  //   console.error('Error fetching weather data:', error);
  //   res.status(500).send('Failed to fetch weather data');
  // }
});

module.exports = router;
