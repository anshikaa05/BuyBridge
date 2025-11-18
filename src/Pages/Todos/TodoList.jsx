import React from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { removeTodo, updateTodo } from '../feature/todos/TodoSlice';

const ToDoList = () => {
    
    const todos = useSelector((state)=>state.todos);
    const dispatch = useDispatch();
  return (
   <>
   <ul>
     {todos.map((todo)=>(
        <li key={todo.id}>{todo.text}
        <button onClick={()=>dispatch(removeTodo(todo.id))}>Remove</button>
        {/* <button onClick={()=>dispatch(updateTodo(todo))}>Update</button> */}
        </li>
     ))}
   </ul>
   </>
  )
}

export default ToDoList
