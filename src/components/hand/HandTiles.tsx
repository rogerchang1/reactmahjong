import React from "react";
import { HandKey } from "./HandKey.tsx";

type HandTilesProps = {
  value: string[];
  onClick: (index: number) => void;
};

export const HandTiles = ({ value, onClick }: HandTilesProps) => {
  return value ? (
    <div className="flex justify-center mb-1 sm:text-3xl text-2xl hand-tiles-bg">
      {value.map((val: string, index: number) => (
        <HandKey
          value={val}
          index={index}
          onClick={onClick}
          key={val + "-" + index}
        />
      ))}
    </div>
  ) : (
    ""
  );
};
