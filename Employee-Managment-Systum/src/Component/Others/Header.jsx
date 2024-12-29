import React, { useState } from 'react'

const Header = ({changeUser}) => {
  //  const   [userValue,setuserValue] = useState("")
  //     if(!data){
  //       setuserValue("Admin")
  //     }else{
  //       setuserValue(data.firstname)
  //     }
  const Logout = ()=>{
    changeUser('')
    localStorage.setItem('logInUser','')
  }
  return (
    <>
    <div className='d-flex justify-content-between p-4'  >
      <h5>Hello <br /> userValue 👋</h5>
      <button className=' btn bg-danger' onClick={Logout}>Log Out</button>
    </div>
    </>
  )
}

export default Header