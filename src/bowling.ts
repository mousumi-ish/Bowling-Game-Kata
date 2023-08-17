export const bowlingScore = (inputRolls: number[]) => {
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
export const totalScore = (frames: number[][]): String => {
  let scoreCard = "";
  frames.forEach((frameRolls) => {
    const frameResult = Frame(frameRolls[0], frameRolls[1]);
    scoreCard += frameResult;
  });
  return scoreCard;
};
