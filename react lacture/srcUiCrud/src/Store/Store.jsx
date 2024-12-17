import { createContext } from "react";

export const DataProvider = createContext(
    {   myData:[],
        handleClose:()=>{},
        handleShow:()=>{}
    }
)