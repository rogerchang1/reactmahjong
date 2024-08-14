import React from "react";
import { HandTiles } from "./HandTiles.tsx";
import { Block } from "../model/Block.ts";
import { Pon } from "./calledblocks/pon.tsx";
import { HandBlocks } from "./HandBlocks.tsx";

type HandContainerProps = {
  value: string[];
  blocks: Block[];
  onTileClick: (index: number) => void;
  onBlockClick: (index: number) => void;
};

export const HandContainer = ({ value, blocks, onTileClick, onBlockClick }: HandContainerProps) => {
  return (
    <div>
      {value && <HandTiles value={value} onClick={onTileClick} />}
      {blocks && <HandBlocks blocks={blocks} onClick={onBlockClick} />}
    </div>
  );
};
