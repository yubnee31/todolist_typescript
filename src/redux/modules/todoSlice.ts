import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import type { TodosType } from "../../types/todosType";

const initialState: TodosType[] = [
  {
    id: Date.now(),
    title: "제목1",
    contents: "내용1",
    isDone: false,
  },
];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TodosType>) => {
      return [...state, action.payload];
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      return state.filter((item) => item.id !== action.payload);
    },
    updateTodo: (state, action: PayloadAction<number>) => {
      return state.map((item) => {
        if (item.id === action.payload) {
          return { ...item, isDone: !item.isDone };
        } else {
          return item;
        }
      });
    },
  },
});

export default todoSlice.reducer;
export const { addTodo, deleteTodo, updateTodo } = todoSlice.actions;
