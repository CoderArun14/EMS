import React from 'react'
import Header from '../Others/Header'
import TaskNumber from '../Others/TaskNumber'
import Tasklist from '../Task/Tasklist'

const EmployeeDashBoard = () => {
  return (
    <>
    <div className='p-5 EmployeeDash'>
    <Header/>
    <TaskNumber/>
    <Tasklist/>
    </div>
    </>
  )
}

export default EmployeeDashBoard