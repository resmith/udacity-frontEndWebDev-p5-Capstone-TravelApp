// Import the js file to test
import { handleSubmit } from "../js/formHandler";

describe("Testing the formHandler functionality", () => {
  test("Testing the handleSubmit() function", () => {
    expect(handleSubmit).toBeDefined();
  });
});