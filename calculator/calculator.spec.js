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
    it("it should add 2 numbers ", () => {
      // line below is the matcher
      expect(add(2, 3)).toBe(5);
      expect(add(2, 0)).toBe(2);
      expect(add(1, 1)).toBe(2);
    });

    it("should return 0 when called with no arguements", () => {
      expect(add()).toBe(0);
    });

    it("should sum a list of numbers seperated by a comma", () => {
      expect(add(2, 3, 4)).toBe(9);
    });
  });
});

// try to make the tests fail, before making them pass
