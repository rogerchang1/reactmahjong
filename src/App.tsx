import "./App.css";
import { Keyboard } from "./components/keyboard/Keyboard.tsx";
import React, { useState } from "react";
import { Hand } from "./components/hand/Hand.tsx";
import { Option } from "./components/keyboard/Option.tsx";
import { ToggleButton } from "react-bootstrap";
import { HandData } from "./components/model/HandData.ts";

function App() {
  const [currentHand, setHand] = useState<string[]>([]);
  const [isRiichi, setIsRiichi] = useState<boolean>(false);

  const handleClickOnAdd = (value: string) => {
    const newHand = [...currentHand];
    newHand.push(value);
    setHand(newHand);
    HandData.hand = newHand.join();
  };

  const handleClickOnDelete = (index: number) => {
    const newHand = [...currentHand];
    newHand.splice(index, 1);
    setHand(newHand);
    HandData.hand = newHand.join();
  };

  const handleOnIsRiichiToggle = (isChecked: boolean) => {
    setIsRiichi(isChecked);
    HandData.isRiichi = isChecked;
  };

  return (
    <>
      <Hand value={currentHand} onClick={handleClickOnDelete} />
      <Keyboard onClick={handleClickOnAdd} />
      <ToggleButton
        id="isriichi"
        type="checkbox"
        variant="outline-primary"
        checked={isRiichi}
        value="1"
        onChange={(e) => handleOnIsRiichiToggle(e.currentTarget.checked)}
      >
        Riichi?
      </ToggleButton>
    </>
  );
}

export default App;
