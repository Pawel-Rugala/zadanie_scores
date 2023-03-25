import { Match, Sport } from "./helpers/types";

const formatter: Sport = {
  soccer: (match: Match) => {
    if (typeof match.score !== "string") {
      throw new Error("Invalid score");
    }
    return {
      name: `${match.participant1} - ${match.participant2}`,
      score: match.score as string,
    };
  },
  volleyball: (match: Match) => {
    if (typeof match.score !== "string") {
      throw new Error("Invalid score");
    }
    const [mainScore, ...setScores] = match.score.split(",");
    return {
      name: `${match.participant1} - ${match.participant2}`,
      score: `Main score: ${mainScore} (set1 ${setScores[0]}, set2 ${setScores[1]}, set3 ${setScores[2]})`,
    };
  },
  tennis: (match: Match) => {
    if (typeof match.score !== "string") {
      throw new Error("Invalid score");
    }
    const [mainScore, ...setScores] = match.score.split(",");
    return {
      name: `${match.participant1} vs ${match.participant2}`,
      score: `Main score: ${mainScore} (set1 ${setScores[0]}, set2 ${setScores[1]}, set3 ${setScores[2]})`,
    };
  },
  basketball: (match: Match) => {
    if (!Array.isArray(match.score) || !Array.isArray(match.score[0])) {
      throw new Error("Invalid score");
    }
    return {
      name: `${match.participant1} - ${match.participant2}`,
      score: [
        [match.score[0][0], match.score[0][1]],
        [match.score[1][0], match.score[1][1]],
      ].join(", "),
    };
  },
  handball: (match: Match) => {
    if (typeof match.score !== "string") {
      throw new Error("Invalid score");
    }
    return {
      name: `${match.participant1} vs ${match.participant2}`,
      score: match.score,
    };
  },
};

export default formatter;
