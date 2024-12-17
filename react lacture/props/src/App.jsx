import React from 'react'
import Card from './components/Card'
import Welocome from './components/Welocome'

const App = () => {
  return (
    <>
      <Card title= "Shavi" imgAdd = "1.jpg" des="Bahut khush rakhne wala"/>
      <Card title= "Badi Shavi" imgAdd = "2.jpg" des="Bahut jada khush rakhne wala"/>
      <Card title= "chhoti Shavi" imgAdd = "3.jpg" des="Bahut jada s bhi jada khush rakhne wala"/>
      {/* <Welocome/> */}
    </>
  )
}

export default App