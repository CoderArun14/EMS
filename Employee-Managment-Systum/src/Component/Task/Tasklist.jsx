import React from 'react'

const Tasklist = () => {
  return (
    <>
    <div className='Tasklist'>
      <div className=' item rounded bg-primary p-2'>
      <div className='d-flex justify-content-between'>
          <h6 className='p-2 rounded'style={{background:"rgb(50, 31, 136)"}}>High</h6>
          <h6 className='p-2 text-center'>14-Dec-2024</h6>
        </div>
        <h5 className='mt-2'>Make a Youtube Vedio</h5>
        <p style={{fontSize:'10px'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi et alias, odit corrupti cumque, vitae similique harum provident assumenda, ratione ipsam exercitationem voluptas libero odio aliquam iste molestiae quidem temporibus?</p>
      </div>
      <div className=' item rounded bg-secondary '></div>
      <div className=' item rounded bg-success '></div>
      <div className=' item rounded bg-info '></div>
      <div className=' item rounded bg-danger '></div>
      <div className=' item rounded bg-warning '></div>
      {/* <div className=' item rounded 'style={{backgroundColor:"pink"}}></div>
      <div className=' item rounded 'style={{backgroundColor:"blue"}}></div>
      <div className=' item rounded ' style={{backgroundColor:"white"}}></div>
      <div className=' item rounded 'style={{backgroundColor:"yellow"}}></div>
      <div className=' item rounded 'style={{backgroundColor:"nevy-blue"}}></div>
      <div className=' item rounded ' style={{backgroundColor:"red"}}></div>
      <div className=' item rounded ' style={{backgroundColor:"pink"}}></div> */}
    </div>
    </>
  )
}

export default Tasklist