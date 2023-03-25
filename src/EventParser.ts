import type { Match } from "./helpers/types";
import { removeDuplicates, removeIncompleteMatches } from "./decorators";

//let's assume that matches array have like 1mil items
//and we want to remove duplicates and incomplete matches before processing
@removeDuplicates //remove duplicates
@removeIncompleteMatches //remove incomplete matches
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
        return `Main score: ${mainScore} (set1 ${setScores[0]}, set2 ${setScores[1]}, set3 ${setScores[2]})`;
      }
      case "basketball": {
        // if (!Array.isArray(score) || !Array.isArray(score[0])) {
        //   throw new Error("Invalid score");
        // }
        const scoreArr = score as string[][]; //only to make TS happy.. not sure if there is better solution
        return [
          [scoreArr[0][0], scoreArr[0][1]],
          [scoreArr[1][0], scoreArr[1][1]],
        ].join(", ");
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
