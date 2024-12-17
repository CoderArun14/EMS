import React from 'react'
import CounterApp from './assets/CounterApp'
import { Provider } from 'react-redux'
import store from './assets/utility/store'
import TodoApp from './TodoApp'

const App = () => {
  return (
    <>
    <Provider store={store}>

    {/* <CounterApp/> */}
    <TodoApp/>
    </Provider>
    </>
  )
}

export default App