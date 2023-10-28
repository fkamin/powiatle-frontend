import { useEffect, useState } from "react";
import processed_powiaty from "../../static/processed_powiaty.json";

export default function SearchBar() {
    const [query, setQuery] = useState("");
    const [list, setList] = useState([]);
    const [displayedList, setDisplayedList] = useState(false);
    const [selectedDistrictId, setSelectedDistrictId] = useState(null);

    useEffect(() => {
        createList();
    }, []);

    useEffect(() => {
        localStorage.setItem("selectedDistrictId", JSON.stringify(selectedDistrictId));
    }, [selectedDistrictId]);

    const createList = () => {
        const filteredPowiaty = processed_powiaty
            .filter((powiat) =>
                powiat.name.toLowerCase().includes(query.toLowerCase())
            )
            .sort((a, b) => a.name.localeCompare(b.name));

        const listItems = filteredPowiaty.map((district) => (
            <li key={district.id}
                onClick={() => handleDistrictClick(district)}>
                <div className="text-left m-0.5 bg-white dark:bg-slate-800 dark:text-slate-100 p-1 cursor-pointer hover:font-bold">
                    {district.name.toUpperCase()}
                </div>
            </li>
        ));

        setList(listItems);
    };

    let timeout;

    const changeListDisplay = (state) => {
        if (!state) {
            timeout = setTimeout(() => setDisplayedList(state), 100);
        } else {
            clearTimeout(timeout);
            setDisplayedList(state);
        }
    };

    const handleDistrictClick = (district) => {
        setSelectedDistrictId(district.id)
        setQuery(district.name.toUpperCase())
    };

    const handleInputChange = (e) => {
        setQuery(e.target.value);
        setSelectedDistrictId(null);
        createList();
    };

    return (
        <div className="border-[3px] rounded flex-auto relative">
            <input
                type="text"
                className="w-full dark:bg-slate-800 dark:text-slate-100 py-[6px] px-2 outline-0 focus:outline-0 active:outline-0 "
                placeholder="Powiat..."
                onFocus={() => changeListDisplay(true)}
                onBlur={() => changeListDisplay(false)}
                value={query}
                onChange={handleInputChange}
            />
            {displayedList && (
                <div className="rounded absolute top-full z-[99] w-full bg-gray-300 dark:bg-white mb-1 divide-x-2 max-h-52 overflow-auto">
                    <ul>{list}</ul>
                </div>
            )}
        </div>
    );
}
