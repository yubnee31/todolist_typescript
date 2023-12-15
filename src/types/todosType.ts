export type TodosType = {
  id: number;
  title: string;
  contents: string;
  isDone: boolean;
};

export type TodosProps = {
  todos: TodosType[];
  setTodos: React.Dispatch<React.SetStateAction<TodosType[]>>;
  listIsDone: boolean;
};
