import React from "react";
import axios from "axios";

export default function GuessButton() {
    const handleGuessButton = async () => {
        const selectedDistrictId = localStorage.getItem("selectedDistrictId");

        if (selectedDistrictId !== "null") {
            try {
                const response = await axios.post("http://localhost:8080/powiatle-ms/take-guess?districtId=" + selectedDistrictId, {
                        headers: { "Content-Type": "application/json" }
                    })

            if (response.data.distance > 0) {
                console.log(response.data)
            } else {
                console.log("GRATULACJE")
            }
                    
            } catch (error) {
                console.error("Błąd przy wysyłaniu strzału:", error);
            }
        }
    };

    return (
        <div>
            <button className="border-[3px] rounded font-bold p-[6px] px-5 
            bg-gray-1 dark:bg-slate-700 space-x-2 flex items-center 
            justify-center uppercase active:bg-gray-100 
            dark:hover:bg-slate-600 dark:active:bg-slate-600"
                onClick={handleGuessButton}>
                <span className="flex items-center justify-center">
                    <img
                        alt="🌍"
                        src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f30d.png"
                        className="inline-block w-[1em] h-[1em] mt-0 mr-[0.2em] mb-0"/>
                    <span>ZGADNIJ</span>
                </span>
            </button>
        </div>
    );
}
