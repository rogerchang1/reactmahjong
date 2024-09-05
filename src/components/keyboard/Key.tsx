import React from "react";
import { RenderTile } from "../render/Render.tsx";

type KeyProps = {
  value: string;
  onClick: (value: string) => void;
};

export const Key = ({ value, onClick }: KeyProps) => {
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    onClick(value);
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
