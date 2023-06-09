import type { Match } from "./helpers/types";

// I constatly had type errors with those decorators
// so I use this article
// https://www.typescriptlang.org/docs/handbook/decorators.html#class-decorators
// + chatgpt :) to solve the type errors

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

export function removeDuplicates<T extends new (...args: any[]) => any>(constructor: T) {
  return class extends constructor {
    constructor(...args: any[]) {
      super(...args);
      const map = new Map<string, T>();
      for (const obj of this.matches) {
        const str = JSON.stringify(obj);
        if (!map.has(str)) {
          map.set(str, obj);
        }
      }
      this.matches = Array.from(map.values());
    }
  };
}
