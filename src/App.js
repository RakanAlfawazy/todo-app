// src/App.js
import React, { useState } from 'react';
import TodoList from './TodoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodoIndex, setCurrentTodoIndex] = useState(null);

  const addTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, { text: inputValue, completed: false }]);
      setInputValue('');
    }
  };

  const updateTodo = () => {
    if (inputValue.trim() !== '' && currentTodoIndex !== null) {
      const updatedTodos = todos.map((todo, index) =>
        index === currentTodoIndex ? { ...todo, text: inputValue } : todo
      );
      setTodos(updatedTodos);
      setInputValue('');
      setIsEditing(false);
      setCurrentTodoIndex(null);
    }
  };

  const startEditing = (index) => {
    setIsEditing(true);
    setInputValue(todos[index].text);
    setCurrentTodoIndex(index);
  };

  const toggleTodo = (index) => {
    const newTodos = todos.map((todo, i) => {
      if (i === index) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <input 
        type="text" 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
        placeholder="Add a new task" 
      />
      <button onClick={isEditing ? updateTodo : addTodo}>
        {isEditing ? 'Update' : 'Add'}
      </button>
      <TodoList 
        todos={todos} 
        toggleTodo={toggleTodo} 
        deleteTodo={deleteTodo} 
        startEditing={startEditing} 
      />
    </div>
  );
}

export default App;
