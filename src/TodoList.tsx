import { TodoItem } from './TodoItem'
import './TodoList.css'
import { TodoListProps } from './types'



export const TodoList = ({ todoList, handleComplete, handleDelete }: TodoListProps) => {

  return (
    <div>
      <div className="todos">
        {todoList.map((todo) => (
          <TodoItem key={todo.id} todo={todo} handleComplete={handleComplete} handleDelete={handleDelete}/>

        ))}
      </div>
    </div>
  )
}
