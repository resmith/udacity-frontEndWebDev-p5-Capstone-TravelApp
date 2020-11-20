// Purpose
// Input: City
// Result:  Coordinates (latitude, longitude, country,)

const fetch = require("node-fetch");

async function retrievePic(city) {
  const API_KEY = process.env.API_PIXABAY_KEY;
  if (!API_KEY) {
    console.log("ERROR: API_WEATHERBIT_KEY not defined in ENV");
  }
  const encodedCity = encodeURIComponent(city);
  const url = `https://pixabay.com/api/?key=${API_KEY}&q=${encodedCity}&image_type=photo&category=places&per_page=3`;
  try {
    const req = await fetch(url);
    const reqData = await req.json();
    const parsedData = reqData.hits[0];
    return parsedData;
  } catch (error) {
    console.log("error", error);
  }
}

module.exports = retrievePic;
