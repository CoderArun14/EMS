import React, { useRef } from 'react'
import CardContainer from './SerachApp/CardContainer'
import TodoContainer from './Todo/TodoContainer'
import AppName from './Todo/AppName'
import AddTodoItems from './Todo/AddTodoItems'
import Cardnew from './Todo/Search/Cardnew'

const App = () => {
 let myval =  useRef()
 
 const handle = ()=>{   
   console.log(myval.current.value);
  }
  const shaviConfuse = (id)=>{
      console.log(id);
      
  }
  return (
    <>
  {/* <CardContainer/> */}
    <TodoContainer>
      {/* <AppName/> */}
      {/* <AddTodoItems/> */}
      {/* <Cardnew/> */}
      <CardContainer handleKhushi={shaviConfuse}/>
      {/* <input type="text" ref={myval}/>
      <button onClick={handle}>click</button> */}
    </TodoContainer>
    </>
  )
}

export default App