import React from "react";
import { ToDoContext } from "../Context";
import { Counter } from "../Counter/Counter";
import { Search } from "../Search/Search";
import { TodoList } from "../TodoList/TodoList";
import { TodoItem } from "../TodoItem/TodoItem";
import { CreateButton } from "../CreateButton/CreateButton";

function AppUI() {

  return (
    <>
      {/*Creating the app components:*/}
      {/*Pass states to the components*/}
      <Counter />
      <Search />
      <ToDoContext.Consumer>
        {
          ({
            error,
            loading,
            searchedToDos,
            completeToDo,
            deleteToDo
          }) => (
            <TodoList>
              {/*Show an error status message:*/}
              {error && <p>...An ERROR has ocurred...</p>}
              {/*Show a loading status message:*/}
              {loading && <p>...Now loading. Please wait...</p>}
              {/*Show a "create your first ToDo"-status message
              if there are no ToDos created:*/}
              {(!loading && !searchedToDos.length) && <p>
                Let´s create your first ToDo!
                </p>}
              {searchedToDos.map((toDo) => (
                <TodoItem
                  key={toDo.text}
                  text={toDo.text}
                  complete={toDo.completed}
                  onComplete={() => completeToDo(toDo.text)}
                  onDelete={() => deleteToDo(toDo.text)}
                />
              ))}
            </TodoList>
          )
        }
      </ToDoContext.Consumer>
      <CreateButton />
    </>
  );
}

export { AppUI };
