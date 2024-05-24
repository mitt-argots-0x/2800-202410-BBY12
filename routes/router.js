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
//   console.log("in weather get route");
//   email = req.query.email;
//   const result = await locationCollection.find().project({ _id: 0 }).toArray();
// 	const savedLocationsArr = await userCollection.find({ email: email }).project({ savedLocations: 1, _id: 0 }).toArray();
//   const savedLocations = savedLocationsArr[0].savedLocations;
// 	var savedLocationsNames = [];
//   savedLocations.forEach(async location => {
//     savedLocationsNames.push(location.name);
//   });
//   console.log(savedLocationsNames);
//   res.render('weatherResults', { data: result, savedLocations: savedLocationsNames });
// });

// router.post('/weather', async (req, res) => {
//   const { weatherType, startDate, endDate } = req.body;
//   const { default: fetch } = await import('node-fetch');

//   try {
//     const allResults = [];

//     for (const city of cities) {
//       const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/${startDate}/${endDate}?unitGroup=metric&include=days&key=${weatherApiKey}&contentType=json`);
//       const textData = await response.text();
//       let data;

//       try {
//         data = JSON.parse(textData);
//       } catch (jsonError) {
//         console.error(`Error parsing JSON for city ${city}:`, textData);
//         throw new Error('Received non-JSON response from the weather API');
//       }

//       const filteredData = data.days.filter(day => day.conditions.toLowerCase().includes(weatherType.toLowerCase()));
//       const imageUrl = await getImageUrl(city);

