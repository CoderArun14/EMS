// import React, { useState } from "react";

// const TodoContainer = () => {
//   // let myarray = useState(12)
//   let [num,setnum] = useState(0)
//   // let num = myarray[0]

//   // console.log(myarray);
  
//   // const handleInc = (hello)=>{
//     const handleInc = ()=>{
//     // console.log("Hey Shavi....");
//     // console.log("Hey Shavi....", hello);
//       num = num + 1;
//     //  myarray[1](num)
//     setnum(num)
      
//   }
//   return (
//     <>
//       <h1>Count:{num}</h1>
//       <button 
//       className="btn btn-lg btn-success"
//       onClick={handleInc}
//       // onClick={()=>handleInc("asjdgjhsdf")}
//       >increment+</button>
//     </>
//   );
// };

// export default TodoContainer;
import React from 'react'

const TodoContainer = ({children}) => {
  return (
    <div>
      <h1>hello</h1>
      {children}
      </div>
  )
}

export default TodoContainer