import React from 'react'
import './TodoList.css'

export const TodoList = ({ todoList, setTodoList }) => {

  const handleComplete = (id) => {
    setTodoList(todoList.map((todo) => {
      if (todo.id === id) {
        return({
          ...todo,
          completed: !todo.completed,
        })
      }
      return todo;
    }))
  }
  console.log(todoList);

  const handleDelete = (id) => {
    setTodoList(todoList.filter(todo => todo.id !== id))
  }

  return (
    <div>
      <div className="todos">
        {todoList.map((todo) => (
          <div className={`todo ${todo.completed ? "complete" : ""}`} key={todo.id}>
            <span>{todo.text}</span>
            <button onClick={() => handleComplete(todo.id)}>完了</button>
            <button onClick={() => handleDelete(todo.id)}>削除</button>
          </div>
        ))}
      </div>
    </div>
  )
}
