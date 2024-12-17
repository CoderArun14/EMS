import React from 'react'

const Text = ({data}) => {
  return (
    <>
    
    <div className='col-4'>
        <h2>{data.textN}</h2>
        <p>{data.textT}</p>
    </div>
   
    </>
  )
}

export default Text