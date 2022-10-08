import React from "react";
import './Counter.css';


function Counter() {
    //Adding a className to the elements allow us to import css files into the components:
    return (
        <h2 className="Counter">Just completed 2 out of 3 ToDos</h2>
    )
};

export { Counter };