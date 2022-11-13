import React from 'react';
import { TodoFormProps } from './types';


export const TodoForm = ({ inputText, handleSubmit, handleChange  }: TodoFormProps) => {

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input type="text" placeholder='内容を入力' onChange={(e) => handleChange(e)} value={inputText} required/>
      <button>送信</button>
    </form>
  )
}
