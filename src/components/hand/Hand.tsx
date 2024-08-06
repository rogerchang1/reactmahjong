import React from "react";
import { RenderTile } from "../render/Render.tsx";

type HandProps = {
  value: string[];
};

export const Hand = ({ value }: HandProps) => {
  return (
    <div className="flex justify-center mb-1 sm:text-3xl text-2xl">
      {value.map((val: string, index: number) => (
        <RenderTile tile={val} key={index} />
      ))}
    </div>
  );
};
