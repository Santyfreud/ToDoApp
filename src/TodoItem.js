import React from "react";

function TodoItem(props) {
    return (
        <li>
            <span>XXX</span>
            <p>{props.text}</p>
            <span>YYY</span>
        </li>
    );
};

export { TodoItem };