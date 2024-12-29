import React from 'react'

const CompleteTask = ({elm}) => {
  return (
    <>
     <div className=' item rounded bg-success p-2'>
      <div className='d-flex justify-content-between'>
          <h6 className='p-2 rounded'style={{background:"rgb(50, 31, 136)"}}>{elm.Category}</h6>
          <h6 className='p-2 text-center'>{elm.TaskDate}</h6>
        </div>
        <h5 className='mt-2'>{elm.TaskTitle}</h5>
        <p style={{fontSize:'10px'}}>{elm.TaskDescription}</p>
        <div className='d-flex justify-content-between'>
          <button className='btn  m-0 px-2 fw-bold  ' style={{fontSize:'11px',width:'100px,',height:'40px',background:'yellow' }}> Completed</button>
        </div>
      </div>
    </>
  )
}

export default CompleteTask