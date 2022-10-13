import React from 'react';
import { v4 as uuidv4 } from 'uuid';

export const TodoForm = ({ inputText, setInputText, todoList, setTodoList }) => {

  const handleChange = (e) => {
    setInputText(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodoList([
      ...todoList,
      {
        text: inputText,
        id: uuidv4(),
        completed: false,
      }
    ])
    setInputText('')
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input type="text" placeholder='内容を入力' onChange={(e) => handleChange(e)} value={inputText}/>
      <button>送信</button>
    </form>
  )
}
