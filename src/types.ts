import { ChangeEvent, FormEvent } from "react";

export type todo = {
  text: string;
  id: string;
  completed: boolean;
};

export type TodoFormProps = {
  inputText: string;
  handleSubmit: (e: FormEvent) => void;
  handleChange: (e: ChangeEvent) => void;
};

export type TodoListProps = {
  todoList: todo[];
  handleComplete: (id: string) => void;
  handleDelete: (id: string) => void;
};

export type TodoItemProps = {
  todo: todo;
  handleComplete: (id: string) => void;
  handleDelete: (id: string) => void;
};
