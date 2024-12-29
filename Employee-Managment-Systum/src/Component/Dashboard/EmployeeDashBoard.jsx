import React from 'react'
import Header from '../Others/Header'
import TaskNumber from '../Others/TaskNumber'
import Tasklist from '../Task/Tasklist'

const EmployeeDashBoard = ({data,changeUser}) => {
  // console.log(data)
  return (
    <>
    <div className='p-5 EmployeeDash'>
    <Header changeUser={changeUser} data={data}/>
    <TaskNumber data={data}/>
    <Tasklist data={data}/>
    </div>
    </>
  )
}

export default EmployeeDashBoard