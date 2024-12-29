import React, { useContext } from 'react'
import { AuthContext } from '../../Context/AuthProvider'

const AllTask = () => {

  const [userData,setuserData] = useContext(AuthContext)
  // console.log(userData)
  return (
    <>
    <div className=' text-center  overflow-hidden bg-dark '>
    <div className='d-flex justify-content-between rounded bg-success mt-2 '>
                  <h5 className='col-md-2'>Employee Name</h5>
                  <h5 className='col-md-2'>New Task</h5>
                  <h5 className='col-md-2'>Active Task</h5>
                  <h5 className='col-md-2'>Completed</h5>
                  <h5 className='col-md-2'>Failed</h5>
                 </div>
        
     <div style={{backgroundColor:'rgb(40, 32, 32)', height:'100px' , overflow:'auto'}} className='AllTask '>
     {userData.map((elm,ind)=>{
        return   <div key={ind} className='d-flex justify-content-between rounded bg-success text-white mt-2 '>
                  <h5 className='col-md-2'>{elm.firstname}</h5>
                  <h5 className='col-md-2'>{elm.taskNumbers.Active}</h5>
                  <h5 className='col-md-2'>{elm.taskNumbers.NewTask}</h5>
                  <h5 className='col-md-2'>{elm.taskNumbers.Completed}</h5>
                  <h5 className='col-md-3 text-center '>{elm.taskNumbers.Failed}</h5>
                 </div>
        
      })}
     </div>
     
    </div>
    </>
  )
}

export default AllTask