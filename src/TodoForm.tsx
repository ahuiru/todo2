import React, { ChangeEvent, FormEvent, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { InputContext, TodoListContext } from "./App";

export const TodoForm = () => {
  const I = useContext(InputContext);
  const T = useContext(TodoListContext);

  const handleChange = (e: ChangeEvent) => {
    const { value } = e.target as HTMLInputElement;
    // console.log(e.target as HTMLInputElement)
    I.setInputText(value);
    // console.log(value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    T.setTodoList([
      ...T.todoList,
      {
        text: I.inputText,
        id: uuidv4(),
        completed: false,
      },
    ]);
    I.setInputText("");
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        placeholder="内容を入力"
        onChange={(e) => handleChange(e)}
        value={I.inputText}
        required
      />
      <button>送信</button>
    </form>
  );
};
