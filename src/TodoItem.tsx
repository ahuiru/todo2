import React from "react";
import { TodoItemProps } from "./types";

export const TodoItem = ({ todo, todoList, setTodoList }: TodoItemProps) => {
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

  return (
    <div className={`todo ${todo.completed ? "complete" : ""}`} key={todo.id}>
      <span>{todo.text}</span>
      <button onClick={() => handleComplete(todo.id)}>完了</button>
      <button onClick={() => handleDelete(todo.id)}>削除</button>
    </div>
  );
};
