import { bowlingScore } from "./bowling";
import { Frame } from "./bowling";
import { totalScore } from "./bowling";
describe("Gutter game", () => {
  test("it will return an error msg for all 0 values", () => {
    const inputRolls = [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ]; //ARRANGE
    const score = bowlingScore(inputRolls); //ACT
    expect(score).toBe(0); //ASSERT
  });
});
test("It should return strike sign X if the value of first roll is 10", () => {
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
test("it should return the sum of the rolls", () => {
  const rollOne = 3;
  const rollTwo = 2;

  const frameScore = Frame(rollOne, rollTwo);

  expect(frameScore).toBe(5);
});
describe("bowlingScoreCard function", () => {
  test("it should correct scorecard when no strikes/spares", () => {
    const frames = [
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 1],
    ];
    const scoreCard = totalScore(frames);
    expect(scoreCard).toBe("2222222222");
  });
});
test("it should correctly display the score with a spare", () => {
  const score = totalScore([
    [2, 2],
    [1, 1],
    [5, 5],
    [1, 1],
    [7, 3],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
  ]);
  expect(score).toBe("42/2/22222");
});
test("it should correctly display the score with a strike", () => {
  const score = totalScore([
    [3, 1],
    [1, 4],
    [10, 0],
    [2, 1],
    [1, 8],
    [3, 1],
    [7, 1],
    [1, 2],
    [7, 1],
    [2, 1],
  ]);
  expect(score).toBe("45X3948383");
});
