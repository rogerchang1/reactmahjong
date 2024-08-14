import React from "react";
import { RenderTile } from "../../render/Render.tsx";


type PonProps = {
  value: string;
  index: number;
  onClick: (index: number) => void;
};

export const Pon = ({ value, index, onClick }: PonProps) => {
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    onClick(index);
  };

  return (
    <button
      style={{ width: `75px` }}
      className={
        //"flex items-center justify-center rounded mx-0.5 cursor-pointer select-none dark:text-white"
        "flex items-center rounded mx-0.5 cursor-pointer select-none dark:text-white"
      }
      onClick={handleClick}
    >
      <RenderTile tile={value} />
      <RenderTile tile={value} rotate={true} />
      <RenderTile tile={value} />
    </button>
  );
};
