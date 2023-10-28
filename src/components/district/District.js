import React, { useState, useEffect } from "react";

export default function District() {
    const [todayImage, setTodayImage] = useState(null);

    useEffect(() => {
        getTodaysImage();
    }, []);

    const getTodaysImage = async () => {
        try {
            await fetch('http://localhost:8080/powiatle-ms/today-image')
            .then(response => response.arrayBuffer())
            .then(buffer => {
                const base64 = btoa(
                    new Uint8Array(buffer).reduce(
                        (data, byte) => data + String.fromCharCode(byte),
                        ''
                    )
                )
                setTodayImage(`data:image/png;base64,${base64}`);
            })
        } catch (error) {
            console.error('Error fetching today number:', error);
        }
    };

    return (
        <main>
            <img src={todayImage} alt="" className="mx-auto"></img>
        </main>
    )
}