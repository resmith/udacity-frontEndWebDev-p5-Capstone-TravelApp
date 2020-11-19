const path = require("path");
const express = require("express");
// const mockAPIResponse = require("./mockAPI.js");
const https = require("follow-redirects").https;
const fs = require("fs");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");

// Application code
// import { retrieveCoordinates } from "../retrieveCoordinates";
const retrieveCoordinates = require("./retrieveCoordinates");
const createCoordinatesObject = require("./createCoordinatesObject");

// Define constants
const app = express();
const port = 8081;
dotenv.config();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Setup Server
app.listen(port, function () {
  console.log(`Server listening on port ${port}`);
});
app.use(express.static("dist"));
console.log(__dirname);
app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
  // res.sendFile(path.resolve(src/client/views/index.html')
});

// *** Define Routes
app.get("/coordinates", function (req, res) {
  console.log("server index get./meaning req.query.city:", req.query.city);
  const { city } = req.query;
  retrieveCoordinates(city)
    .then((data) => createCoordinatesObject(data))
    .then((objData) => {
      console.log("server index get./coordinates data:", objData);
      res.send(objData);
    });
});
