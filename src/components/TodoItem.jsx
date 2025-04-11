import React, { useContext } from 'react';
import TodoContext from '../context/TodoContext';

function TodoItem({ id, title, completed }){
    
    const { deleteTodoByid, changeTodos } = useContext(TodoContext);

    return (
        <div 
            className="todo_card"
            style={{backgroundColor: completed ? 'green' : 'red'}}
            onDoubleClick={() => deleteTodoByid(id)}
            onClick={() => changeTodos(id)}
        >
            <h2>{title}</h2>
        </div>
    )
}

export default TodoItem