

// import React, { useState } from 'react';

// const Counter = () => {
//   const [count, setCount] = useState(0);

//   const increment = () => {
//     if (count >= -20 && count < -10) {
//       setCount(count + 2);
//     } else if (count >= -10 && count < 0) {
//       setCount(count + 1);
//     }else if(count < 10) 
//       { setCount(count + 1);

//        } else if (count >= 10 && count < 20) {
//          setCount(count + 2); }
//   };

//   const decrement = () => {
//     if (count <= 0 && count > -10) {
//       setCount(count - 1);
//     } else if (count <= -10 && count > -20) {
//       setCount(count - 2);
//     } else if(count <= 20 && count > 10){
//       setCount(count-2)
//     } else if (count <= 10 && count >0){
//       setCount(count-1)
//     }
//   };

//   return (
//     <div>
//       <h1>Counter: {count}</h1>
//       <button onClick={increment} disabled={count >= 20}>Increment</button>
//       <button onClick={decrement} disabled={count <= -20}>Decrement</button>
//     </div>
//   );
// };

// export default Counter;

import React from 'react'
import './App.css'
import Form from './Components/Form'

const App = () => {
  return (
    <>
    <Form/>
    </>
  )
}

export default App
