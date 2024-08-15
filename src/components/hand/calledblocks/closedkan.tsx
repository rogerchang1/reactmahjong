import React from "react";
import { RenderTile } from "../../render/Render.tsx";


type ClosedKanProps = {
  value: string;
  index: number;
  onClick: (index: number) => void;
};

export const ClosedKan = ({ value, index, onClick }: ClosedKanProps) => {
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    onClick(index);
  };

  return (
    <button
      style={{ width: `75px` }}
      className={
        //"flex items-center justify-center rounded mx-0.5 cursor-pointer select-none dark:text-white"
        "flex items-center mlr-quad cursor-pointer"
      }
      onClick={handleClick}
    >
      <RenderTile tile={"TileBack"} />
      <RenderTile tile={value} />
      <RenderTile tile={value} />
      <RenderTile tile={"TileBack"} />
    </button>
  );
};
