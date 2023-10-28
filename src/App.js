import React from "react";
import Title from "./components/title/Title";
import Line from "./components/line/Line";
import District from "./components/district/District";
import GuessingArea from "./components/guessingArea/GuessingArea";

function App() {
  return (
    <div className="w-[50%] mx-auto">
      <Title/>
      <Line/>
      <District/>
      <GuessingArea/>
    </div> 
  );
}

export default App;
