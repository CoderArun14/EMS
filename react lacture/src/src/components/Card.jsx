import React from 'react'
import Head from './Head'
import ImgContainer from './ImgContainer'

const Card = () => {
  return (
    <>
    <div className="card">
       <Head/>
       <ImgContainer/>
        <p>description</p>
        <div className='btn'>   <button>About Me</button></div>
    </div>
    
    </>
  )
}

export default Card