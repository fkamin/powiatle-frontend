import React, { useState } from "react";
import SearchBar from "../../searchBar/SearchBar";

export default function GuessNumber({ guessCounter }) {
  const [isListOpen, setListOpen] = useState(false);

  const toggleList = () => {
    setListOpen(!isListOpen);
  };

  return (
    <div
      onClick={toggleList}
      className="col-span-7 transition-all duration-300 mb-[1px] 
                font-bold uppercase text-sm h-8 bg-gray-200 hover:bg-gray-200 
                cursor-pointer dark:bg-slate-600 dark:hover:bg-slate-500 
                rounded flex justify-center items-center relative">
      <span className="opacity-70">GUESS {guessCounter} / 6</span>
    </div>
  );
}
