import React, { useState } from "react"
import SearchBar from "../searchBar/SearchBar"
import GuessButton from "../guessButton/GuessButton"
import GuessInfo from "../guessInfo/GuessInfo"

export default function GuessingArea() {
    const [isListOpen, setListOpen] = useState(false)

    const toggleList = () => {
        setListOpen(!isListOpen)
    }

    return (
        <div className="block w-full min-w-full relative flex-col max-w-lg text-white ">
            <div className="flex flex-row space-x-2 relative mb-1">
                <SearchBar isListOpen={isListOpen} toggleList={toggleList}/>
                <GuessButton toggleList={toggleList}/>
            </div>
            <GuessInfo />
        </div>
    )
}