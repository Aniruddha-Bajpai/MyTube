import { sum } from "../sum";

test("sum of two positive number", () => {
  expect(sum(2, 5)).toBe(7);
});
