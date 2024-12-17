import React from 'react'
import { Outlet } from 'react-router-dom'

const Section = () => {
  return (
    <div className='sec1'>
      <Outlet/>
    </div>
  )
}

export default Section