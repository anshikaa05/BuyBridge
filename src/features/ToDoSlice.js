import {createSlice} from'@reduxjs/toolkit';

const initialState = [
    {id:1,text:"First Todo",completed:false},
    { id: 2, text: "Build a Todo App", completed: true },
];

const TodoSlice = createSlice({
    name:"todos",
    initialState,
    reducers: {
        addTodo: (state,action)=>{
              state.push({
                id:Date.now(),
                text:action.payload,
                completed:true
              });
        },removeTodo: (state,action)=>{
           return  state.filter((t)=>t.id!==action.payload)
        },
        updateTodo: (state,action)=>{
            const {id,newtext} = action.payload;
            const update = state.find((t)=>t.id===id);
            if(update){
                update.text = newtext
            }
        }
    }

});

export const {addTodo,removeTodo,updateTodo} = TodoSlice.actions;
export default TodoSlice.reducer;