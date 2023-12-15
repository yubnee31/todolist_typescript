import { jsonApi } from "./api";
import type { TodosType } from "../types/todosType";

// export const getData = async () => {
//   try {
//     const { data } = await jsonApi.get("/todos");
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const addData = async (newTodo: TodosType) => {
//   try {
//     await jsonApi.post("/todos", newTodo);
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const deleteData = async (id: TodosType["id"]) => {
//   try {
//     await jsonApi.delete(`/todos/${id}`);
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const updateData = async (
//   id: TodosType["id"],
//   isDone: TodosType["isDone"]
// ) => {
//   try {
//     await jsonApi.patch(`/todos/${id}`),
//       {
//         isDone: !isDone,
//       };
//   } catch (error) {
//     console.log(error);
//   }
// };
