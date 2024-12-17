import React from 'react'

const Text = ({data}) => {
  return (
    <>
      <div className="col-4">
        <h4>{data.textN}</h4>
        <p>{data.textT}</p>
      </div>
    </>
  )
}

export default Text