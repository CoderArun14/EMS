import React from 'react'
import Header from '../Pages/Header'
import CreateTask from '../InnerPage/CreateTask'
import AllTask from '../InnerPage/AllTask'

const AdminDashBoard = ({employeeData,setuser}) => {
  return (
    <>
    <Header employeeData={employeeData} setuser={setuser}/>
    <CreateTask/>
    </>
  )
}

export default AdminDashBoard