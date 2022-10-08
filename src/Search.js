import React from "react";
import './Search.css';

const onSearchValueChange = (event) => {
    console.log(event.target.value);
} 

function Search() {
    return (
        <input
            className="Search"
            placeholder="Anything"
            onChange={onSearchValueChange}
        />
    )
};

export { Search };