// src/TodoItem.js
import React from 'react';

const TodoItem = ({ todo, index, toggleTodo, deleteTodo, startEditing }) => {
  return (
    <li>
      <span 
        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }} 
        onClick={() => toggleTodo(index)}
      >
        {todo.text}
      </span>
      <button className="edit" onClick={() => startEditing(index)}>Edit</button>
      <button className="delete" onClick={() => deleteTodo(index)}>Delete</button>
    </li>
  );
};

export default TodoItem;
