import React from "react";
import './TodoItem.css';

function TodoItem(props) {

    const onComplete = () => {
        alert(`ToDo "${props.text}" has already been completed`);
    }

    const onDelete = () => {
        alert(`You have deleted toDo "${props.text}"`);
    }

    return (
        <li className="TodoItem">
            <span
                className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
                onClick={onComplete}
            >

                ✓

            </span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--completed'}`}>
                {props.text}
            </p>
            <span
                className="Icon Icon-delete"
                onClick={onDelete}
            >

                X

            </span>
        </li>
    );
};

export { TodoItem };