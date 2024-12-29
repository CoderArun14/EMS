import React from 'react'

const AcceptTask = ({elm}) => {
  // console.log(elm.TaskDate)
  return (
    <>
     <div className=' item rounded bg-primary p-2'>
      <div className='d-flex justify-content-between'>
          <h6 className='p-2 rounded'style={{background:"rgb(50, 31, 136)"}}>{elm.Category}</h6>
          <h6 className='p-2 text-center'>{elm.TaskDate}</h6>
        </div>
        <h5 className='mt-2'>{elm.TaskTitle}</h5>
        <p style={{fontSize:'10px'}}>{elm.TaskDescription}</p>
        <div className='d-flex justify-content-between'>
          <button className='btn bg-success m-0 px-2 fw-bold  ' style={{fontSize:'11px',width:'100px,',height:'40px' }}>Mark As Completed</button>
          <button className='btn bg-danger m-0 p-0 fw-bold' style={{fontSize:'10px',width:'100px'}}>Mark As Failed</button>
        </div>
      </div>
    </>
  )
}

export default AcceptTask