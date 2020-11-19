// Import the js file to test
import { checkForName, cleanText } from "../src/client/js/utils";

describe("Testing the utils functionality", () => {
  test("Testing the cleanText() function", () => {
    expect(cleanText("he ?/|llo")).toBe("he llo");
  });
});

describe("Testing the utils functionality", () => {
  test("Testing the checkForName() function", () => {
    expect(checkForName("Picard")).toBe("Welcome, Captain!");
  });
});

describe("Testing the utils functionality", () => {
  test("Testing the checkForName() function", () => {
    expect(checkForName("Something Else")).toBe("Something Else");
  });
});
