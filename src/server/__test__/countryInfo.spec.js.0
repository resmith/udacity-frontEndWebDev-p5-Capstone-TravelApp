// Import the js file to test
import "babel-polyfill";

// Import functionality to test
const retrieveCountryInfo = require("../retrieveCountryInfo");

// Get data needed for testing
const countryCode = "GB";

describe("Test Server Pic: retrievePic() ", () => {
  test("has a response with expected property", async function () {
    const response = await retrieveCountryInfo(countryCode);
    expect(response).toHaveProperty("name");
  });
});

describe("Test Server Pic: retrievePic()", () => {
  test("has results returned", async function () {
    const response = await retrieveCountryInfo(countryCode);
    expect(response.capital).toBe("London");
  });
});
