import { ChangeEvent, createContext, FormEvent, useState } from "react";
import "./App.css";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";

import { todo, todoContext } from "./types";

function App() {
  const [inputText, setInputText] = useState("");
  const [todoList, setTodoList] = useState<todo[]>([]);

  return (
    <div className="App">
      <h1>TODO!</h1>
      {/* <HandleContext.Provider
        value={[inputText, handleSubmit, handleChange, todoList, handleComplete, handleDelete]}
      > */}
      <TodoForm inputText={inputText} setInputText={setInputText} todoList={todoList} setTodoList={setTodoList} />
      <TodoList todoList={todoList} setTodoList={setTodoList} />
      {/* </HandleContext.Provider> */}
    </div>
  );
}

export default App;
