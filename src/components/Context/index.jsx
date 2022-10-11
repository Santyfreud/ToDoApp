import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const ToDoContext = React.createContext();

function ToDoProvider(props) {

    //States:
  const {
    item: toDos,
    saveItem: saveToDos,
    loading,
    error
  } = useLocalStorage('TODOS_V2', []);
  //State declaration for Search component:
  const [searchValue, setSearchValue] = React.useState('');
  //Modal state management:
  const [openModal, setOpenModal] = React.useState(false);
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

  const addToDo = (text) => {
    const newToDos = [...toDos];
    newToDos.push({
        completed: false,
        text
    })
    saveToDos(newToDos);
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
        <ToDoContext.Provider value={{
            totalToDos,
            completedToDos,
            searchValue,
            setSearchValue,
            searchedToDos,
            completeToDo,
            deleteToDo,
            loading,
            error,
            openModal,
            setOpenModal,
            addToDo
        }}>
            {props.children}
        </ToDoContext.Provider>
    )
}

export { ToDoContext, ToDoProvider };