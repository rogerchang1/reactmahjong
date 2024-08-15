import React from "react";
import { RenderTile } from "../../render/Render.tsx";
import { tileToValueMap, valueToTileMap } from "../../mapper/TileValueMapper.ts";

type ChiProps = {
  value: string;
  index: number;
  onClick: (index: number) => void;
};

export const Chi = ({ value, index, onClick }: ChiProps) => {
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    onClick(index);
  };

  if (Number(value[0]) <= 7 && value[1] !== "z") {

    const value2: string = valueToTileMap[tileToValueMap[value]+1];
    const value3: string = valueToTileMap[tileToValueMap[value]+2];

    return (
      <button
        style={{ width: `75px` }}
        className={
          //"flex items-center justify-center rounded mx-0.5 cursor-pointer select-none dark:text-white"
          "flex items-center mlr-trip cursor-pointer"
        }
        onClick={handleClick}
      >
        <RenderTile tile={value} rotate={true} />
        <RenderTile tile={value2} />
        <RenderTile tile={value3} />
      </button>
    );
  }
};
