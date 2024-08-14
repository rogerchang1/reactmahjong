import { Block } from "./Block";

export const HandData: HandDataType = {
  hand: "",
  isRiichi: false,
  blocks: [],
};

export type HandDataType = {
  hand: string;
  isRiichi: boolean;
  blocks: Block[];
};
