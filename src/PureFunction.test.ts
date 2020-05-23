import { PureFunction, mathOporation } from "./PureFunction";

it("matches enum multiply", () => {
  expect(mathOporation.multiply).toBe("*");
});

it("can multiply", () => {
  expect(PureFunction(1, 15, mathOporation.multiply)).toBe(15);
});

it("can subtracted", () => {
  expect(PureFunction(0, 25, mathOporation.subtraction)).toBe(-25);
});

it("can add", () => {
  expect(PureFunction(1, 1, mathOporation.addition)).toBe(2);
});

it("can divide", () => {
  expect(PureFunction(1, 1, mathOporation.divide)).toBe(1);
});
