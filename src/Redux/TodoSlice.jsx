import { createSlice } from "@reduxjs/toolkit";


const todoSlice = createSlice({
    name:'todo',
    initialState:{
        text:'',
        todos:[],

    },
    reducers:{
        inputTodo:(state,action)=>{
            state.text=action.payload
        },
        addTodo:(state)=>{
            if(state.text.trim()){
            state.todos.push(state.text)
            state.text = ''
            }
            else{
                alert('Type something')
            }
        },
        deleteTodo:(state,action)=>{
            state.todos=state.todos.filter((_,id)=>id!==action.payload)
        }
    }
})

export const {inputTodo, addTodo, deleteTodo} = todoSlice.actions
export default todoSlice.reducer