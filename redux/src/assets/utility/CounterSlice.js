import { createSlice } from "@reduxjs/toolkit";

const CounterSlice = createSlice({
  name:"Counter",
  initialState:{
    // value:0
    
  },
  // reducers:{
  //   increment: (state,action)=>{
  //    state.value = state.value + 1
  //   //  state.value = action.payload
     
  //   },
  //   decrement:(state,action)=>{
  //     state.value = state.value - 1
  //   },
  //   reset: (state,action)=>{
  //     state.value = action.payload
  //   }
  // }
  reducers:{
   
  }
})
export const {increment,decrement,reset} = CounterSlice.actions
export default CounterSlice.reducer