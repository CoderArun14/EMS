import React from 'react'

const TaskNumber = ({employeeData}) => {
  return (
    <>
    <div className='d-flex justify-content-between p-5'>
    <div className='bg-success text-white px-5 text-center rounded'>
      <h5>{employeeData.ActiveTask}</h5>
      <h6>Active Task</h6>
    </div>
    <div className='bg-secondary text-white px-5 text-center rounded'>
      <h5>{employeeData.NewTask}</h5>
      <h6>New Task</h6>
    </div>
    <div className='bg-info text-white px-5 text-center rounded'>
      <h5>{employeeData.Completed}</h5>
      <h6>Completed Task</h6>
    </div>
    <div className='bg-warning text-white px-5 text-center rounded'>
      <h5>{employeeData.Failed}</h5>
      <h6>Failed Task</h6>
    </div>
    </div>
    </>
  )
}

export default TaskNumber