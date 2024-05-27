import React, { useContext, useCallback } from "react";
import { TodoContext } from "../contexts/TodoContext";

const TodoItem = ({ todo }) => {
  const { dispatch } = useContext(TodoContext);

  const handleToggleTodo = useCallback(() => {
    dispatch({ type: "TOGGLE_TODO", payload: todo.id });
  }, [dispatch, todo.id]);

  const handleRemoveTodo = useCallback(() => {
    dispatch({ type: "REMOVE_TODO", payload: todo.id });
  }, [dispatch, todo.id]);

  return (
    <li>
      <span
        className={todo.completed ? "completed" : ""}
        onClick={handleToggleTodo}
      >
        {todo.text}
      </span>
      <button onClick={handleRemoveTodo}>Remove</button>
    </li>
  );
};

export default TodoItem;
