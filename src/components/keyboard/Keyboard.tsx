import React from "react";
import { Key } from "./Key.tsx";

type KeyboardProps = {
    onClick: (value: string) => void,
}

export const Keyboard = ({onClick}: KeyboardProps) => {
    return (
        <div>
            <div className="flex justify-center mb-1 sm:text-3xl text-2xl">
                <Key value={"1p"} onClick={onClick}/>
                <Key value={"2p"} onClick={onClick}/>
                <Key value={"3p"} onClick={onClick}/>
                <Key value={"4p"} onClick={onClick}/>
                <Key value={"5p"} onClick={onClick}/>
                <Key value={"6p"} onClick={onClick}/>
                <Key value={"7p"} onClick={onClick}/>
                <Key value={"8p"} onClick={onClick}/>
                <Key value={"9p"} onClick={onClick}/>
            </div>
            {/* <div className="flex justify-center mb-1 sm:text-3xl text-2xl">
                <Key value={"1s"} onClick={onClick}/>
                <Key value={"2s"} onClick={onClick}/>
                <Key value={"3s"} onClick={onClick}/>
                <Key value={"4s"} onClick={onClick}/>
                <Key value={"5s"} onClick={onClick}/>
                <Key value={"6s"} onClick={onClick}/>
                <Key value={"7s"} onClick={onClick}/>
                <Key value={"8s"} onClick={onClick}/>
                <Key value={"9s"} onClick={onClick}/>
            </div>
            <div className="flex justify-center mb-1 sm:text-3xl text-2xl">
                <Key value={"1m"} onClick={onClick}/>
                <Key value={"2m"} onClick={onClick}/>
                <Key value={"3m"} onClick={onClick}/>
                <Key value={"4m"} onClick={onClick}/>
                <Key value={"5m"} onClick={onClick}/>
                <Key value={"6m"} onClick={onClick}/>
                <Key value={"7m"} onClick={onClick}/>
                <Key value={"8m"} onClick={onClick}/>
                <Key value={"9m"} onClick={onClick}/>
            </div>
            <div className="flex justify-center mb-1 sm:text-3xl text-2xl">
                <Key value={"1z"} onClick={onClick}/>
                <Key value={"2z"} onClick={onClick}/>
                <Key value={"3z"} onClick={onClick}/>
                <Key value={"4z"} onClick={onClick}/>
                <Key value={"5z"} onClick={onClick}/>
                <Key value={"6z"} onClick={onClick}/>
                <Key value={"7z"} onClick={onClick}/>
            </div> */}

        </div>
        
    );
  };