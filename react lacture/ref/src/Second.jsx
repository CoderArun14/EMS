import React from 'react'

const Second = ({time, postCount,des, color}) => {
  return (
    <>
    <div >
        <h4 className={`${color}`}>{time}</h4>
        <h2>Post {postCount}</h2>
        <p>{des}</p>
    </div>
    </>
  )
}

export default Second