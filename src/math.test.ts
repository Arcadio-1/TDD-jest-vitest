import { it, expect } from "vitest";
import { add } from "./math";
import sum from "./sum";
it("should summarize all number values in an arry", () => {
  const values: number[] = [1, 2];
  const expected: number = values.reduce((curent, prev) => curent + prev, 0);

  const result = add(values);

  expect(result).to.toBe(expected);
});

it("should sum numric strings", () => {
  const values = ["1", "2"];
  const expected = 3;

  const result = add(values);

  expect(result).to.toBe(expected);
});

it("sholud return NAN if if there is a laist one un numric string in arry", () => {
  const values = [1, "value"];

  const result = add(values);

  expect(result).to.NaN;
});

it("shuold return 0 if empty arry passed to", () => {
  const values: [] = [];
  const expected = 0;

  const result = add(values);

  expect(result).to.toBe(expected);
});

it("should throw if no argument passed", () => {
  const result = () => {
    add();
  };
  expect(result).toThrow(/numbers is not iterable/);
});
