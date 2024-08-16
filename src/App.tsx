import "./App.css";
import { Keyboard } from "./components/keyboard/Keyboard.tsx";
import React, { useState } from "react";
import { HandContainer } from "./components/hand/HandContainer.tsx";
import { ButtonGroup, ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import { HandData } from "./components/model/HandData.ts";
import { tileToValueMap } from "./components/mapper/TileValueMapper.ts";
import { Block } from "./components/model/Block.ts";
import { BlockType } from "./components/constants/enums.ts";
import { HANDSIZE } from "./components/constants/constants.ts";

function App() {
  const [currentHand, setHand] = useState<string[]>([]);
  const [currentBlocks, setBlocks] = useState<Block[]>([]);
  const [isRiichi, setIsRiichi] = useState<boolean>(false);
  const [currentBlockType, setBlockType] = useState<BlockType>(
    BlockType.UNKNOWN
  );
  const [currentHandSize, setHandSize] = useState<number>(0);

  const BlockTypes = [
    { name: "None", value: BlockType.UNKNOWN },
    { name: "Pon", value: BlockType.PON },
    { name: "Chi", value: BlockType.CHI },
    { name: "Open Kan", value: BlockType.OPENKAN },
    { name: "Closed Kan", value: BlockType.CLOSEDKAN },
  ];

  const handleClickOnAdd = (value: string) => {
    if (currentHandSize >= HANDSIZE) {
      return;
    }
    if (
      currentBlockType !== BlockType.UNKNOWN &&
      currentHandSize + 3 > HANDSIZE
    ) {
      return;
    }

    if (currentBlockType === BlockType.UNKNOWN) {
      const newHand = [...currentHand];
      newHand.push(value);
      sortHand(newHand);
      setHand(newHand);
      setHandSize(currentHandSize + 1);
      HandData.hand = newHand.join();
    } else {
      const newBlocks = [...currentBlocks];
      newBlocks.push({
        tile: value,
        type: currentBlockType,
      });
      setBlocks(newBlocks);
      setHandSize(currentHandSize + 3);
      HandData.blocks = newBlocks;
    }
  };

  const handleClickOnDelete = (index: number) => {
    const newHand = [...currentHand];
    newHand.splice(index, 1);
    setHand(newHand);
    setHandSize(currentHandSize - 1);
    HandData.hand = newHand.join();
  };

  const handleBlockClickOnDelete = (index: number) => {
    const newBlocks = [...currentBlocks];
    newBlocks.splice(index, 1);
    setBlocks(newBlocks);
    setHandSize(currentHandSize - 3);
    HandData.blocks = newBlocks;
  };

  const handleOnIsRiichiToggle = (isChecked: boolean) => {
    setIsRiichi(isChecked);
    HandData.isRiichi = isChecked;
  };

  const toggleBlockTypeOnChange = (val: BlockType) => {
    console.log("currentBlockType " + currentBlockType.toString());
    if (val === currentBlockType) {
      setBlockType(BlockType.UNKNOWN);
    } else {
      setBlockType(val);
    }
  };

  const sortHand = (arr: string[]) => {
    arr.sort((a, b) => (tileToValueMap[a] > tileToValueMap[b] ? 1 : -1));
  };

  return (
    <>
      <HandContainer
        value={currentHand}
        blocks={currentBlocks}
        onTileClick={handleClickOnDelete}
        onBlockClick={handleBlockClickOnDelete}
      />
      <Keyboard onClick={handleClickOnAdd} />
      <div>
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
      </div>
      <div>
        <ToggleButtonGroup type="radio" name="options" defaultValue={[0]}>
          {BlockTypes.map((blocktype, idx) => (
            <ToggleButton
              key={idx}
              id={`blocktype-${idx}`}
              type="checkbox"
              variant={"outline-primary"}
              name="blocktype"
              value={blocktype.value}
              checked={currentBlockType === blocktype.value}
              onChange={(e) => toggleBlockTypeOnChange(blocktype.value)}
            >
              {blocktype.name}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </div>
    </>
  );
}

export default App;
