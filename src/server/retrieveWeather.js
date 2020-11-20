// Purpose
// Input: City
// Result:  Coordinates (latitude, longitude, country,)

const fetch = require("node-fetch");

async function retrieveWeather(weatherRequest) {
  const API_KEY = process.env.API_WEATHERBIT_KEY;
  if (!API_KEY) {
    console.log("ERROR: API_WEATHERBIT_KEY not defined in ENV");
  }
  const url = `http://api.weatherbit.io/v2.0/current?&lat=${weatherRequest.lat}&lon=${weatherRequest.lng}&key=${API_KEY}`;
  try {
    const req = await fetch(url);
    const reqData = await req.json();
    const parsedData = reqData.data[0];
    return parsedData;
  } catch (error) {
    console.log("error", error);
  }
}

module.exports = retrieveWeather;
