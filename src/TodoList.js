// src/TodoList.js
import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, toggleTodo, deleteTodo, startEditing }) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem 
          key={index} 
          index={index} 
          todo={todo} 
          toggleTodo={toggleTodo} 
          deleteTodo={deleteTodo} 
          startEditing={startEditing} 
        />
      ))}
    </ul>
  );
};

export default TodoList;
