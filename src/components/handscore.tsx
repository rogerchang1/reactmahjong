import React from "react";
import { Score } from "./model/Score.ts";
import { Agari } from "./constants/enums.ts";
import { Row } from "react-bootstrap";

type HandScoreProps = {
  score: Score;
};

export const HandScore = ({ score }: HandScoreProps) => {
  const yakus: string = score.yakus.join(", ");
  let scoreString: string = score.ron;
  if (score.agari === Agari.TSUMO) {
    scoreString = score.tsumo;
  }

  if (score.errorMsg || score.han === 0) {
    return "Not a valid hand";
  }

  return (
    <div>
      <Row>
        {score.han} Han {score.fu} Fu
      </Row>
      <Row>{scoreString}</Row>
      <div className="border">
        {score.hanbreakdown.map((val: string, index: number) => {
          return <Row className="mx-2" key={index}>{val}</Row>;
        })}
      </div>
      <div className="border">
        {score.fubreakdown.map((val: string, index: number) => {
          return <Row  className="mx-2" key={index}>{val}</Row>;
        })}
      </div>
    </div>
  );
};
