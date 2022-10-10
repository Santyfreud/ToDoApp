import React from "react";
import { AppUI } from "./AppUI";

// const defaultList = [
//   { text: "Learn HTML5 and CSS3", completed: true },
//   { text: "Learn JavaScript Fundamentals", completed: true },
//   { text: "Learn React.js", completed: false },
//   { text: "Develop a ToDo web app", completed: false },
//   { text: "Succesfully complete de Intro Java Dev Course", completed: false },
//   { text: "Let´s rock the world!", completed: false },
// ];

//We can create a Custom React Hook for managing our localStorage code.
//Custom Hooks must be named with "use" prefix.
//Custom hooks must be invoked into either components or other custom hooks;
//no invoke them into normal functions 
function useLocalStorage(itemName, initialValue) {
  //Handle stored Todo´s:
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;
      
  if(!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorageItem);
  };

  //State declaration for Set ToDos:
  const [item, setItem] = React.useState(parsedItem);

  const saveItem = (newItem) => {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    setItem(newItem);
  };

  return [
    item,
    saveItem
  ];

}

function App(props) {
  //This is a component
  // React Elements are different than html tags

  //States:
  //State declaration to take advantage of useLocalStorage Hook:
  const[toDos, saveToDos] = useLocalStorage('TODOS_V2', []);
  //State declaration for Search component:
  const [searchValue, setSearchValue] = React.useState('');
  //Completed ToDo´s counter:
  const completedToDos = toDos.filter(toDo => !!toDo.completed).length;
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

  const completeToDo = (text) => {
    const toDoIndex = toDos.findIndex(toDo => toDo.text === text);
    const newToDos = [...toDos];
    newToDos[toDoIndex].completed = true;
    saveToDos(newToDos);
  }

  const deleteToDo = (text) => {
    const toDoIndex = toDos.findIndex(toDo => toDo.text === text);
    console.log(toDoIndex);
    const newToDos = [...toDos];
    newToDos.splice(toDoIndex, 1);
    saveToDos(newToDos);
  }

  return (
    <AppUI
      totalToDos={totalToDos}
      completedToDos={completedToDos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedToDos={searchedToDos}
      completeToDo={completeToDo}
      deleteToDo={deleteToDo}
    />
  );
}

export default App;
