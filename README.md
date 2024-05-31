# 2800-202410-BBY12
# SunSpot

## 1. Project Description
Our project team, BBY-12, is developing a travel app to help travelers choose their perfect trip destinations with a range of locations that are offered based on their preferred weather conditions.

## 2. Names of Contributors
* Radman Mohammadi
* Khalel Lopez
* Donghoon Oh
* Maria Espinola
* Saba Karbakhsh Ravari
	
## 3. Technologies and Resources Used
List technologies (with version numbers), API's, icons, fonts, images, media or data sources, and other resources that were used.
* HTML, CSS, JavaScript
* node
* express
* tailwind
* render
* cloudinary
* MongoDB
* visual crossing API
* google map API
* unsplash

## 4. Contents of Folder
Content of the project folder
│   .env
│   .gitignore
│   about.html
│   databaseConnection.js
│   index.js
│   model.js
│   package-lock.json
│   package.json
│   README.md
│   utils.js
├───public
│   ├───css
│   │       styles.css
│   │
│   ├───imgs
│   │       bookmark.png
│   │       Community.png
│   │       favicon.ico
│   │       Forecasts.png
│   │       Island.png
│   │       L1.png
│   │       L2.png
│   │       L3.png
│   │       logo.png
│   │       placeholder.jpg
│   │       placeholderUser.png
│   │       Sun.gif
│   │       Waves.gif
│   │       Weather.png
│   │
│   └───js
│           home.js
│           profile.js
│
├───routes
│       router.js
│
│
└───views
    │   404.ejs
    │   about_us.ejs
    │   createUser.ejs
    │   destination.ejs
    │   destinationFail.ejs
    │   editReview.ejs
    │   errorMessage.ejs
    │   home.ejs
    │   index.ejs
    │   login.ejs
    │   newPassword.ejs
    │   newPasswordSuccess.ejs
    │   post_review.ejs
    │   profile.ejs
    │   resetLinkSent.ejs
    │   resetPassword.ejs
    │   review.ejs
    │   setting.ejs
    │   signOut.ejs
    │   submitUser.ejs
    │   weather.ejs
    │   weatherResults.ejs
    │
    └───templates
            footer.ejs
            header.ejs
            homenav.ejs
            landingpage.ejs
            locations.ejs

## 5. Complete setup/installion/usage
State what a user needs to do when they come to your project.  How do others start using your code or application?
Here are the steps ...
* git clone https://github.com/mitt-argots-0x/2800-202410-BBY12.git
* npm i
* create .env file and put your information :
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_CLOUD_KEY=
CLOUDINARY_CLOUD_SECRET=

WEATHER_API_KEY=
UNSPLASH_ACCESS_KEY=

MONGODB_HOST=
MONGODB_USER=
MONGODB_PASSWORD=
MONGODB_DATABASE=

MONGODB_SESSION_SECRET=
NODE_SESSION_SECRET=

EMAIL=
APP_PASSWORD=

# 6.How to use the product (Features)
* create an account with your email and a chosen password and username
* after relocating to the home page you can either:
a. browse through the most popular destinations in the home page
b. search based on your preffered weather conditions in the search bar
* to get more information about a destination click on the location image and you will be relocated to a more detailed page
* in the detailed page you can click on the review button to see people's review about that location and also you can share your experience.( after posting your review you can edit it or delete it)
* if you want to save a location you just have to click on the bookmark button and the location will be appeared in your profile page under the "saved location" button(you can also unsave a location by clicking on the bookmark button again)
* in the profile page you can set a profile image
* in the setting you can change your personal information such as your password or your username.


# 7.Include Credits, References, and Licenses

# 8.How did you use AI? Tell us exactly what AI services and products you used and how you used them.
a. yes for temporary art assets and also debugging

b.DId you use AI to create data sets or clean data sets? If so, how? no we didn't

c.Does your app use AI? If so, how? no, it doesn't

d. Did you encounter any limitations? What were they, and how did you overcome them?no, we didn't.

# 9.Contact Information 
Saba: saba.karbakhsh@gmail.com
Don: doh15@my.bcit.ca
Radman: rmohammadi2@my.bcit.ca
Maria: mespinola@my.bcit.ca
KC: khalelclarklopez@gmail.com
