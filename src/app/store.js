import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../features/ToDoSlice';

export const store = configureStore({
  reducer:{
    todos: todoReducer,
  }
}
)