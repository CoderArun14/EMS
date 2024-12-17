import React from 'react'
import { useSelector } from 'react-redux'

const Home = () => {
  let data = useSelector((state)=> state)
  console.log(data.value)
  return (
    <>
    <h1>Hello Dosto</h1>
    <h1>{data.value}</h1>
    </>
  )
}

export default Home