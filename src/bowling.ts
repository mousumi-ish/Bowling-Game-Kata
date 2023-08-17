export const bowlingScore = (inputRolls: Number[]) => {
  return 0;
};
export const Frame = (rollOne: number, rollTwo: number) => {
  const score = rollOne + rollTwo;
  if (score > 10) {
    return " Invalid input";
  }
  if (rollOne === 10) {
    return "X";
  }
  return score === 10 ? "/" : score;
};
