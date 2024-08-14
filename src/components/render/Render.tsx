import React from "react";
import Man1 from "../../assets/img/Man1.svg";
import Man2 from "../../assets/img/Man2.svg";
import Man3 from "../../assets/img/Man3.svg";
import Man4 from "../../assets/img/Man4.svg";
import Man5 from "../../assets/img/Man5.svg";
import Man6 from "../../assets/img/Man6.svg";
import Man7 from "../../assets/img/Man7.svg";
import Man8 from "../../assets/img/Man8.svg";
import Man9 from "../../assets/img/Man9.svg";
import Pin1 from "../../assets/img/Pin1.svg";
import Pin2 from "../../assets/img/Pin2.svg";
import Pin3 from "../../assets/img/Pin3.svg";
import Pin4 from "../../assets/img/Pin4.svg";
import Pin5 from "../../assets/img/Pin5.svg";
import Pin6 from "../../assets/img/Pin6.svg";
import Pin7 from "../../assets/img/Pin7.svg";
import Pin8 from "../../assets/img/Pin8.svg";
import Pin9 from "../../assets/img/Pin9.svg";
import Sou1 from "../../assets/img/Sou1.svg";
import Sou2 from "../../assets/img/Sou2.svg";
import Sou3 from "../../assets/img/Sou3.svg";
import Sou4 from "../../assets/img/Sou4.svg";
import Sou5 from "../../assets/img/Sou5.svg";
import Sou6 from "../../assets/img/Sou6.svg";
import Sou7 from "../../assets/img/Sou7.svg";
import Sou8 from "../../assets/img/Sou8.svg";
import Sou9 from "../../assets/img/Sou9.svg";
import Ton from "../../assets/img/Ton.svg";
import Nan from "../../assets/img/Nan.svg";
import Shaa from "../../assets/img/Shaa.svg";
import Pei from "../../assets/img/Pei.svg";
import Chun from "../../assets/img/Chun.svg";
import Haku from "../../assets/img/Haku.svg";
import Hatsu from "../../assets/img/Hatsu.svg";

type RenderProps = {
  tile: string;
  rotate?: boolean;
};

const tileToSVGMap: { [tile: string]: string } = {
  "1m": Man1,
  "2m": Man2,
  "3m": Man3,
  "4m": Man4,
  "5m": Man5,
  "6m": Man6,
  "7m": Man7,
  "8m": Man8,
  "9m": Man9,
  "1p": Pin1,
  "2p": Pin2,
  "3p": Pin3,
  "4p": Pin4,
  "5p": Pin5,
  "6p": Pin6,
  "7p": Pin7,
  "8p": Pin8,
  "9p": Pin9,
  "1s": Sou1,
  "2s": Sou2,
  "3s": Sou3,
  "4s": Sou4,
  "5s": Sou5,
  "6s": Sou6,
  "7s": Sou7,
  "8s": Sou8,
  "9s": Sou9,
  "1z": Ton,
  "2z": Nan,
  "3z": Shaa,
  "4z": Pei,
  "5z": Chun,
  "6z": Haku,
  "7z": Hatsu,
};

export const RenderTile = ({ tile, rotate = false }: RenderProps) => {
  const rotation = rotate ? 90 : 0;
  const rot = {
    transform: `rotate(${rotation}deg)`,
  };

  return (
    <>
      <img
        className="p-1 light:block dark:hidden drop-shadow-tile-light"
        src={tileToSVGMap[tile]}
        alt={tile}
        style={rot}
      />
    </>
  );
};
