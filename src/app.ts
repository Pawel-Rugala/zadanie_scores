import data from "./helpers/data";
import formatter from "./formatter";
import { Match } from "./helpers/types";

export function printAllMatches(matches: Match[]) {
  const results = matches
    .filter((match: Match) => {
      return match.participant1 && match.participant2 && match.score && match.sport;
    })
    .map((match: Match) => {
      if (!formatter[match.sport]) {
        throw new Error("Exception: invalid sport");
      }
      return formatter[match.sport](match as Match);
    });
  console.log(results);
}

printAllMatches(data);
