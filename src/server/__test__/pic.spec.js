// Import the js file to test
import "babel-polyfill";

// Import functionality to test
const retrievePic = require("../retrievePic");

// Get data needed for testing
const city = "San Diego";

describe("*** Test Server Pic:  Prep Check", () => {
  test("Ensure user has set export API_PIXABAY_KEY=<Key> ", async function () {
    expect(process.env.API_PIXABAY_KEY).toBeDefined();
  });
});

describe("Test Server Pic: retrievePic() ", () => {
  test("has a response with expected property", async function () {
    const response = await retrievePic(city);
    expect(response).toHaveProperty("id");
  });
});

describe("Test Server Pic: retrievePic()", () => {
  test("has results returned", async function () {
    const response = await retrievePic(city);
    expect(response.id).toBeGreaterThanOrEqual(0);
  });
});
