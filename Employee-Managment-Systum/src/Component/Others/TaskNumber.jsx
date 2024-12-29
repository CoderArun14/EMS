import React from 'react'

const TaskNumber = ({data}) => {
  // console.log(data?.tasks[0].Active)
  return (
    <>
    <div className='d-flex my-5'>
    <div className=' px-3  rounded mx-4' style={{width:"25%", backgroundColor:"royalblue"}}>
    <h3>{data?.taskNumbers?.NewTask}</h3>
    <h6>Accept Task</h6>
    </div>
    <div className=' px-3  rounded mx-4' style={{width:"25%",  backgroundColor:"grey"}}>
    <h3>{data?.taskNumbers?.Completed}</h3>
    <h6>New Task</h6>
    </div>
    <div className=' px-3   rounded mx-4' style={{width:"25%",  backgroundColor:"green"}}>
    <h3>{data?.taskNumbers?.Active}</h3>
    <h6>Completed Task</h6>
    </div>
    <div className=' px-3   rounded mx-4' style={{width:"25%",  backgroundColor:"orange"}}>
    <h3>{data?.taskNumbers?.Failed}</h3>
    <h6>Failed Task</h6>
    </div>
    </div>
    </>
  )
}

export default TaskNumber