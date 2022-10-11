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

  //Let´s simulate the performance when requesting an API:
  //Creat states for "loading" and "error" status:
  const[error, setError] = React.useState(false);
  const[loading, setLoading] = React.useState(true);
  //State declaration to take advantage of useLocalStorage Hook:
  const[item, setItem] = React.useState(initialValue);

  //Implementing useEffect() Hook:
  React.useEffect(() => {
    //Simulating load delay:
    setTimeout(() => {
      //Managing errors through try-catch:
      try {
        //Handle stored Todo´s:
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
            
        if(!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        };
        setItem(parsedItem);
      } catch(error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }, 2000);
  });

  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    } catch {
      setError(error);
    }
  };

  //We can return objetcs instead of arrays when have much return data:
  return {
    item,
    saveItem,
    loading,
    error
  };

}

function App(props) {
  //This is a component
  // React Elements are different than html tags

  //States:
  const {
    item: toDos,
    saveItem: saveToDos,
    loading,
    error
  } = useLocalStorage('TODOS_V2', []);
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
      loading={loading}
      error={error}
    />
  );
}

export default App;
