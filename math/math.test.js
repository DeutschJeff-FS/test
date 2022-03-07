const {
  sum,
  difference,
  product,
  quotient,
  squareRoot,
  maxNum,
} = require("./math");

describe("Testing the math module", () => {
  // Test for addition
  test("Add two numbers together to find the sum", () => {
    expect(sum(2, 3)).toBe(5);
  });

  // Test for subtraction
  test("Subtract one number from another to find the difference", () => {
    expect(difference(5, 4)).toBe(1);
  });

  // Test for multiplication
  test("Multiply two numbers together to find the product", () => {
    expect(product(5, 6)).toBe(30);
  });

  // Test for division
  test("Divide one number by another to find the quotient", () => {
    expect(quotient(10, 2)).toBe(5);
  });

  // Test for square root
  test("Find the square root of a given number", () => {
    expect(squareRoot(9)).toBe(3);
  });

  // Test for max from a set of numbers not in an array
  test("Find the largest number from a given set of numbers", () => {
    expect(maxNum(1, 5, 3)).toBe(5);
  });
});
