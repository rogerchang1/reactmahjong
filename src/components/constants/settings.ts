import { BlockType, RiichiSetting, SpecialYakuSetting, Wind, Agari } from "./enums";

export const BlockTypes = [
  { name: "None", value: BlockType.UNKNOWN },
  { name: "Pon", value: BlockType.PON },
  { name: "Chi", value: BlockType.CHI },
  { name: "Open Kan", value: BlockType.OPENKAN },
  { name: "Closed Kan", value: BlockType.CLOSEDKAN },
];

export const RiichiSettings = [
  { name: "None", value: RiichiSetting.NONE },
  { name: "Riichi", value: RiichiSetting.RIICHI },
  { name: "Double Riichi", value: RiichiSetting.DOUBLERIICHI },
];

export const SpecialYakuSettings = [
  { name: "None", value: SpecialYakuSetting.NONE },
  { name: "Chankan", value: SpecialYakuSetting.CHANKAN },
  { name: "Rinshan", value: SpecialYakuSetting.RINSHAN },
  { name: "Haitei", value: SpecialYakuSetting.HAITEI },
  { name: "Houtei", value: SpecialYakuSetting.HOUTEI },
];

export const WindSettings = [
  { name: "East", value: Wind.EAST },
  { name: "South", value: Wind.SOUTH },
  { name: "West", value: Wind.WEST },
  { name: "North", value: Wind.NORTH },
];

export const AgariSettings = [
  { name: "Tsumo", value: Agari.TSUMO },
  { name: "Ron", value: Agari.RON },
];
