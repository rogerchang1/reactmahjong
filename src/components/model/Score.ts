import { Agari } from "../constants/enums";

export interface Score {
  han: number;
  fu: number;
  tsumo: string;
  ron: string;
  yakus: string[];
  hanbreakdown: string[];
  fubreakdown: string[];
  agari: Agari;
  errorMsg?: string;
}
