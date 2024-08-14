import React from "react";
import { HandTiles } from "./HandTiles.tsx";
import { Block } from "../model/Block.ts";
import { Pon } from "./calledblocks/pon.tsx";
import { HandBlocks } from "./HandBlocks.tsx";

type HandContainerProps = {
  value: string[];
  blocks: Block[];
  onClick: (index: number) => void;
};

export const HandContainer = ({ value, blocks, onClick }: HandContainerProps) => {
  return (
    <div>
      {value && <HandTiles value={value} onClick={onClick} />}
      {blocks && <HandBlocks blocks={blocks} onClick={onClick} />}
    </div>
  );
};
