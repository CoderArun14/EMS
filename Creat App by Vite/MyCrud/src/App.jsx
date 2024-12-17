import React from 'react'
import Nav from "./Nav"
import Store from './Store/Store'
import { Outlet } from 'react-router-dom'
import ModalForm from './ModalForm'

const App = () => {
  return (
    <>
    <Store>
    <Nav/>
    <ModalForm/>
    <Outlet/>
    </Store>
    </>
  )
}

export default App