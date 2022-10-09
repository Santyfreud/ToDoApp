import React from "react";
import './Counter.css';


function Counter({ total, completed }) {
    //Adding a className to the elements allow us to import css files into the components:
    return (
        <h2 className="Counter">Just completed {completed} out of {total} ToDos</h2>
    )
};

export { Counter };