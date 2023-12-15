import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../modules/todoSlice";
import { useDispatch } from "react-redux";

const store = configureStore({
  reducer: {
    todoSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export default store;
