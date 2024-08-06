import React from "react";
import { RenderTile } from "../render/Render.tsx";

type KeyProps = {
  value: string,
  onClick: (value: string) => void
}

export const Key = ({value, onClick}: KeyProps) => {

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    console.log("In Key " + value);
    onClick(value);

  }

  return (
    <button 
      style={{ width: `75px` }}
      className={'flex items-center justify-center rounded mx-0.5 cursor-pointer select-none dark:text-white'}
      onClick={handleClick}
    >
      <RenderTile tile={value} />
    </button>
  );
};
