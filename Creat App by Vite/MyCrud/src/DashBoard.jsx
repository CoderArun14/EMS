import React, { useContext, useEffect } from 'react'
import ModalForm from './ModalForm'
import { StoreProvider } from './Store/Store'
import axios from 'axios'

const DashBoard = () => {
  let{newData,getData}=useContext(StoreProvider)
  useEffect(()=>{
    getData()
  },[])
  return (
    <>
     <ModalForm/>
    <div  className='container'>
    <table className="table text-center">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Address</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {newData.map((elm,ind)=><tr key={ind}>
      <th scope="row">{elm.id}</th>
      <td>{elm.name}</td>
      <td>{elm.email}</td>
      <td>{elm.address}</td>
      <td>
        <button
        className='btn mx-1 btn-success'>Edit</button>
        <button className='btn mx-1 btn-danger' >Delete</button>
        <button className='btn mx-1 btn-primary'>Read</button>
      </td>
    </tr>)}
  </tbody>
</table>
    </div>
    </>
  )
}

export default DashBoard