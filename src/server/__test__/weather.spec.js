// Import the js file to test
import "babel-polyfill";

// Import functionality to test
const retrieveWeather = require("../retrieveWeather");

// Get data needed for testing
const geoNamesResponse = require("./mockGeoNames");

describe("*** Test Server Weather:  Prep Check", () => {
  test("Ensure user has set export API_WEATHERBIT_KEY=<Key> ", async function () {
    expect(process.env.API_WEATHERBIT_KEY).toBeDefined();
  });
});

describe("Test Server Weather: retrieveWeather() ", () => {
  test("has a response with expected property", async function () {
    const coords = { lat: 38.123, lng: -78.543 };
    const response = await retrieveWeather(coords);
    expect(response).toHaveProperty("city_name");
  });
});

describe("Test Server Weather: retrieveWeather()", () => {
  test("has results returned", async function () {
    const coords = { lat: 38.123, lng: -78.543 };
    const response = await retrieveWeather(coords);
    expect(response.city_name).toBe("Free Union");
  });
});
