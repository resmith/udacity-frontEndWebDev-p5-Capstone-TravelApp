// Purpose
// Input: City
// Result:  Coordinates (latitude, longitude, country,)

const fetch = require("node-fetch");

async function retrieveCountryInfo(countryCode) {
  const API_KEY = process.env.API_PIXABAY_KEY;

  const url = `https://restcountries.eu/rest/v2/alpha/${countryCode}`;
  try {
    const req = await fetch(url);
    const reqData = await req.json();
    return reqData;
  } catch (error) {
    console.log("error", error);
  }
}

module.exports = retrieveCountryInfo;
