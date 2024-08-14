import React from "react";
import { RenderTile } from "../../render/Render.tsx";


type ChiProps = {
  value: string;
  index: number;
  onClick: (index: number) => void;
};

export const Chi = ({ value, index, onClick }: ChiProps) => {
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    onClick(index);
  };

  return (
    <button
      style={{ width: `75px` }}
      className={
        //"flex items-center justify-center rounded mx-0.5 cursor-pointer select-none dark:text-white"
        "flex items-center mlr-100px cursor-pointer"
      }
      onClick={handleClick}
    >
      <RenderTile tile={value} rotate={true}/>
      <RenderTile tile={value} />
      <RenderTile tile={value} />
    </button>
  );
};
