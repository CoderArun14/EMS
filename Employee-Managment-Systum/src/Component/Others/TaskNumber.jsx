import React from 'react'

const TaskNumber = () => {
  return (
    <>
    <div className='d-flex my-5'>
    <div className=' px-3  rounded mx-4' style={{width:"25%", backgroundColor:"royalblue"}}>
    <h3>0</h3>
    <h6>New Task</h6>
    </div>
    <div className=' px-3  rounded mx-4' style={{width:"25%",  backgroundColor:"grey"}}>
    <h3>0</h3>
    <h6>New Task</h6>
    </div>
    <div className=' px-3   rounded mx-4' style={{width:"25%",  backgroundColor:"green"}}>
    <h3>0</h3>
    <h6>New Task</h6>
    </div>
    <div className=' px-3   rounded mx-4' style={{width:"25%",  backgroundColor:"orange"}}>
    <h3>0</h3>
    <h6>New Task</h6>
    </div>
    </div>
    </>
  )
}

export default TaskNumber