import React from 'react'

const Card = ({elm}) => {
  let {title,id,thumbnail}=elm
  return (
    <>
    <div className="card my-4" style={{width: "18rem"}}>
  <div className="card-body">
    <h5 className="card-title">My User ID: {title}</h5>
    <p>My ID: {id}</p>
    <img src={thumbnail} alt="" />
    <a href="#" className="btn btn-danger">Delete</a>
  </div>
</div>
    </>
  )
}

export default Card