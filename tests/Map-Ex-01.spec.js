import { map, makeBroken, mutateArray } from "../Map-Ex-01";

describe("map function", () => {
  it("should return an array", () => {
    const weapons = ["candlestick", "lead pipe", "revolver"];
    const result = map(weapons, makeBroken);
    expect(result).toEqual(
      expect.arrayContaining([
        "broken candlestick",
        "broken lead pipe",
        "broken revolver"
      ])
    );
  });
});

describe("Array Immutability ", () => {
  it("should return the same array", () => {
    const list = [1, 2, 3];
    const result = mutateArray(list);
    expect(result).toEqual(list);
  });
});
