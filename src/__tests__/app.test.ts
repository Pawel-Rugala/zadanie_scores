import { printAllMatches } from "../app";

describe("printAllMatches", () => {
  test("should print all matches", () => {
    const validmatches = [
      {
        sport: "soccer",
        participant1: "Chelsea",
        participant2: "Arsenal",
        score: "2:1",
      },
    ];
    const consoleSpy = jest.spyOn(console, "log");
    printAllMatches(validmatches);
    expect(consoleSpy).toHaveBeenCalledWith([
      {
        name: "Chelsea - Arsenal",
        score: "2:1",
      },
    ]);
  });
});
