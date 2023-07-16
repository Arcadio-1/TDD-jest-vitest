// import { describe, expect, test } from "@jest/globals";
import sum from "./sum";

describe("sum module", () => {
  test("adds 1 + 2 to equal 3", () => {
    const acttual_1_ = 1;
    const acttual_2 = 2;
    const sut = sum(acttual_1_, acttual_2);
    const expected = 3;

    expect(sut).toBe(expected);
  });
});
