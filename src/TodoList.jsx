import React, { useState } from 'react';
import { useTodoContext } from './TodoContext';

const TodoList = () => {
  const { state, dispatch } = useTodoContext();
  const [filter, setFilter] = useState('all');

  const filteredTasks = () => {
    if (filter === 'completed') {
      return state.tasks.filter(task => task.completed);
    }
    if (filter === 'pending') {
      return state.tasks.filter(task => !task.completed);
    }
    return state.tasks;
  };

  const handleToggle = (task) => {
    dispatch({
      type: 'UPDATE_TASK',
      payload: { ...task, completed: !task.completed },
    });
  };

  const handleDelete = (id) => {
    dispatch({ type: 'DELETE_TASK', payload: id });
  };

  return (
    <div>
      <h2>To-Do List</h2>
      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="pending">Pending</option>
      </select>
      <ul>
        {filteredTasks().map(task => (
          <li key={task.id}>
            <span
              style={{
                textDecoration: task.completed ? 'line-through' : 'none',
              }}
            >
              {task.title}
            </span>
            <button onClick={() => handleToggle(task)}>
              {task.completed ? 'Undo' : 'Complete'}
            </button>
            <button onClick={() => handleDelete(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;