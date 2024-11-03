import React from 'react';
import { TodoProvider } from './TodoContext';
import TodoList from './TodoList';
import './App.css'; 

function App() {
  return (
    <TodoProvider>
      <div className="App">
        <h1>To-Do List App</h1>
        <TodoList />
      </div>
    </TodoProvider>
  );
}

export default App;