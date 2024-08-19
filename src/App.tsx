import "./App.css";
import { Keyboard } from "./components/keyboard/Keyboard.tsx";
import React, { useState } from "react";
import { HandContainer } from "./components/hand/HandContainer.tsx";
import {
  ButtonGroup,
  Col,
  Container,
  Form,
  InputGroup,
  Row,
  ToggleButton,
  ToggleButtonGroup,
} from "react-bootstrap";
import { HandData } from "./components/model/HandData.ts";
import { tileToValueMap } from "./components/mapper/TileValueMapper.ts";
import { Block } from "./components/model/Block.ts";
import {
  Agari,
  BlockType,
  RiichiSetting,
  SpecialYakuSetting,
  Wind,
} from "./components/constants/enums.ts";
import { HANDSIZE } from "./components/constants/constants.ts";
import { RiichiSettings, SpecialYakuSettings, AgariSettings, WindSettings, BlockTypes } from "./components/constants/settings.ts";

function App() {
  const [currentHand, setHand] = useState<string[]>([]);
  const [currentBlocks, setBlocks] = useState<Block[]>([]);
  const [isIppatsu, setIsIppatsu] = useState<boolean>(false);
  const [seatWind, setSeatWind] = useState<Wind>(Wind.EAST);
  const [roundWind, setRoundWind] = useState<Wind>(Wind.EAST);
  const [agari, setAgari] = useState<Agari>(Agari.TSUMO);
  const [doraCount, setDoraCount] = useState<number>(0);
  const [currentBlockType, setBlockType] = useState<BlockType>(
    BlockType.UNKNOWN
  );
  const [currentRiichiSetting, setRiichiSetting] = useState<RiichiSetting>(
    RiichiSetting.NONE
  );
  const [currentSpecialYakuSetting, setSpecialYakuSetting] =
    useState<SpecialYakuSetting>(SpecialYakuSetting.NONE);
  const [currentHandSize, setHandSize] = useState<number>(0);

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

  const toggleBlockTypeOnChange = (val: BlockType) => {
    if (val === currentBlockType) {
      setBlockType(BlockType.UNKNOWN);
    } else {
      setBlockType(val);
    }
  };

  const toggleRiichiSettingOnChange = (val: RiichiSetting) => {
    if (val === RiichiSetting.NONE) {
      setIsIppatsu(false);
    }
    setRiichiSetting(val);
  };

  const sortHand = (arr: string[]) => {
    arr.sort((a, b) => (tileToValueMap[a] > tileToValueMap[b] ? 1 : -1));
  };

  const validateAndSetDoraCount = (val: number) => {
    if (val >= 0) {
      setDoraCount(val);
    }
  };

  return (
    <>
      <Container>
        <HandContainer
          value={currentHand}
          blocks={currentBlocks}
          onTileClick={handleClickOnDelete}
          onBlockClick={handleBlockClickOnDelete}
        />
        <Keyboard onClick={handleClickOnAdd} />

        <div>
          <Row>
            <Col>
              Riichi Settings
              <br />
              <Row>
                <ToggleButtonGroup
                  type="radio"
                  name="RiichiSettings"
                  defaultValue={[0]}
                >
                  {RiichiSettings.map((riichiSetting, idx) => (
                    <ToggleButton
                      key={idx}
                      id={`riichisetting-${idx}`}
                      type="checkbox"
                      variant={"outline-primary"}
                      name="riichiSetting"
                      value={riichiSetting.value}
                      checked={currentRiichiSetting === riichiSetting.value}
                      onChange={() =>
                        toggleRiichiSettingOnChange(riichiSetting.value)
                      }
                    >
                      {riichiSetting.name}
                    </ToggleButton>
                  ))}
                </ToggleButtonGroup>
              </Row>
              <div>
                <ToggleButton
                  id="isIppatsu"
                  type="checkbox"
                  variant="outline-primary"
                  checked={
                    isIppatsu && currentRiichiSetting !== RiichiSetting.NONE
                  }
                  value="0"
                  onChange={(e) => setIsIppatsu(e.currentTarget.checked)}
                  disabled={currentRiichiSetting === RiichiSetting.NONE}
                >
                  Ippatsu
                </ToggleButton>
              </div>
              Special Yaku Settings
              <br />
              <Row>
                <ToggleButtonGroup
                  type="radio"
                  name="SpecialYakuSettings"
                  defaultValue={[0]}
                >
                  {SpecialYakuSettings.map((specialYaku, idx) => (
                    <ToggleButton
                      key={idx}
                      id={`specialyakusetting-${idx}`}
                      type="checkbox"
                      variant={"outline-primary"}
                      name="specialyaku"
                      value={specialYaku.value}
                      checked={currentSpecialYakuSetting === specialYaku.value}
                      onChange={() => setSpecialYakuSetting(specialYaku.value)}
                    >
                      {specialYaku.name}
                    </ToggleButton>
                  ))}
                </ToggleButtonGroup>
              </Row>
            </Col>
            <Col>
              Agari
              <br />
              <Row>
                <ToggleButtonGroup type="radio" name="Agari" defaultValue={[0]}>
                  {AgariSettings.map((Agari, idx) => (
                    <ToggleButton
                      key={idx}
                      id={`agarisetting-${idx}`}
                      type="checkbox"
                      variant={"outline-primary"}
                      name="agari"
                      value={Agari.value}
                      checked={agari === Agari.value}
                      onChange={() => setAgari(Agari.value)}
                    >
                      {Agari.name}
                    </ToggleButton>
                  ))}
                </ToggleButtonGroup>
              </Row>
              Round Wind
              <br />
              <Row>
                <ToggleButtonGroup
                  type="radio"
                  name="RoundWind"
                  defaultValue={[0]}
                >
                  {WindSettings.map((Wind, idx) => (
                    <ToggleButton
                      key={idx}
                      id={`roundwind-${idx}`}
                      type="checkbox"
                      variant={"outline-primary"}
                      name="roundwind"
                      value={Wind.value}
                      checked={roundWind === Wind.value}
                      onChange={() => setRoundWind(Wind.value)}
                    >
                      {Wind.name}
                    </ToggleButton>
                  ))}
                </ToggleButtonGroup>
              </Row>
              Seat Wind
              <br />
              <Row>
                <ToggleButtonGroup
                  type="radio"
                  name="SeatWind"
                  defaultValue={[0]}
                >
                  {WindSettings.map((Wind, idx) => (
                    <ToggleButton
                      key={idx}
                      id={`seatwind-${idx}`}
                      type="checkbox"
                      variant={"outline-primary"}
                      name="seatwind"
                      value={Wind.value}
                      checked={seatWind === Wind.value}
                      onChange={() => setSeatWind(Wind.value)}
                    >
                      {Wind.name}
                    </ToggleButton>
                  ))}
                </ToggleButtonGroup>
              </Row>
              <br />
              <Row>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">
                    Dora Count
                  </InputGroup.Text>
                  <Form.Control
                    placeholder="0"
                    aria-label="DoraCount"
                    aria-describedby="basic-addon1"
                    value={doraCount}
                    onChange={(e) => {
                      validateAndSetDoraCount(Number(e.target.value));
                    }}
                  />
                </InputGroup>
              </Row>
            </Col>
          </Row>
          Call
          <br />
          <Row>
            <ToggleButtonGroup
              type="radio"
              name="CallOptions"
              defaultValue={[0]}
            >
              {BlockTypes.map((blocktype, idx) => (
                <ToggleButton
                  key={idx}
                  id={`blocktype-${idx}`}
                  type="checkbox"
                  variant={"outline-primary"}
                  name="blocktype"
                  value={blocktype.value}
                  checked={currentBlockType === blocktype.value}
                  onChange={() => toggleBlockTypeOnChange(blocktype.value)}
                >
                  {blocktype.name}
                </ToggleButton>
              ))}
            </ToggleButtonGroup>
          </Row>
        </div>
      </Container>
    </>
  );
}

export default App;
