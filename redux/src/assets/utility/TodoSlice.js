import { createSlice } from "@reduxjs/toolkit";

const TodoSlice = createSlice(
  {
    name:"todoapp",
    initialState:{
      todos:[
        {
          work:"agra s bahar jana hai",
          myDate:"01/12/2024"
        },
        {
          work:"project banega react mai 9 bje s 12",
          myDate:"02/12/2024"
        }
      ]
    },
    reducers:{
      addTodo:(state,action)=>{

      },
      deleteTodo:(state,action)=>{
        state.todos = state.todos.filter((elm,id)=> id!=action.payload)
      }
    }
  }
)
export const {addTodo,deleteTodo} = TodoSlice.actions
export default TodoSlice.reducer