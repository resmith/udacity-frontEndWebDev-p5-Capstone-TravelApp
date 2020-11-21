const path = require("path");
const express = require("express");
// const mockAPIResponse = require("./mockAPI.js");
const https = require("follow-redirects").https;
const fs = require("fs");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");
const session = require("express-session");
var cookieParser = require("cookie-parser");

// Application code
const retrieveCoordinates = require("./retrieveCoordinates");
const createCoordinatesObject = require("./createCoordinatesObject");
const retrieveWeather = require("./retrieveWeather");
const retrievePic = require("./retrievePic");
const retrieveCountryInfo = require("./retrieveCountryInfo");

// Define constants
const app = express();
dotenv.config();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());
var routesArray = ["/", "/coordinates", "/weather", "/pic", "/countryInfo"];
app.use(
  routesArray,
  session({
    secret: process.env.SESSION_KEY,
    key: "express.sessionID",
    resave: false,
    saveUninitialized: true,
    cookie: { httpOnly: true, secure: false, maxAge: null },
  })
);

const port = process.env.PORT || 8081;
console.log("server process.env.PORT: ", process.env.PORT);
// Setup Server
app.listen(port, function () {
  console.log(`Server listening on the port ${port}`);
});
app.use(express.static("dist"));
console.log(__dirname);

// //-- express is serving the dist folder via express.static call above
// app.get("/", function (req, res) {
//   res.sendFile("dist/index.html");
//   // res.sendFile(path.resolve(src/client/views/index.html')
// });

let tripInfo = {};

// *** Define Routes
app.get("/coordinates", function (req, res) {
  const { city } = req.query;
  tripInfo.city = city;
  // req.session.city = city;
  retrieveCoordinates(city)
    .then((data) => createCoordinatesObject(data))
    .then((data) => {
      tripInfo = { ...tripInfo, ...data };
      return data;
    })
    .then((objData) => {
      res.send(objData);
    });
});

app.get("/weather", function (req, res) {
  const { lat, lng, dayForForecast, daysOut } = req.query;
  const weatherRequest = { lat, lng, dayForForecast, daysOut };
  retrieveWeather(weatherRequest)
    .then((data) => {
      tripInfo = { ...tripInfo, ...data };
      return data;
    })
    .then((objData) => {
      res.send(objData);
    });
});

app.get("/pic", function (req, res) {
  const { city } = req.query;
  retrievePic(city)
    .then((data) => {
      tripInfo = { ...tripInfo, ...data };
      return data;
    })
    .then((objData) => {
      res.send(objData);
    });
});

app.get("/countryInfo", function (req, res) {
  const { country } = req.query;
  retrieveCountryInfo(country)
    .then((data) => {
      tripInfo = { ...tripInfo, ...data };
      return data;
    })
    .then((objData) => {
      res.send(objData);
    });
});
