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

function sessionValidation(req, res, next) {
	if (req.session.authenticated) {
		next();
	}
	else {
		res.redirect('/login');
	}
}

router.post('/picUpload', sessionValidation, upload.single('image'), async function (req, res, next) {
  let buf64 = req.file.buffer.toString('base64');
  cloudinary.uploader.upload("data:image/png;base64," + buf64, async function (error, result) {
    if (error) {
      return next(error);
    }
    await userCollection.updateOne({ email: req.session.email }, { $set: { image_id: result.url } });
    res.redirect('/profile');
  });
});

const weatherApiKey = process.env.WEATHER_API_KEY;
const unsplashAccessKey = process.env.UNSPLASH_ACCESS_KEY;

const cities = ["vancouver", "toronto"];

const getImageUrl = async (city) => {
  const { default: fetch } = await import('node-fetch');
  const response = await fetch(`https://api.unsplash.com/search/photos?query=${city}&client_id=${unsplashAccessKey}`);
  const data = await response.json();
  if (data.results && data.results.length > 0) {
    return data.results[0].urls.small;
  }
  return null;
};
router.get('/weather', sessionValidation, async (req, res) => {
  // console.log("in weather get route");
  // email = req.query.email;
  const result = await locationCollection.find().project({ _id: 0 }).toArray();
	const savedLocationsArr = await userCollection.find({ email: req.session.email }).project({ savedLocations: 1, _id: 0 }).toArray();
  const savedLocations = savedLocationsArr[0].savedLocations;
  var savedLocationsNames = [];
  savedLocations.forEach(async location => {
    if (location != null) savedLocationsNames.push(location.name);
  });
  res.render('weatherResults', { data: result, savedLocations: savedLocationsNames, email });
});

