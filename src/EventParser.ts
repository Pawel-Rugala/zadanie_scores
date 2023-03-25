import type { Match } from "./helpers/types";
import { removeDuplicates, removeIncompleteMatches } from "./decorators";

//let's assume that matches array have like 1mil items
//and we want to remove duplicates and incomplete matches before processing
@removeDuplicates
@removeIncompleteMatches
class EventParser {
  matches: Match[];
  constructor(matches: Match[]) {
    this.matches = matches;
  }
  handleEventName(match: Match): string {
    const { participant1, participant2, sport } = match;

    switch (sport.toLowerCase()) {
      case "soccer":
      case "volleyball":
      case "basketball":
        return `${participant1} - ${participant2}`;
      case "tennis":
      case "handball":
        return `${participant1} vs ${participant2}`;
      default:
        throw new Error("Invalid sport");
    }
  }
  handleEventScore(match: Match): string {
    const { sport, score } = match;

    switch (sport.toLowerCase()) {
      case "soccer":
      case "handball":
        return score as string;
      case "volleyball":
      case "tennis": {
        const [mainScore, ...setScores] = (score as string).split(",");
        return `Main score: ${mainScore} (${setScores.map((score, index) => `set${index + 1} ${score}`).join(", ")})`;
      }
      case "basketball": {
        const scoreArr = score as string[][]; //only to make TS happy.. not sure if there is better solution
        return scoreArr.flat().join(",");
      }
      default:
        throw new Error("Invalid sport");
    }
  }
  printAllMatches() {
    console.log(
      this.matches.map((match) => {
        const name = this.handleEventName(match);
        const score = this.handleEventScore(match);
        return { name, score };
      })
    );
  }
}

export default EventParser;
