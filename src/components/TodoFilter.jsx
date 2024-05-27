import React, { useContext, useCallback } from "react";
import { TodoContext } from "../contexts/TodoContext";

const TodoFilter = () => {
  const { state, dispatch } = useContext(TodoContext);
  const { filter } = state;

  const handleSetFilter = useCallback(
    (filter) => {
      dispatch({ type: "SET_FILTER", payload: filter });
    },
    [dispatch]
  );

  return (
    <div className="todo-filters">
      <button
        className={filter === "all" ? "active" : ""}
        onClick={() => handleSetFilter("all")}
      >
        All
      </button>
      <button
        className={filter === "active" ? "active" : ""}
        onClick={() => handleSetFilter("active")}
      >
        Active
      </button>
      <button
        className={filter === "completed" ? "active" : ""}
        onClick={() => handleSetFilter("completed")}
      >
        Completed
      </button>
    </div>
  );
};

export default TodoFilter;
