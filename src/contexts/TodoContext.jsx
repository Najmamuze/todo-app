import React, { createContext, useReducer, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

// Define initial state
const initialState = {
  todos: [],
  filter: "all",
};

// Define action types
const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";
const SET_FILTER = "SET_FILTER";

// Define reducer function
const todoReducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    case SET_FILTER:
      return { ...state, filter: action.payload };
    default:
      return state;
  }
};

// Create Context
export const TodoContext = createContext();

// TodoProvider Component
export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [storedTodos, setStoredTodos] = useLocalStorage("todos", []);

  useEffect(() => {
    if (storedTodos.length) {
      dispatch({ type: "LOAD_TODOS", payload: storedTodos });
    }
  }, [storedTodos]);

  useEffect(() => {
    setStoredTodos(state.todos);
  }, [state.todos, setStoredTodos]);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};
