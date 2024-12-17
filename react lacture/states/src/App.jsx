import React from 'react'
import CardContainer from './Components/CardContainer'
import TodoContainer from './Todo/TodoContainer'
import AppName from './Todo/AppName'

const App = () => {
  return (
    <>
  {/* <CardContainer/> */}
    <TodoContainer>
      <AppName/>
    </TodoContainer>
    </>
  )
}

export default App