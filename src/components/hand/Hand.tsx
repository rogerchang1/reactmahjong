import React from "react";
import { Key } from "../keyboard/Key.tsx";

type HandProps = {
  value: string[];
  onClick: (value: string) => void;
};

export const Hand = ({ value, onClick }: HandProps) => {

  const handleClick = (index: string) => {
    
  }

  console.log("hand render");
  return value && value.length !== 0 ? (
    <div className="flex justify-center mb-1 sm:text-3xl text-2xl">
      {value.map((val: string, index: number) => (
        <Key value={val} onClick={onClick} key={val+'-'+index} />
      ))}
    </div>
  ) : (
    ""
  );
};
