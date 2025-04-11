import TodoItem from "./TodoItem"
import React, { useContext } from 'react';
import TodoContext from "./context/TodoContext";

function TodoList(){

        const { todos, changeTodos, deleteTodoByid } = useContext(TodoContext);
    return (
        <div>
           {todos.map(elem => <TodoItem 
                                key={elem.id}
                                id={elem.id}
                                title={elem.title}
                                completed={elem.completed}
                                deleteTodoByid={deleteTodoByid}
                                changeTodos={changeTodos}
                            />)}
        </div>
    )
}

export default TodoList