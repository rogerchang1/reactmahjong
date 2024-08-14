import "./App.css";
import { Keyboard } from "./components/keyboard/Keyboard.tsx";
import React, { useState } from "react";
import { HandContainer } from "./components/hand/HandContainer.tsx";
import { Option } from "./components/keyboard/Option.tsx";
import { ButtonGroup, ToggleButton } from "react-bootstrap";
import { HandData } from "./components/model/HandData.ts";
import { tileToValueMap } from "./components/mapper/TileValueMapper.ts";
import { Pon } from "./components/hand/calledblocks/pon.tsx";
import { Block } from "./components/model/Block.ts";
import { BlockType } from "./components/constants/enums.ts";

function App() {
  const [currentHand, setHand] = useState<string[]>([]);
  const [currentBlocks, setBlocks] = useState<Block[]>([]);
  const [isRiichi, setIsRiichi] = useState<boolean>(false);
  const [isPon, setIsPon] = useState<boolean>(false);

  const handleClickOnAdd = (value: string) => {
    if (isPon) {
      const newBlocks = [...currentBlocks];
      const newBlock: Block = {
        tile: value,
        type: BlockType.PON,
      };
      newBlocks.push(newBlock);
      setBlocks(newBlocks);
      HandData.blocks = newBlocks;
      console.log(HandData);
    } else {
      const newHand = [...currentHand];
      newHand.push(value);
      sortHand(newHand);
      setHand(newHand);
      HandData.hand = newHand.join();
    }
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

  const sortHand = (arr: string[]) => {
    arr.sort((a, b) => (tileToValueMap[a] > tileToValueMap[b] ? 1 : -1));
  };

  return (
    <>
      <HandContainer
        value={currentHand}
        blocks={currentBlocks}
        onClick={handleClickOnDelete}
      />

      <Pon
        value={"2p"}
        index={0}
        onClick={function (index: number): void {
          throw new Error("Function not implemented.");
        }}
      ></Pon>

      <Keyboard onClick={handleClickOnAdd} />
      <ButtonGroup>
        <ToggleButton
          id="isRiichi"
          type="checkbox"
          variant="outline-primary"
          checked={isRiichi}
          value="1"
          onChange={(e) => handleOnIsRiichiToggle(e.currentTarget.checked)}
        >
          Riichi?
        </ToggleButton>
        <ToggleButton
          id="pon"
          type="checkbox"
          variant="outline-primary"
          checked={isPon}
          value="1"
          onChange={(e) => setIsPon(e.currentTarget.checked)}
        >
          Pon
        </ToggleButton>
      </ButtonGroup>
    </>
  );
}

export default App;
