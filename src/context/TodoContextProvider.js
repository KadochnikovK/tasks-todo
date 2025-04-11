import React, { useState, useEffect } from "react";
import TodoContext from "./TodoContext";

const TodoProvider = ({ children }) => {
  const start_todos = [
    { id: 1, title: 'Помыть руки', completed: true },
    { id: 2, title: 'Сделать зарядку', completed: false },
    { id: 3, title: 'Наконец изучить React', completed: true }
  ];

  const local_data = JSON.parse(localStorage.getItem('todos'));
  const [todos, setTodos] = useState(local_data || start_todos);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const deleteTodoByid = (id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  const changeTodos = (id) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const addTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title,
      completed: false
    };
    setTodos(prev => [...prev, newTodo]);
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, deleteTodoByid, changeTodos }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;