router.post('/weather', async (req, res) => {
  const { weatherType, startDate, endDate } = req.body;
  const { default: fetch } = await import('node-fetch');
  const email = req.query.email;

  try {
    const allResults = [];
    const uniqueCities = new Set();

    for (const city of cities) {
      const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/${startDate}/${endDate}?unitGroup=metric&include=days&key=${weatherApiKey}&contentType=json`);
      const textData = await response.text();
      let data;

      try {
        data = JSON.parse(textData);
      } catch (jsonError) {
        console.error(`Error parsing JSON for city ${city}:`, textData);
        throw new Error('Received non-JSON response from the weather API');
      }

      const filteredData = data.days.filter(day => day.conditions.toLowerCase().includes(weatherType.toLowerCase()));
      const imageUrl = await getImageUrl(city);

      if (filteredData.length > 0 && !uniqueCities.has(city)) {
        uniqueCities.add(city);
        allResults.push({ ...filteredData[0], city, imageUrl });
      }
    }

    const savedLocationsArr = await userCollection.find({ email: email }).project({ savedLocations: 1, _id: 0 }).toArray();
    const savedLocations = savedLocationsArr[0] ? savedLocationsArr[0].savedLocations : [];
    const savedLocationsNames = savedLocations.map(location => location.name);

    res.render('weatherResults', { data: allResults, savedLocations: savedLocationsNames, startDate, endDate, email });
  } catch (error) {
    console.error('Error fetching weather data:', error);
    res.status(500).send('Failed to fetch weather data');
  }
});

router.get('/destination', async (req, res) => {
  const city = req.query.city;
  const startDate = req.query.startDate;
  const endDate = req.query.endDate;
  const email = req.query.email;

  if (!city || !startDate || !endDate) {
    return res.status(400).send('City and date range must be provided');
  }

  try {
    const { default: fetch } = await import('node-fetch');
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/${startDate}/${endDate}?unitGroup=metric&include=days&key=${weatherApiKey}&contentType=json`);
    const textData = await response.text();
    let data;

    try {
      data = JSON.parse(textData);
    } catch (jsonError) {
      console.error(`Error parsing JSON for city ${city}:`, textData);
      return res.status(500).send('Failed to fetch weather data');
    }

    if (!data || !data.days) {
      return res.status(404).send('Weather data not found for the selected city and date range');
    }

    const filteredData = data.days.filter(day => {
      const date = new Date(day.datetime);
      return date >= new Date(startDate) && date <= new Date(endDate);
    });

    const location = {
      city,
      data: filteredData
    };

    const user = await userCollection.findOne({ email: email });
    if (!user) {
      return res.status(404).send('User not found');
    }

    const savedLocations = user.savedLocations || [];
    const bookmark = savedLocations.some(loc => loc.name === city);

    res.render("destination", { location, bookmark, email });

  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});



router.post('/weather', async (req, res) => {
  const { weatherType, startDate, endDate } = req.body;
  const { default: fetch } = await import('node-fetch');

  try {
    const allResults = [];
    const uniqueCities = new Set();

    for (const city of cities) {
      const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/${startDate}/${endDate}?unitGroup=metric&include=days&key=${weatherApiKey}&contentType=json`);
      const textData = await response.text();
      let data;

      try {
        data = JSON.parse(textData);
        console.log(data);
      } catch (jsonError) {
        console.error(`Error parsing JSON for city ${city}:`, textData);
        throw new Error('Received non-JSON response from the weather API');
      }

      const filteredData = data.days.filter(day => day.conditions.toLowerCase().includes(weatherType.toLowerCase()));
      const imageUrl = await getImageUrl(city);

      if (filteredData.length > 0 && !uniqueCities.has(city)) {
        uniqueCities.add(city);
        allResults.push({ ...filteredData[0], city, imageUrl });
      }
    }

    const email = req.query.email;
    const savedLocationsArr = await userCollection.find({ email: email }).project({ savedLocations: 1, _id: 0 }).toArray();
    const savedLocations = savedLocationsArr[0] ? savedLocationsArr[0].savedLocations : [];
    const savedLocationsNames = savedLocations.map(location => location.name);

    res.render('weatherResults', { data: allResults, savedLocations: savedLocationsNames, startDate, endDate });
  } catch (error) {
    console.error('Error fetching weather data:', error);
    res.status(500).send('Failed to fetch weather data');
  }
});


router.get('/destination', async (req, res) => {
  const city = req.query.city;
  const startDate = req.query.startDate;
  const endDate = req.query.endDate;
  const email = req.query.email;

  if (!city || !startDate || !endDate) {
    return res.status(400).send('City and date range must be provided');
  }

  try {
    const { default: fetch } = await import('node-fetch');
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/${startDate}/${endDate}?unitGroup=metric&include=days&key=${weatherApiKey}&contentType=json`);
    const textData = await response.text();
    let data;

    try {
      data = JSON.parse(textData);
    } catch (jsonError) {
      console.error(`Error parsing JSON for city ${city}:`, textData);
      return res.status(500).send('Failed to fetch weather data');
    }

    if (!data || !data.days) {
      return res.status(404).send('Weather data not found for the selected city and date range');
    }

    const filteredData = data.days.filter(day => {
      const date = new Date(day.datetime);
      return date >= new Date(startDate) && date <= new Date(endDate);
    });

    const location = {
      city,
      data: filteredData
    };

    const user = await userCollection.findOne({ email: email });
    if (!user) {
      return res.status(404).send('User not found');
    }

    const savedLocations = user.savedLocations || [];
    const bookmark = savedLocations.some(loc => loc.name === city);

    res.render("destination", { location, bookmark, email });

  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});



router.get('/review', sessionValidation, async (req, res) => {
  try {
    const locationName = req.query.location;
    if (!locationName) {
      return res.status(400).send('Location name is required');
    }

    const location = await locationCollection.findOne({ name: locationName });
    if (!location) {
      console.log(`${locationName} not found`);
      return res.render("404");
    }

    const reviews = location.reviews || [];
    let avgRating = 0;

    if (reviews.length > 0) {
      const totalStars = reviews.reduce((acc, review) => acc + review.starRating, 0);
      avgRating = totalStars / reviews.length;
      avgRating = Math.round(avgRating * 100) / 100;
    }

    res.render("review", {
      location,
      avgRating,
      reviews,
      email: req.session.email,
      userName: req.session.username
    });
  } catch (error) {
    console.error('Error fetching review data:', error);
    res.status(500).send('Internal Server Error');
  }
});




module.exports = router;
