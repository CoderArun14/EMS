import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./CounterSlice";
import TodoSlice from "./TodoSlice"
const store = configureStore({
  reducer:{
    Counter:CounterSlice,
    todoapp:TodoSlice

  }
})

export default store;