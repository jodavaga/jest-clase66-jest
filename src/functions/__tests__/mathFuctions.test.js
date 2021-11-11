import { suma, resta, multiplica } from "../mathFunctions";

describe("Test Simple MAth funcitons", () => {
  test("should return 4", () => {
    expect(suma(1, 3)).toBe(4);
  });

  test("should return 2", () => {
    expect(resta(3, 1)).toBe(2);
  });
});

describe("Test Advanced MAth functions", () => {
  test("Should return 25", () => {
    expect(multiplica(5, 5)).toBe(25);
  });
});
