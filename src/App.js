import React from "react";
import { Counter } from './Counter';
import { Search } from "./Search";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateButton } from "./CreateButton";
//import './App.css';

const defaultList = [
  { text: "Learn HTML5 and CSS3", completed: true },
  { text: "Learn JavaScript Fundamentals", completed: true },
  { text: "Learn React.js", completed: false },
  { text: "Develop a ToDo web app", completed: false },
  { text: "Succesfully complete de Intro Java Dev Course", completed: false },
  { text: "Let´s rock the world!", completed: false },
];

function App(props) {
  //This is a component
  // React Elements are different than html tags

  //States:
  //Initial state of all ToDo´s:
  const [toDos, setToDos] = React.useState(defaultList);
  //State declaration for Search component:
  const [searchValue, setSearchValue] = React.useState('');
  
  //Completed ToDo´s counter:
  const completedToDos = toDos.filter(toDo => toDo.completed).length;
  //Total ToDo´s counter:
  const totalToDos = toDos.length;

  let searchedToDos = [];

  if(!searchValue >= 1) {
    searchedToDos = toDos;
  } else {
    searchedToDos = toDos.filter(toDo => {
      const toDoText = toDo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return toDoText.includes(searchText);
    });
  }

  return (
    <>
      {/*Creating the app components:*/}
      {/*Pass states to the components*/}
      <Counter
        total={totalToDos}
        completed={completedToDos}
      />
      <Search
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <TodoList>
        {searchedToDos.map(toDo => (
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
