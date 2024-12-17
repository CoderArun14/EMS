import React, { useContext } from 'react'
import { StoreProvider } from '../Store/Store'

const Home = () => {
  let {data,handleAdddata,handleDeletedata} = useContext(StoreProvider)
  return (
    <div className='fs-4 fw-bold text-success '>
    <h1 className='text-center'>  Welcome To Crud App </h1>
    <button className='btn btn-success' onClick={handleAdddata}>submit</button>
      {data.map((elm,id)=><div className='d-flex justify-content-evenly'><p>{elm.name}</p>
        <p>{elm.age}</p>
        <p>{elm.address}</p>
        <p><button onClick={()=>handleDeletedata(id)} className='btn btn-danger'>del</button></p>
      </div>)}
      </div>
  )
}

export default Home