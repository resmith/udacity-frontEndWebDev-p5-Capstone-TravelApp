// Purpose
// Input: City
// Result:  Coordinates (latitude, longitude, country,)

const fetch = require("node-fetch");

async function retrieveWeather(weatherRequest) {
  const API_KEY = process.env.API_WEATHERBIT_KEY;
  if (!API_KEY) {
    console.log("ERROR: API_WEATHERBIT_KEY not defined in ENV");
  }
  const daysForecast =
    weatherRequest.daysOut > 15 ? 15 : weatherRequest.daysOut - 1;
  const url = `http://api.weatherbit.io/v2.0/forecast/daily?lat=${weatherRequest.lat}&lon=${weatherRequest.lng}&key=${API_KEY}`;
  try {
    const req = await fetch(url);
    const reqData = await req.json();
    const parsedData = reqData.data[daysForecast];
    return parsedData;
  } catch (error) {
    console.log("error", error);
  }
}

module.exports = retrieveWeather;
