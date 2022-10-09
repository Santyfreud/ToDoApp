import React from "react";
import './Search.css';

function Search({ searchValue, setSearchValue }) {

    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    }; 

    return (
        <input
            className="Search"
            placeholder="Anything"
            value={searchValue}
            onChange={onSearchValueChange}
        />

    )
};

export { Search };