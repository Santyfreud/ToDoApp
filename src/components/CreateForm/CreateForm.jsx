import React, { useState } from "react";
import { ToDoContext } from "../Context";
import "./CreateForm.css";

function CreateForm() {

    const [newToDoValue, setNewToDoValue] = React.useState('');
    
    const {
        addToDo,
        setOpenModal
    } = React.useContext(ToDoContext);

    const onChange = (event) => {
        setNewToDoValue(event.target.value);
    };
    
    const onCancel = () => {
        setOpenModal(false);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        addToDo(newToDoValue);
        setOpenModal(false);
    };

    return (
        <form onSubmit={onSubmit}>
            <label></label>
            <textarea
                value={newToDoValue}
                onChange={onChange}
                placeholder="Anything"
            />
            <div>
                <button
                    className="button-cancel"
                    type="button"
                    onClick={onCancel}
                >
                    Cancel
                </button>
                <button
                    className="button-add"
                    type="submit"
                >
                    Add
                </button>
            </div>
        </form>
    );
};

export { CreateForm };