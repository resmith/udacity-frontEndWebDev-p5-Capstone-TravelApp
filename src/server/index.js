const path = require("path");
const express = require("express");
const mockAPIResponse = require("./mockAPI.js");
const https = require("follow-redirects").https;
const fs = require("fs");
const dotenv = require("dotenv");
const cors = require("cors");
const fetch = require("node-fetch");

// Define constants
const app = express();
const port = 8081;
dotenv.config();
app.use(cors());

// *** Define Functions

const meaningSentimentKey = process.env.API_KEY;
const lang = "en";
const model = "general";

const retrieveSentiment2 = async (text) => {
  const url = `https://api.meaningcloud.com/sentiment-2.1?key=${meaningSentimentKey}&lang=${lang}&txt="${text}"&model=${model}`;
  console.log("retrieveSentiment2 url:", url);
  const req = await fetch(url);
  try {
    const reqData = await req.json();
    console.log("getWeatherForZip reqData: ", reqData);
    return reqData;
  } catch (error) {
    console.log("error", error);
  }
};

// Original method from Meaningcloud website - prefered to use fetch for async & ease of use
// const retrieveSentiment = (text) => {
//   console.log(`Your API key is ${process.env.API_KEY}`);

//   var options = {
//     method: "POST",
//     hostname: "api.meaningcloud.com",
//     path: `/sentiment-2.1?key=<${meaningSentimentKey}&lang=${lang}&txt=${text}&model=${model}`,
//     headers: {},
//     maxRedirects: 20,
//   };

//   console.log("retrieveSentiment options: ", options);
//   var req = https.request(options, function (res) {
//     var chunks = [];

//     res.on("data", function (chunk) {
//       chunks.push(chunk);
//     });

//     res.on("end", function (chunk) {
//       console.log("retrieveSentiment body: ", body.toString());
//       return body.toString();
//     });

//     res.on("error", function (error) {
//       console.error(error);
//     });
//   });

//   req.end();
// };

// // *** Mainline Logic
// app.use(express.static("dist"));

// console.log(__dirname);

// app.get("/", function (req, res) {
//   // res.sendFile('dist/index.html')
//   res.sendFile(path.resolve("src/client/views/index.html"));
// });

// designates what port the app will listen to for incoming requests

const createResponseObject = (obj) => {
  console.log("createResponseObject obj:", obj);
  let newObj = {};
  newObj.agreement = obj.agreement;
  newObj.subjectivity = obj.subjectivity;
  newObj.confidence = obj.confidence;
  newObj.irony = obj.irony;
  return newObj;
};

app.listen(port, function () {
  console.log(`Server listening on port ${port}`);
});

app.get("/meaning", function (req, res) {
  console.log("server index get./meaning req.query.text:", req.query.text);
  const { text } = req.query;
  retrieveSentiment2(text)
    .then((data) => createResponseObject(data))
    .then((objData) => {
      console.log("server index get./meaning data:", objData);
      res.send(objData);
    });
});
