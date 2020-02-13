import { map, makeBroken } from "../Map-Ex-01";

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
