import { useState } from 'react';
import './App.css';
import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';


function App() {
  const [inputText, setInputText] = useState("");
  const [todoList, setTodoList] = useState([]);

  return (
    <div className='App'>
      <h1>TODO!</h1>
      <TodoForm inputText={inputText} setInputText={setInputText} todoList={todoList} setTodoList={setTodoList}/>
      <TodoList todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
}

export default App;
