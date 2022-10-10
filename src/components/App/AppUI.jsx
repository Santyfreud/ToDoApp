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
    deleteToDo
}) {

  return (
    <>
      {/*Creating the app components:*/}
      {/*Pass states to the components*/}
      <Counter totalToDos={totalToDos} completedToDos={completedToDos} />
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
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
