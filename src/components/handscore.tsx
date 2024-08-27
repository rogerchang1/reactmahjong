import React from "react";
import { Score } from "./model/Score.ts";

type HandScoreProps = {
  score: Score;
};

export const HandScore = ({ score }: HandScoreProps) => {
  const yakus: string = score.yakus.join(", ");
  let scoreString: string = score.ron;
  if (score.ron === "0") {
    scoreString = score.tsumo;
  }

  if (score.errorMsg) {
    return "Not a valid hand";
  }

  return (
    <div>
      <div>Han: {score.han}</div>
      <div>Fu: {score.fu}</div>
      <div>{scoreString}</div>
      <div>Yaku: {yakus}</div>
    </div>
  );
};
