import React from "react";
import { TodoItemProps } from "./types";

export const TodoItem = ({todo, handleComplete, handleDelete }: TodoItemProps) => {
  return (
    <div className={`todo ${todo.completed ? "complete" : ""}`} key={todo.id}>
      <span>{todo.text}</span>
      <button onClick={() => handleComplete(todo.id)}>完了</button>
      <button onClick={() => handleDelete(todo.id)}>削除</button>
    </div>
  );
};
