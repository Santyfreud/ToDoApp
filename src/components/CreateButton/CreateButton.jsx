import React from "react";
import './CreateButton.css';

function CreateButton(props) {

    const onClickButton = () => {
        props.setOpenModal(previousState => !previousState);
    }

    return (
        <button
            className="CreateButton"
            onClick={onClickButton}
        >

            +
        
        </button>
    );
};

export { CreateButton };