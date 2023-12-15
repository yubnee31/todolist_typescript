import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Todolist from "./components/Todolist";

import type { TodosType } from "./types/todosType";
import Header from "./components/Header";

function App() {
  const [todos, setTodos] = useState<TodosType[]>([
    {
      id: Date.now(),
      title: "제목1",
      contents: "내용1",
      isDone: false,
    },
  ]);

  return (
    <div>
      <Header />
      <Form todos={todos} setTodos={setTodos} />
      <Todolist todos={todos} setTodos={setTodos} listIsDone={false} />
      <Todolist todos={todos} setTodos={setTodos} listIsDone={true} />
    </div>
  );
}

export default App;
