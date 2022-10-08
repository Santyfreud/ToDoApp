import React from "react";
import { Counter } from './Counter';
import { Search } from "./Search";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateButton } from "./CreateButton";
//import './App.css';

const toDos = [
  { text: "Learn HTML5 and CSS3", completed: true },
  { text: "Learn JavaScript Fundamentals", completed: true },
  { text: "Learn React.js", completed: false },
  { text: "Develop a ToDo web app", completed: false },
  { text: "Succesfully complete de Intro Java Dev Course", completed: false },
  { text: "Let´s rock the world!", completed: true },
];

function App(props) {
  //This is a component
  // React Elements are different than html tags
  return (
    <>
      {/*Creating the app components:*/}
      <Counter />
      <Search />
      <TodoList>
        {toDos.map(toDo => (
          <TodoItem
            key={toDo.text} 
            text={toDo.text}
            complete={toDo.completed}
          />
        ))}
      </TodoList>
      <CreateButton />
    </>
  );
}

export default App;
