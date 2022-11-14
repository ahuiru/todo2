import { ChangeEvent, FormEvent } from "react";

export type todo = {
  text: string;
  id: string;
  completed: boolean;
};

export type TodoFormProps = {
  inputText: string;
  setInputText: React.Dispatch<React.SetStateAction<string>>;
  todoList: todo[];
  setTodoList: React.Dispatch<React.SetStateAction<todo[]>>;
  // handleSubmit: (e: FormEvent) => void;
  // handleChange: (e: ChangeEvent) => void;
};

export type TodoListProps = {
  todoList: todo[];
  setTodoList: React.Dispatch<React.SetStateAction<todo[]>>;
  // handleComplete: (id: string) => void;
  // handleDelete: (id: string) => void;
};

export type TodoItemProps = {
  todo: { text: string; id: string; completed: boolean };
  todoList: todo[];
  setTodoList: React.Dispatch<React.SetStateAction<todo[]>>;
};

export type todoContext = {
  inputText: string;
  handleSubmit: (e: FormEvent) => void;
  handleChange: (e: ChangeEvent) => void;
  todoList: todo[];
  handleComplete: (id: string) => void;
  handleDelete: (id: string) => void;
};
