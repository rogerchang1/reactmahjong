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
      style={{ width: `60px` }}
      className={
        "flex items-center justify-center rounded mx-0.5 cursor-pointer border"
      }
      onClick={handleClick}
    >
      <RenderTile tile={value} />
    </button>
  );
};
