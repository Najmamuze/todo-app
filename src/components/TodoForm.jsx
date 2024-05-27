import React, { useContext, useRef } from "react";
import { TodoContext } from "../contexts/TodoContext";

const TodoForm = () => {
  const { dispatch } = useContext(TodoContext);
  const inputRef = useRef();

  const handleAddTodo = (e) => {
    e.preventDefault();
    const newTodo = {
      id: Date.now(),
      text: inputRef.current.value,
      completed: false,
    };
    dispatch({ type: "ADD_TODO", payload: newTodo });
    inputRef.current.value = "";
  };

  return (
    <form onSubmit={handleAddTodo}>
      <input ref={inputRef} type="text" placeholder="Add a new todo" required />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;
