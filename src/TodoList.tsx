import { useContext } from "react";
import { TodoListContext } from "./App";
// import { TodoItem } from "./TodoItem";
import "./TodoList.css";

export const TodoList = () => {
  const T = useContext(TodoListContext);

  const handleComplete = (id: string) => {
    T.setTodoList(
      T.todoList.map((todo) => {
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
    T.setTodoList(T.todoList.filter((todo) => todo.id !== id));
  };

  return (
    <>
      {T.todoList.map((todo) => (
        // <TodoItem todo={todo} key={todo.id}/>
        <div
          className={`todo ${todo.completed ? "complete" : ""}`}
          key={todo.id}
        >
          <span>{todo.text}</span>
          <button onClick={() => handleComplete(todo.id)}>完了</button>
          <button onClick={() => handleDelete(todo.id)}>削除</button>
        </div>
      ))}
    </>
  );
};
