import { createContext, useState } from "react";
import "./App.css";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";

import { todo } from "./types";

export const InputContext = createContext({} as {
  inputText: string,
  setInputText: React.Dispatch<React.SetStateAction<string>>
});

export const TodoListContext = createContext({} as {
  todoList: todo[],
  setTodoList: React.Dispatch<React.SetStateAction<todo[]>>
});

function App() {
  const [inputText, setInputText] = useState("");
  const [todoList, setTodoList] = useState<todo[]>([]);

  return (
    <div className="App">
      <h1>TODO!</h1>
      <InputContext.Provider value={{inputText, setInputText}}>
        <TodoListContext.Provider value={{todoList, setTodoList}}>
          <TodoForm />
          <TodoList />
        </TodoListContext.Provider>
      </InputContext.Provider>
    </div>
  );
}

export default App;
