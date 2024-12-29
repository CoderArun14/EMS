import React from 'react'

const CompleteTask = ({elm,onDelete}) => {
  return (
    <>
    <div className=' item rounded bg-info text-light'>
      <div className='d-flex justify-content-between p-2'>
        <p style={{background:"rgb(50, 31, 136)"}} className='px-2 rounded'>{elm.Category}</p>
        <p style={{background:"rgb(50, 31, 136)"}} className='px-2 rounded'>{elm.TaskDate}</p>
      </div>
      <h5 className='text-center'>{elm.TaskTitle}</h5>
      <h6 className='text-center'>{elm.TaskDescription}</h6>
      <div className='d-flex justify-content-between'>
      <button className='btn btn-success me-1 mt-4'>Completed</button>
      <button className='btn btn-danger mt-4' onClick={onDelete}>Delete Task</button>
      </div>
    </div>
    </>
  )
}

export default CompleteTask