import logo from "./logo.svg";
import "./App.css";
import { Keyboard } from "./components/keyboard/Keyboard.tsx";
import React, { useState } from "react";
import { Hand } from "./components/hand/Hand.tsx";

function App() {
  const [currentHand, setHand] = useState<string[]>([]);

  const handleClickOnAdd = (value: string) => {
    console.log("App.handleClickOnAdd() " + value);
    const newHand = [...currentHand];
    newHand.push(value);
    let s: string = "";
    newHand.forEach((value) => {
      s += value;
    });
    console.log("In App, new hand: " + s);
    setHand(newHand);
  };

  const handleClickOnDelete = (value: string) => {
    
    //the spread operator creates a new array. 
    //when I did newhand = currentHand, I think it just references the original array and then it wasn't properly rerendering. 
    const newHand = [...currentHand];
     var index = newHand.indexOf(value);
     console.log("App.handleClickOnDelete() " + value + " , index: " + index);
     newHand.splice(index, 1);
     let s: string = "";
     newHand.forEach((value) => {
       s += value;
     });
     console.log("New hand is " + s);
     setHand(newHand);
  };

  return (
    <>
      <Hand value={currentHand} onClick={handleClickOnDelete} />
      <Keyboard onClick={handleClickOnAdd} />
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
