import type { Match } from "./helpers/types";

export function removeIncompleteMatches<T extends new (...args: any[]) => any>(constructor: T) {
  return class extends constructor {
    constructor(...args: any[]) {
      super(...args);
      this.matches = this.matches.filter(
        (match: Match) => match.sport && match.participant1 && match.participant2 && match.score
      );
    }
  };
}
