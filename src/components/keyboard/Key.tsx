import React from "react";
import { RenderTile } from "../render/Render.tsx";

type KeyProps = {
  value: string,
}

export const Key = ({value}: KeyProps) => {
  return (
    <button 
      style={{ width: `75px` }}
      className={'flex items-center justify-center rounded mx-0.5 cursor-pointer select-none dark:text-white'}
    
    >
      <RenderTile tile={value}></RenderTile>
    </button>
  );
};
