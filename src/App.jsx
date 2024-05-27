import React from "react";
import { TodoProvider } from "./contexts/TodoContext";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/Todolist";
import TodoFilter from "./components/TodoFilter";
import "./styles.css";

const App = () => {
  return (
    <TodoProvider>
      <h1>Todo List</h1>
      <TodoForm />
      <TodoFilter />
      <TodoList />
    </TodoProvider>
  );
};

export default App;
