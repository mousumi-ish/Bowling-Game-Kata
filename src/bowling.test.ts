describe("Gutter game", () => {
  test("it will return an error msg for all 0 values", () => {
    const inputRolls = [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ]; //ARRANGE
    const score = bowlingSCore(inputRolls); //ACT
    expect(score).toBe(0); //ASSERT
  });
});
