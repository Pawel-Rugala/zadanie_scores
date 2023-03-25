export type Match = {
  sport: string;
  participant1?: string;
  participant2?: string;
  score?: string | string[][];
};

export type Result = {
  name: string;
  score: string;
};

export type Sport = {
  [name: string]: (match: Match) => Result;
};
