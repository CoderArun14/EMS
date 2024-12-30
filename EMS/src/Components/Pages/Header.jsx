import React from 'react'
import { setLocalStorage } from '../Utils/LocalStorage'

const Header = ({employeeData,setuser}) => {
  // console.log(employeeData)

 const handleLogout=()=>{
  setuser('')
    localStorage.setItem('logInUser','')
  }
  return (
    <>
    <div className=' Header d-flex justify-content-between p-5 text-light'>
    <div>
      <h5>Hello</h5>
      <h3>{employeeData.name} 👋</h3>
    </div>
    <div>
      <button  className='btn btn-danger' onClick={handleLogout}>Logout</button>
    </div>
    </div>
    </>
  )
}

export default Header