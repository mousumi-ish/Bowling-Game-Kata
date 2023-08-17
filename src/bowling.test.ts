import { bowlingScore } from "./bowling";
import { Frame } from "./bowling";
describe("Gutter game", () => {
  test("it will return an error msg for all 0 values", () => {
    const inputRolls = [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ]; //ARRANGE
    const score = bowlingScore(inputRolls); //ACT
    expect(score).toBe(0); //ASSERT
  });
});
test("It should return strike if the value of first roll is 10", () => {
  const rollOne = 10;
  const rollTwo = 0;
  const score = Frame(rollOne, rollTwo);
  expect(score).toBe("X");
});
test("it should return the / sign if the players hit a spare", () => {
  const rollOne = 7;
  const rollTwo = 3;

  const score = Frame(rollOne, rollTwo);
  expect(score).toBe("/");
});
