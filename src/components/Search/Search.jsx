import React from "react";
import { ToDoContext } from "../Context";
import './Search.css';

function Search() {

    const { searchValue, setSearchValue } = React.useContext(ToDoContext);

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