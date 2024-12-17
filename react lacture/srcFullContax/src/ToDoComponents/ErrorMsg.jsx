import React, { useContext } from 'react'
import { StoreProvide } from '../Store/Store'

const ErrorMsg = () => {
  let {addTodo} = useContext(StoreProvide)
  return (
    <>
    {addTodo.length==0 && <h1 className='text-center'>There is no Task</h1>}
    </>
  )
}

export default ErrorMsg
