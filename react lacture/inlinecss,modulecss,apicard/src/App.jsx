import React from 'react'
import CardContainer from './Components/CardContainer'
import TodoContainer from './Todo/TodoContainer'
import AppName from './Todo/AppName'
import AddTodoItems from './Todo/AddTodoItems'
import Cardnew from './Todo/Search/Cardnew'

const App = () => {
  return (
    <>
  {/* <CardContainer/> */}
    <TodoContainer>
      {/* <AppName/> */}
      {/* <AddTodoItems/> */}
      <Cardnew/>
    </TodoContainer>
    </>
  )
}

export default App