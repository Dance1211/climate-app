# WhereTo. A Climate-based Travel App.

![image](https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00)
![image](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![image](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![image](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![image](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![image](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![image](https://img.shields.io/badge/Chart.js-FF6384?style=for-the-badge&logo=chartdotjs&logoColor=white)

![whereto](https://user-images.githubusercontent.com/83911563/157258361-43ad5104-df0e-47b4-8834-5b1f34c53fba.gif)

## Video Preview

![video preview](https://user-images.githubusercontent.com/68435229/157645306-b15d21bc-925b-41bf-bc9b-e6196c6c556f.mp4)

## Built by Team X

- [Ben Weston](https://github.com/benwestondigital)
- [Chris H.](https://github.com/CH-DD)
- [Elliot Robertson](https://github.com/ellriffs)
- [Josh Banister](https://github.com/Dance1211)
- [Oliver Jim](https://github.com/oliverj95)

## Description

This app was completed over a 2 week period in early 2022, as a final group project on the [Northcoders](https://northcoders.com/) software development bootcamp. The website uses the [Köppen climate classification system](https://en.wikipedia.org/wiki/K%C3%B6ppen_climate_classification) to serve the user with locations that have a similar climate to their input destination.

The app uses a non-relational database to store information about the climate zones and destinations, along with their corresponding latitude/longitude values. External APIs are used to grab relevant pictures, the current weather, and historical weather patterns.

### Technology Used

For this project we decided to use several pieces of tech that were new to the team, embracing technology that is currently highly rated by developers - in addition to the fundamentals that we had been using throughout bootcamp.

- Front End: [Svelte framework](https://svelte.dev/), [Chart.js](https://www.chartjs.org/)
- Back End: [SvelteKit framework](https://kit.svelte.dev/)
- Database: [MongoDB](https://www.mongodb.com/)
- APIs: [Google Places API](https://developers.google.com/maps/documentation/places/web-service/overview), [OpenWeatherMap API](https://openweathermap.org/api), [Okiolab Weather Data API](https://oikolab.com/api-details#api=weather&operation=weather-data)
- Languages: Svelte, TypeScript, CSS, JavaScript, HTML

## Setting up / Installation Requirements

### Prerequisites

- Node.js 17.x [Node.js](https://nodejs.org/en/)

## Installation

### Cloning

Download the project into a local folder -

- In your terminal:

  `$ git clone https://github.com/Dance1211/climate-app.git`

  `$ cd climate-app`

- The dependencies can be installed by running the command:

  `$ npm install`

### Set up env varibles

1. Create a [MongoDB Atlas](https://www.mongodb.com/atlas/database) database project following these [instructions](https://docs.atlas.mongodb.com/getting-started/) up to the 'connect to your cluster' section

2. Retrieve your MongoDB URI:
    - Go to MongoDB Atlas Database and press connect -> connect your application (using Node.js driver)
    - Copy the URI (connection string)
    - Edit the URI so that `<password>` is replaced by your real MongoDB password
    - Edit the URI so that `myFirstDatabase` is replaced by `locations`
3. Register for a [Google Maps](https://mapsplatform.google.com/maps-products/) API Key.
    APIs that need to be enabled:
    - Geocoding API
    - Places API
4. Register for [Oikolab Weather](https://oikolab.com/api-details#api=weather&operation=weather-data) free historical weather API key.
5. Register for [OpenWeather](https://openweathermap.org/api) free current weather API key

Create a .env file at the root and insert the following:

```js
VITE_API_KEY=YOUR_GOOGLE_MAPS_API_KEY
MONGODB_URI=YOUR_MONGODB_ATLAS_URI
MONGODB_DB_LOCATIONS=locations
MONGODB_KGCODES=kg-codes
MONGODB_CITIES=cities
VITE_OIKO_WEATHER_KEY=YOUR_OIKOLAB_API_KEY
VITE_WEATHER_API_KEY =YOUR_OPENWEATHER_API_KEY 
```

## Running the Application

- Once installed, the website can by run locally via:

  `$ npm run dev`

which will load up the website in your browser.

To seed the database, navigate to `/seed` and press the seed button. It may take a while to load this page and then to seed the database. You can see the progress in your node console. You can then return to the homepage and use the application.

## Demo

An initial working prototype of the app can be found at: [LINK](add link here).

The core search functionality is in place, and the user can retrieve a list of search results. 

Please note - the 'My Places' and 'My Locations' pages currently feature hard-coded links, for demo purposes. We would like to make this feature entirely dynamic at a later date.

Due to limits on external API requests, there may be occasional issues retrieving results from third party APIs. In which case, you can take a look at our [video preview](#video-preview) for a general overview.

## Further improvements

Whilst we are proud of what we achieved as a team in the short time frame, we have a bunch of 'desirable' refinements to both the functionality and styling that were not quite possible within the 2 weeks. Plus a series of additional features that we would like to add.

You can see some of these desirable features in our wireframes below - created early on in the project.
![travel app_wireframe3_page1](https://user-images.githubusercontent.com/68435229/157651552-a724d83f-9927-460d-be57-4253b75c2717.jpg)
![travel app_wireframe3_page2](https://user-images.githubusercontent.com/68435229/157651579-d259e7f0-6643-444f-9563-2639931394ea.jpg)
![travel app_wireframe3_page3](https://user-images.githubusercontent.com/68435229/157651593-4190c926-e272-4eed-92c1-2db92452548e.jpg)