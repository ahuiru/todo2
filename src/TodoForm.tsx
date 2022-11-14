import React, { ChangeEvent, FormEvent } from 'react';
// import { HandleContext } from './App';
import { TodoFormProps } from './types';
import { v4 as uuidv4 } from "uuid";

export const TodoForm = ({ inputText, setInputText, todoList, setTodoList }: TodoFormProps) => {

  // const value = useContext(HandleContext)
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
    <form onSubmit={(e) => handleSubmit(e)}>
      <input type="text" placeholder='内容を入力' onChange={(e) => handleChange(e)} value={inputText} required/>
      <button>送信</button>
    </form>
  )
}
