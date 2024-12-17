import React from 'react'
import { Provider, useSelector } from 'react-redux'
import store from './utility/store'
import Home from './Home'

const App = () => {
  
  return (
    <Provider store={store}>
      
    <Home/>
    </Provider>
  )
}

export default App