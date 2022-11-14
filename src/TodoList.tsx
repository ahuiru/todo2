import { TodoItem } from "./TodoItem";
import "./TodoList.css";
import { TodoListProps } from "./types";

export const TodoList = ({ todoList, setTodoList }: TodoListProps) => {
  return (
    <>
      {todoList.map((todo) => (
        <TodoItem todo={todo} todoList={todoList} setTodoList={setTodoList} />
      ))}
    </>
  );
};
