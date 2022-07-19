import './App.css';
import { useState, useEffect } from 'react';
import { getTodos, getTodo, postTodo, updateTodo } from './request';

function App() {
  const [data, setData] = useState([]);

  const handleGetTodos = async () => {
    const todos = await getTodos();
    setData(todos);
  };

  const handleGetTodo = async (id) => {
    const todo = await getTodo(id);
    setData(todo);
  };

  const handlePostTodo = async () => {
    const newTodo = await postTodo();
    setData(newTodo);
  };

  const handleUpdateTodo = async (id) => {
    const updatedTodo = await updateTodo(id);
    setData(updatedTodo);
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div>
      <button onClick={handleGetTodos}>get Todos</button>
      <button onClick={() => handleGetTodo(1)}>get Todo one</button>
      <button onClick={handlePostTodo}>post Todo</button>
      <button onClick={() => handleUpdateTodo(1)}>update Todo</button>
      <button onClick={() => console.log(data)}>현재 data 출력</button>
    </div>
  );
}

export default App;
