import logo from "./logo.svg";
import "./App.css";
import { Keyboard } from "./components/keyboard/Keyboard.tsx";
import React, { useState } from "react";
import { Hand } from "./components/hand/Hand.tsx";

function App() {
  const [currentHand, setHand] = useState<string[]>([]);
  const [testValue, setTestValue] = useState<string>("");

  const onClick = (value: string) => {
    console.log("In App " + value);
    let newHand = currentHand;
    newHand.push(value);
    let s: string = "";
    newHand.forEach((value) => {
      s += value;
    });
    console.log("New hand is " + s);
    setHand(newHand);
    setTestValue(value);
  };

  return (
    <>
      <Hand value={currentHand} />
      <Keyboard onClick={onClick} />
    </>

    //<Key value={"1s"}/>
    // <div className="App">
    //   <header className="App-header">

    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
