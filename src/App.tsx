import "./App.css";
import Form from "./components/Form";
import Todolist from "./components/Todolist";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <Form />
      <Todolist isDone={false} />
      <Todolist isDone={true} />
    </div>
  );
}

export default App;
