import { it, expect } from "vitest";
import { add } from "./math";
it("should should summarize all number values in an arry", () => {
  const result = add([1, 2, 3]);
  expect(result).to.toBe(6);
});