//       filteredData.forEach(day => allResults.push({ ...day, city, imageUrl }));
//     }
  allResults = [
    
    {city:"seoul",conditions:"Rain, Partially cloudy",date:"2024-05-24",description:null,imageUrl:"https://images.unsplash.com/photo-1538485399081-7191377e8241?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTQ4NTR8MHwxfHNlYXJjaHwxfHxzZW91bHxlbnwwfHx8fDE3MTY1NzUxNzB8MA&ixlib=rb-4.0.3&q=80&w=400",name:"seoul",rating:{"$numberInt":"0"},reviews:[],temp:{"$numberDouble":"23.4"}},
    {city:"halifax",conditions:"Rain, Partially cloudy",date:"2024-05-24",description:null,imageUrl:"https://images.unsplash.com/photo-1580764330084-7729b21ae9e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTQ4NTR8MHwxfHNlYXJjaHwxfHxoYWxpZmF4fGVufDB8fHx8MTcxNjU3NTE3MXww&ixlib=rb-4.0.3&q=80&w=400",name:"halifax",rating:{"$numberInt":"0"},reviews:[],temp:{"$numberDouble":"23.5"}},
    {city:"ottawa",conditions:"Rain, Partially cloudy",date:"2024-05-24",description:null,imageUrl:"https://images.unsplash.com/photo-1613059488547-0fc691db5231?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTQ4NTR8MHwxfHNlYXJjaHwxfHxvdHRhd2F8ZW58MHx8fHwxNzE2NTc1MTcxfDA&ixlib=rb-4.0.3&q=80&w=400",name:"ottawa",rating:{"$numberInt":"0"},reviews:[],temp:{"$numberDouble":"18.8"}},
    {city:"winnipeg",conditions:"Rain, Overcast",date:"2024-05-24",description:null,imageUrl:"https://images.unsplash.com/photo-1591658522986-9eb791d2a89a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTQ4NTR8MHwxfHNlYXJjaHwxfHx3aW5uaXBlZ3xlbnwwfHx8fDE3MTY1NzUxNzJ8MA&ixlib=rb-4.0.3&q=80&w=400",name:"winnipeg",rating:{"$numberInt":"0"},reviews:[],temp:{"$numberDouble":"11.7"}},
    {city:"quebec city",conditions:"Rain, Partially cloudy",date:"2024-05-24",description:null,imageUrl:"https://images.unsplash.com/photo-1612939951465-29c7b977b7e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTQ4NTR8MHwxfHNlYXJjaHwxfHxxdWViZWMlMjBjaXR5fGVufDB8fHx8MTcxNjU3NTE3Mnww&ixlib=rb-4.0.3&q=80&w=400",name:"quebec city",rating:{"$numberInt":"0"},reviews:[],temp:{"$numberDouble":"18.6"}},
    {city:"victoria",conditions:"Rain, Partially cloudy",date:"2024-05-24",description:null,imageUrl:"https://images.unsplash.com/photo-1601241172077-a7055d23082d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTQ4NTR8MHwxfHNlYXJjaHwxfHx2aWN0b3JpYXxlbnwwfHx8fDE3MTY1NzUxNzN8MA&ixlib=rb-4.0.3&q=80&w=400",name:"victoria",rating:{"$numberInt":"0"},reviews:[],temp:{"$numberDouble":"11.9"}},
    {city:"saskatoon",conditions:"Rain, Partially cloudy",date:"2024-05-24",description:null,imageUrl:"https://images.unsplash.com/photo-1601267934438-35a87d2407e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTQ4NTR8MHwxfHNlYXJjaHwxfHxzYXNrYXRvb258ZW58MHx8fHwxNzE2NTc1MTc0fDA&ixlib=rb-4.0.3&q=80&w=400",name:"saskatoon",rating:{"$numberInt":"0"},reviews:[],temp:{"$numberDouble":"14.3"}},
    {city:"abbotsford",conditions:"Rain, Partially cloudy",date:"2024-05-24",description:null,imageUrl:"https://images.unsplash.com/photo-1515614091330-bf57aa99e0ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTQ4NTR8MHwxfHNlYXJjaHwxfHxhYmJvdHNmb3JkfGVufDB8fHx8MTcxNjU3NTE3NXww&ixlib=rb-4.0.3&q=80&w=400",name:"abbotsford",rating:{"$numberInt":"0"},reviews:[],temp:{"$numberDouble":"13.4"}},
    {city:"montreal",conditions:"Rain, Partially cloudy",date:"2024-05-24",description:null,imageUrl:"https://images.unsplash.com/photo-1559682468-a6a29e7d9517?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTQ4NTR8MHwxfHNlYXJjaHwxfHxtb250cmVhbHxlbnwwfHx8fDE3MTY1NzUxNzF8MA&ixlib=rb-4.0.3&q=80&w=400",name:"montreal",rating:{"$numberInt":"0"},reviews:[],temp:{"$numberDouble":"19.1"}},
    {city:"vancouver",conditions:"Rain, Partially cloudy",date:"2024-05-24",description:null,imageUrl:"https://images.unsplash.com/photo-1559511260-66a654ae982a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTQ4NTR8MHwxfHNlYXJjaHwxfHx2YW5jb3V2ZXJ8ZW58MHx8fHwxNzE2NTc1MTcwfDA&ixlib=rb-4.0.3&q=80&w=400",name:"vancouver",rating:{"$numberInt":"0"},reviews:[],temp:{"$numberDouble":"12.9"}},
    {city:"nanaimo",conditions:"Rain, Partially cloudy",date:"2024-05-24",description:null,imageUrl:"https://images.unsplash.com/photo-1624124708552-6d13ea29dda8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTQ4NTR8MHwxfHNlYXJjaHwxfHxuYW5haW1vfGVufDB8fHx8MTcxNjU3NTE3Nnww&ixlib=rb-4.0.3&q=80&w=400",name:"nanaimo",rating:{"$numberInt":"0"},reviews:[],temp:{"$numberDouble":"12.8"}},
    {city:"kingston",conditions:"Rain, Partially cloudy",date:"2024-05-24",description:null,imageUrl:"https://images.unsplash.com/photo-1562934407-8bae4230991c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTQ4NTR8MHwxfHNlYXJjaHwxfHxraW5nc3RvbnxlbnwwfHx8fDE3MTY1NzUxNzV8MA&ixlib=rb-4.0.3&q=80&w=400",name:"kingston",rating:{"$numberInt":"0"},reviews:[],temp:{"$numberInt":"32"}}
  
  ];
  email = req.query.email;
  const savedLocationsArr = await userCollection.find({ email: email }).project({ savedLocations: 1, _id: 0 }).toArray();
  const savedLocations = savedLocationsArr[0].savedLocations;
	var savedLocationsNames = [];
  savedLocations.forEach(async location => {
    savedLocationsNames.push(location.name);
  });
    // allResults.forEach(async result => {
      
    //   await locationCollection.updateOne({ city: result.city , date: result.date}, { $set: { name: result.city, description:null, date: result.date, conditions: result.conditions, temp: result.temp, imageUrl: result.imageUrl, reviews: [], rating: 0 } }, { upsert: true });
    // });
    res.render('weatherResults', { data: allResults, savedLocations: savedLocationsNames});
  // } catch (error) {
  //   console.error('Error fetching weather data:', error);
  //   res.status(500).send('Failed to fetch weather data');
  // }
});

module.exports = router;
