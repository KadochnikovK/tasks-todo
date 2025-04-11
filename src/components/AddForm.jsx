import React, { useContext } from 'react';
import TodoContext from '../context/TodoContext';

function AddForm(){
    
    const { addTodo } = useContext(TodoContext);
    
    function handleKeyUp(event){
        if(event.key === 'Enter'){
            addTodo(event.target.value)
        }
    }

    return (
        <div className="input_elem">
            <input onKeyUp={handleKeyUp}/>
        </div>
    )
}

export default AddForm