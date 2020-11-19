// Import the js file to test
import "babel-polyfill";
// import { retrieveCoordinates } from "../retrieveCoordinates";
const retrieveCoordinates = require("../retrieveCoordinates");
const createCoordinatesObject = require("../createCoordinatesObject");
const geoNamesResponse = require("./mockGeoNames");

describe("*** Test Server:  Prep Check", () => {
  test("Ensure user has set export API_GEONAME_KEY=<GeonameKey> ", async function () {
    expect(process.env.API_GEONAME_KEY).toBeDefined();
  });
});

describe("Test Server: getCoordinates() ", () => {
  test("has a response with expected property", async function () {
    const response = await retrieveCoordinates("London");
    expect(response).toHaveProperty("totalResultsCount");
  });
});

describe("Test Server: getCoordinates()", () => {
  test("has results returned", async function () {
    const response = await retrieveCoordinates("London");
    expect(response.totalResultsCount).toBeGreaterThanOrEqual(0);
  });
});

describe("Test Server: createCoordinatesObject()", () => {
  test("has results returned", function () {
    const response = createCoordinatesObject(geoNamesResponse);
    expect(response.countryCode).toBe("GB");
  });
});
