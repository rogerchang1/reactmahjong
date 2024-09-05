import React from "react";
import { Block } from "../model/Block.ts";
import { Pon } from "./calledblocks/pon.tsx";
import { BlockType } from "../constants/enums.ts";
import { Chi } from "./calledblocks/chi.tsx";
import { ClosedKan } from "./calledblocks/closedkan.tsx";
import { OpenKan } from "./calledblocks/openkan.tsx";

type HandBlocksProps = {
  blocks: Block[];
  onClick: (index: number) => void;
};

export const HandBlocks = ({ blocks, onClick }: HandBlocksProps) => {
  return blocks.length > 0 ? (
    <div className="flex justify-center mb-1 sm:text-3xl text-2xl hand-blocks-bg">
      {blocks.map((val: Block, index: number) => {
        switch (val.type) {
          case BlockType.PON:
            return (
              <Pon
                value={val.tile}
                index={index}
                onClick={onClick}
                key={val.type + "-" + val.tile + "-" + index}
              />
            );
          case BlockType.CHI:
            return (
              <Chi
                value={val.tile}
                index={index}
                onClick={onClick}
                key={val.type + "-" + val.tile + "-" + index}
              />
            );
          case BlockType.OPENKAN:
            return (
              <OpenKan
                value={val.tile}
                index={index}
                onClick={onClick}
                key={val.type + "-" + val.tile + "-" + index}
              />
            );
          case BlockType.CLOSEDKAN:
            return (
              <ClosedKan
                value={val.tile}
                index={index}
                onClick={onClick}
                key={val.type + "-" + val.tile + "-" + index}
              />
            );
        }
      })}
    </div>
  ) : (
    <div className="handheight flex justify-center mb-1 sm:text-3xl text-2xl hand-blocks-bg"/>
  );
};
