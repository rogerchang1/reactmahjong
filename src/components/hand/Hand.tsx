import React from "react";
import { HandKey } from "./HandKey.tsx";

type HandProps = {
  value: string[];
  onClick: (index: number) => void;
};

export const Hand = ({ value, onClick }: HandProps) => {
  return value && value.length !== 0 ? (
    <div className="flex justify-center mb-1 sm:text-3xl text-2xl">
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
