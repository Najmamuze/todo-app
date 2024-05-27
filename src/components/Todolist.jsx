import React, { useContext, useMemo } from "react";
import { TodoContext } from "../contexts/TodoContext";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { state } = useContext(TodoContext);
  const { todos, filter } = state;

  const filteredTodos = useMemo(() => {
    return todos.filter((todo) => {
      if (filter === "all") return true;
      if (filter === "completed") return todo.completed;
      if (filter === "active") return !todo.completed;
      return true;
    });
  }, [todos, filter]);

  return (
    <ul>
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
