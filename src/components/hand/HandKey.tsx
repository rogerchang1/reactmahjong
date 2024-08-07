import React from "react";
import { RenderTile } from "../render/Render.tsx";

type HandKeyProps = {
  value: string;
  index: number;
  onClick: (index: number) => void;
};

export const HandKey = ({ value, index, onClick }: HandKeyProps) => {
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    onClick(index);
  };

  return (
    <button
      style={{ width: `75px` }}
      className={
        "flex items-center justify-center rounded mx-0.5 cursor-pointer select-none dark:text-white"
      }
      onClick={handleClick}
    >
      <RenderTile tile={value} />
    </button>
  );
};
