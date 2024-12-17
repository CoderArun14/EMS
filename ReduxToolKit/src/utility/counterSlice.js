import { createSlice } from "@reduxjs/toolkit";


const counterSlice = createSlice({
  name:"counter",
  initialState:{
    value:"hey mere dularooo"
  },
  reducers:{
    increment:()=>{},
    decrement: ()=>{}
  }
})

export default counterSlice.reducer

