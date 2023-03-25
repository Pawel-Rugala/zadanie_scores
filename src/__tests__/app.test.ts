import { Match } from "../helpers/types";
import EventParser from "../EventParser";

describe("EventParser", () => {
  const validMatches: Match[] = [
    {
      sport: "soccer",
      participant1: "Chelsea",
      participant2: "Arsenal",
      score: "2:1",
    },
  ];

  const invalidMatches: Match[] = [
    {
      sport: "volleyball",
      participant1: "Germany",
      score: "3:0,25:23,25:19,25:21",
    },
  ];

  describe("handleEventName", () => {
    it("returns the correct event name for a valid match", () => {
      const eventParser = new EventParser(validMatches);
      expect(eventParser.handleEventName(validMatches[0])).toBe("Chelsea - Arsenal");
    });

    it("throws an error for an invalid sport", () => {
      const eventParser = new EventParser(validMatches);
      const invalidMatch = { ...validMatches[0], sport: "invalid_sport" };
      expect(() => eventParser.handleEventName(invalidMatch)).toThrowError("Invalid sport");
    });
  });

  describe("handleEventScore", () => {
    it("returns the correct event score for a valid match", () => {
      const eventParser = new EventParser(validMatches);
      expect(eventParser.handleEventScore(validMatches[0])).toBe("2:1");
    });
  });

  describe("printAllMatches", () => {
    it("prints out the valid matches with their event names and scores", () => {
      console.log = jest.fn(); // Mock console.log to test output
      const eventParser = new EventParser(validMatches.concat(invalidMatches));
      eventParser.printAllMatches();
      expect(console.log).toHaveBeenCalledWith([
        { name: "Chelsea - Arsenal", score: "2:1" },
        undefined, // Invalid match -> Should not be included in the output
      ]);
    });
  });
});
