import { createContext } from "react";

export const StoreProvide = createContext({
    addTodo:[],
    handleAdd:()=>{},
    handleDelete:()=>{} 
    
})