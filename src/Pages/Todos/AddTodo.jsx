import React from 'react'
import { addTodo } from '../feature/todos/TodoSlice';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const AddTodo = () => {

    const [todo,settodo] = useState("");
    const dispatch = useDispatch();

    const handlesubmit = ()=>{
        dispatch(addTodo(todo));
        settodo("");
    }

  return (
    <>
      <div>
        <h1>ToDo Using Redux</h1>
        <input 
        type="text"
        value={todo}
        onChange={(e)=>settodo(e.target.value)}
        placeholder='Enter Todo'
        />
        <button onClick={handlesubmit}>Add</button>
      </div>
    </>
  )
}

export default AddTodo
