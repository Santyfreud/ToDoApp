import React from "react";
import './CreateButton.css';

function CreateButton() {

    const onClickButton = (msg) => {
        alert(msg);
    }

    return (
        <button
            className="CreateButton"
            onClick={() => onClickButton("Modal should be opened here")}
        >

            +
        
        </button>
    );
};

export { CreateButton };