import React from "react";
import { ToDoProvider } from "../Context";
import { AppUI } from "./AppUI";

function App(props) {
  //This is a component
  // React Elements are different than html tags
  return (
    <ToDoProvider>
      <AppUI />
    </ToDoProvider>
  );
}

export default App;
