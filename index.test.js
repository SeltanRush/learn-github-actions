const { sum } = require(".");

describe("sum function", () => {
  it("success", () => {
    expect(sum(1, 2)).toBe(3);
  });

  it("failure", () => {
    expect(sum(1, 2)).toBe(4);
  });
});
