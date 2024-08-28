import { Agari } from "../constants/enums";

export interface Score {
  han: string;
  fu: string;
  tsumo: string;
  ron: string;
  yakus: string[];
  agari: Agari;
  errorMsg?: string;
}
