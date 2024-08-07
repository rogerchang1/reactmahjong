import "./App.css";
import { Keyboard } from "./components/keyboard/Keyboard.tsx";
import React, { useState } from "react";
import { Hand } from "./components/hand/Hand.tsx";

function App() {
  const [currentHand, setHand] = useState<string[]>([]);

  const handleClickOnAdd = (value: string) => {
    const newHand = [...currentHand];
    newHand.push(value);
    setHand(newHand);
  };

  const handleClickOnDelete = (index: number) => {
    const newHand = [...currentHand];
     newHand.splice(index, 1);
     setHand(newHand);
  };

  return (
    <>
      <Hand value={currentHand} onClick={handleClickOnDelete} />
      <Keyboard onClick={handleClickOnAdd} />
    </>
  );
}

export default App;
