import React, { useContext, useEffect, useState } from 'react'
import { DataProvider } from '../Store/Store'
import ModalAdd from './ModalAdd'

const Desboard = () => {
    let {myData} = useContext(DataProvider)

  return (
    <>
    <ModalAdd/>
    <div className="container">
    <table className="table text-center">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Adress</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {myData.map(user=><tr>
      <th scope="row">{user.id}</th>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.address}</td>
      <td>
        <button  className=' mx-1 btn btn-success'>Edit</button>
        <button  className=' mx-1 btn btn-danger'>Delete</button>
        <button  className=' mx-1 btn btn-warning'>Read</button>
      </td>
    </tr>)}
    
  </tbody>
</table>
    </div>
    </>
  )
}

export default Desboard