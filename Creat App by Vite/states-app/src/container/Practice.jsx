
// import React,{ useState } from 'react'
// const Practice = () => {
//   let [num,setnum]= useState(0)
  
//  const increment = ()=>{
//     if(num>=10) {
//       num = 10
//     } else {
//        num = num + 1;
//   setnum(num)
      
//     } 
//  }
//  const decrement = ()=>{
//   if(num<=0) {
//     num = 0
//   } else {
//      num = num -1;
// setnum(num)
    
//   }
//  }
//   return (
//     <>
//      <h1>Count:{num}</h1>
//     <button onClick={increment} className='btn bg-success mx-2 text-light'>Increment</button>
//     <button onClick={decrement} className='btn bg-danger mx-2 text-light'>Decrement</button>
//     </>
//   )
// }

// export default Practice


import React from 'react'

const Practice = ({children}) => {
  return (
    <div >
      {children}
    </div>
  )
}

export default Practice