// Purpose
// Input: City
// Result:  Coordinates (latitude, longitude, country,)

const fetch = require("node-fetch");

// const retrieveCoordinates = async (city) => {
async function retrieveCoordinates(city) {
  const API_KEY = process.env.API_GEONAME_KEY;
  if (!API_KEY) {
    console.log("ERROR: API_GEONAME_KEY not defined in ENV");
  }
  const encodedCity = encodeURIComponent(city);
  const url = `http://api.geonames.org/searchJSON?q=${encodedCity}&maxRows=10&username=${API_KEY}`;
  try {
    const req = await fetch(url);
    const reqData = await req.json();
    return reqData;
  } catch (error) {
    console.log("error", error);
  }
}

module.exports = retrieveCoordinates;
// export { retrieveCoordinates };
