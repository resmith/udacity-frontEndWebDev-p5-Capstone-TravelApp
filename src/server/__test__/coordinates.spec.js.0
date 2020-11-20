// Import the js file to test
import "babel-polyfill";

// Import functionality to test
const retrieveCoordinates = require("../retrieveCoordinates");
const createCoordinatesObject = require("../createCoordinatesObject");

// Get data needed for testing
const geoNamesResponse = require("./mockGeoNames");

describe("*** Test Server Coordinates:  Prep Check", () => {
  test("Ensure user has set export API_GEONAME_KEY=<GeonameKey> ", async function () {
    expect(process.env.API_GEONAME_KEY).toBeDefined();
  });
});

describe("Test Server Coordinates: getCoordinates() ", () => {
  test("has a response with expected property", async function () {
    const response = await retrieveCoordinates("London");
    expect(response).toHaveProperty("totalResultsCount");
  });
});

describe("Test Server Coordinates: getCoordinates()", () => {
  test("has results returned", async function () {
    const response = await retrieveCoordinates("London");
    expect(response.totalResultsCount).toBeGreaterThanOrEqual(0);
  });
});

describe("Test Server Coordinates: createCoordinatesObject()", () => {
  test("has results returned", function () {
    const response = createCoordinatesObject(geoNamesResponse);
    expect(response.countryCode).toBe("GB");
  });
});
