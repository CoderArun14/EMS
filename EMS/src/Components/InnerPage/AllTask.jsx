import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthProvider'


const AllTask = () => {

   const [userData,setuserData] = useContext(AuthContext)
  //  console.log(userData)
  
  return (
    <>
    <div className='Alltask  rounded text-center'>
    <div className='d-flex  bg-primary justify-content-center align-items-center ' >
      <h6 className='col-md-4'>Employee Name</h6>
      <h6 className='col-md-2'>New Task</h6>
      <h6 className='col-md-2'>Active Task</h6>
      <h6 className='col-md-2'>Completed Task</h6>
      <h6 className='col-md-2'>Failed Task</h6>
    </div>
    {userData.employees.map((elm,ind)=>{

       
return <div className='d-flex justify-content-center bg-secondary  mt-1 align-items-center' key={ind}>
      <h6 className='col-md-4'>{elm.name}</h6>
      <h6 className='col-md-2'>{elm.NewTask}</h6>
      <h6 className='col-md-2'>{elm.ActiveTask}</h6>
      <h6 className='col-md-2'>{elm.Completed}</h6>
      <h6 className='col-md-2'>{elm.Failed}</h6>
    </div>
    })}
   
    </div>
    </>
  )
}

export default AllTask