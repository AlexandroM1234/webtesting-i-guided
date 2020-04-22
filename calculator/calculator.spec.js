const { add } = require("./calculator.js");

// test away!
describe("calculator.js", () => {
  // testcase
  it("should run tests without errors", () => {
    // arrage --> setup the world

    // act --> execute the code we're testing

    //assert --> check out assumptions
    expect(true).toBeTruthy();
  });
  describe("add function", () => {
    it("should return null ", () => {
      expect(add()).toBe(null);
    });
  });
});

// try to make the tests fail, before making them pass
