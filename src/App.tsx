import { ChangeEvent, FormEvent, useState } from "react";
import "./App.css";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { v4 as uuidv4 } from "uuid";
import { todo } from "./types";

function App() {
  const [inputText, setInputText] = useState("");
  const [todoList, setTodoList] = useState<todo[]>([]);

  const handleComplete = (id: string) => {
    setTodoList(
      todoList.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };
  // console.log(todoList);

  const handleDelete = (id: string) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  const handleChange = (e: ChangeEvent) => {
    const { value } = e.target as HTMLInputElement;
    // console.log(e.target as HTMLInputElement)
    setInputText(value);
    // console.log(value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setTodoList([
      ...todoList,
      {
        text: inputText,
        id: uuidv4(),
        completed: false,
      },
    ]);
    setInputText("");
  };

  return (
    <div className="App">
      <h1>TODO!</h1>
      <TodoForm
        inputText={inputText}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
      <TodoList
        todoList={todoList}
        handleComplete={handleComplete}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;
