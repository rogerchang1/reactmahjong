import { Agari, Wind } from "../constants/enums.ts";
import { Block } from "./Block.ts";

export const HandModel: HandModelType = {
  hand: "",
  isRiichi: false,
  blocks: [],
  isDoubleRiichi: false,
  isIppatsu: false,
  isHoutei: false,
  isHaitei: false,
  isRinshan: false,
  isChankan: false,
  seatWind: Wind.EAST,
  roundWind: Wind.EAST,
  agari: Agari.TSUMO,
  doraCount: 0,
  winTile: ""
};

export type HandModelType = {
  hand: string;
  isRiichi: boolean;
  isDoubleRiichi: boolean;
  isIppatsu: boolean;
  isHoutei: boolean;
  isHaitei: boolean;
  isRinshan: boolean;
  isChankan: boolean;
  seatWind: Wind;
  roundWind: Wind;
  agari: Agari;
  doraCount: number;
  winTile: string;
  blocks: Block[];
};
