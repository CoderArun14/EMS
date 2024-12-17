import React, { useState } from "react";
import chotiShavi from "./AddtodoItems.module.css";
const AddTodoItems = () => {
    const [text,setText] = useState("")
    const handlText = (e)=>{
            setText(e.target.value)    
    }
  return (
    <>
      <input onChange={handlText} type="text" className="border border-2 border-success" />
      <h1 className={`${chotiShavi.shavi}`}>khush karo {text} </h1>
      <h1 className={`${chotiShavi.shavi}`}>khush karo {text} </h1>
      <h1 className={`${chotiShavi.shavi}`}>khush karo {text} </h1>
      <h1 className={`${chotiShavi.shavi}`}>khush karo {text} </h1>
    </>
  );
};

export default AddTodoItems;
