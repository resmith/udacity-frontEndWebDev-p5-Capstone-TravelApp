// Import the js file to test
import { checkForName, cleanText } from "../js/utils";

describe("Testing the utils functionality", () => {
  test("Testing the cleanText() function", () => {
    expect(cleanText("he ?/|llo")).toBe("he llo");
  });
});
