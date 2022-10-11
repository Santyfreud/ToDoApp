import React from "react";
import { Counter } from "../Counter/Counter";
import { Search } from "../Search/Search";
import { TodoList } from "../TodoList/TodoList";
import { TodoItem } from "../TodoItem/TodoItem";
import { CreateButton } from "../CreateButton/CreateButton";

function AppUI({
    totalToDos,
    completedToDos,
    searchValue,
    setSearchValue,
    searchedToDos,
    completeToDo,
    deleteToDo,
    loading,
    error
}) {

  return (
    <>
      {/*Creating the app components:*/}
      {/*Pass states to the components*/}
      <Counter totalToDos={totalToDos} completedToDos={completedToDos} />
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
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
      <CreateButton />
    </>
  );
}

export { AppUI };
