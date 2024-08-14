import React from "react";
import { Block } from "../model/Block.ts";
import { Pon } from "./calledblocks/pon.tsx";

type HandBlocksProps = {
  blocks: Block[];
  onClick: (index: number) => void;
};

export const HandBlocks = ({ blocks, onClick }: HandBlocksProps) => {
  return blocks ? (
    <div className="flex justify-center mb-1 sm:text-3xl text-2xl">
      {blocks.map((val: Block, index: number) => (
        <Pon
          value={val.tile}
          index={index}
          onClick={onClick}
          key={val.type + "-" + val.tile + "-" + index}
        />
      ))}
    </div>
  ) : (
    ""
  );
};
