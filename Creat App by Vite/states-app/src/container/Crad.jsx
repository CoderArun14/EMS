import React from 'react'

const Crad = ({ap,Delete}) => {
  let {thumbnail,title,description,id} = ap
  return (
    <>
    
    <div className ="card my-2 shadow text-center " style={{height:"500px"}} >
  <img src={thumbnail} className="card-img-top"  style={{height:"200px"}} alt="..."/>
  <div className ="card-body">
    <h6>{id}</h6>
    <h5 className ="card-title">{title}</h5>
    <p className ="card-text">{description}</p> 
    <button onClick={()=>Delete(id)}
          className="btn btn-primary">
            Delete Card
          </button>
  </div>
</div>
    </>
  )
}

export default Crad