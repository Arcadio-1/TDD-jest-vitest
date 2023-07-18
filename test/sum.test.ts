import { it, expect } from "vitest";
import sum from "./sum";

it("adds 1 + 2 to equal 3", () => {
  //Arrange
  const expected = 3;
  const acttual_1_ = 1;
  const acttual_2 = 2;

  //Act
  const sut = sum(acttual_1_, acttual_2);

  //Assert
  expect(sut).to.toBe(expected);
});
