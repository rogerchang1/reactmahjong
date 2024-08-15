import "./App.css";
import { Keyboard } from "./components/keyboard/Keyboard.tsx";
import React, { useState } from "react";
import { HandContainer } from "./components/hand/HandContainer.tsx";
import { Option } from "./components/keyboard/Option.tsx";
import { ButtonGroup, ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import { HandData } from "./components/model/HandData.ts";
import { tileToValueMap } from "./components/mapper/TileValueMapper.ts";
import { Pon } from "./components/hand/calledblocks/pon.tsx";
import { Block } from "./components/model/Block.ts";
import { BlockType } from "./components/constants/enums.ts";

function App() {
  const [currentHand, setHand] = useState<string[]>([]);
  const [currentBlocks, setBlocks] = useState<Block[]>([]);
  const [isRiichi, setIsRiichi] = useState<boolean>(false);
  const [currentBlockType, setBlockType] = useState<BlockType>(
    BlockType.UNKNOWN
  );

  const handleClickOnAdd = (value: string) => {
    const newBlocks = [...currentBlocks];
    switch (currentBlockType) {
      case BlockType.PON:
        newBlocks.push({
          tile: value,
          type: BlockType.PON,
        });
        setBlocks(newBlocks);
        HandData.blocks = newBlocks;
        break;
      case BlockType.CHI:
        newBlocks.push({
          tile: value,
          type: BlockType.CHI,
        });
        setBlocks(newBlocks);
        HandData.blocks = newBlocks;
        break;
      case BlockType.OPENKAN:
        newBlocks.push({
          tile: value,
          type: BlockType.OPENKAN,
        });
        setBlocks(newBlocks);
        HandData.blocks = newBlocks;
        break;
      case BlockType.CLOSEDKAN:
        newBlocks.push({
          tile: value,
          type: BlockType.CLOSEDKAN,
        });
        setBlocks(newBlocks);
        HandData.blocks = newBlocks;
        break;
      default:
        const newHand = [...currentHand];
        newHand.push(value);
        sortHand(newHand);
        setHand(newHand);
        HandData.hand = newHand.join();
        break;
    }
  };

  const handleClickOnDelete = (index: number) => {
    const newHand = [...currentHand];
    newHand.splice(index, 1);
    setHand(newHand);
    HandData.hand = newHand.join();
  };

  const handleBlockClickOnDelete = (index: number) => {
    const newBlocks = [...currentBlocks];
    newBlocks.splice(index, 1);
    setBlocks(newBlocks);
    HandData.blocks = newBlocks;
  };

  const handleOnIsRiichiToggle = (isChecked: boolean) => {
    setIsRiichi(isChecked);
    HandData.isRiichi = isChecked;
  };

  const toggleOnChange = (val: BlockType) => {
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
          <ToggleButton
            id="none"
            type="checkbox"
            variant="outline-primary"
            checked={currentBlockType === BlockType.UNKNOWN}
            value="0"
            onChange={(e) => toggleOnChange(BlockType.UNKNOWN)}
          >
            None
          </ToggleButton>
          <ToggleButton
            id="pon"
            type="checkbox"
            variant="outline-primary"
            checked={currentBlockType === BlockType.PON}
            value="1"
            onChange={(e) => toggleOnChange(BlockType.PON)}
          >
            Pon
          </ToggleButton>
          <ToggleButton
            id="chi"
            type="checkbox"
            variant="outline-primary"
            checked={currentBlockType === BlockType.CHI}
            value="2"
            onChange={(e) => toggleOnChange(BlockType.CHI)}
          >
            Chi
          </ToggleButton>
          <ToggleButton
            id="openkan"
            type="checkbox"
            variant="outline-primary"
            checked={currentBlockType === BlockType.OPENKAN}
            value="3"
            onChange={(e) => toggleOnChange(BlockType.OPENKAN)}
          >
            Open Kan
          </ToggleButton>
          <ToggleButton
            id="closedkan"
            type="checkbox"
            variant="outline-primary"
            checked={currentBlockType === BlockType.CLOSEDKAN}
            value="4"
            onChange={(e) => toggleOnChange(BlockType.CLOSEDKAN)}
          >
            Closed Kan
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
    </>
  );
}

export default App;
