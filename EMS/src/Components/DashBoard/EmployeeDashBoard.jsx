import React from 'react'
import Header from '../Pages/Header'
import TaskNumber from '../Pages/TaskNumber'
import TaskList from '../Pages/TaskList'

const EmployeeDashBoard = ({employeeData,setuser}) => {
  // console.log(employeeData)
  return (
    <>
    <div>
      <Header employeeData={employeeData} setuser={setuser}/>
      <TaskNumber  employeeData={employeeData} />
      <TaskList  employeeData={employeeData} />
    </div>
    </>
  )
}

export default EmployeeDashBoard