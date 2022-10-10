import React from "react";
import './Counter.css';


function Counter({ totalToDos, completedToDos }) {
    //Adding a className to the elements allow us to import css files into the components:
    return (
        <h2 className="Counter">Just completed {completedToDos} out of {totalToDos} ToDos</h2>
    )
};

export { Counter };