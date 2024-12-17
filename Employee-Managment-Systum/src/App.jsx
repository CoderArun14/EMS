import React, { useEffect, useState } from 'react'
import EmployeeDashBoard from './Component/Dashboard/EmployeeDashboard'
import Login from './Component/Auth/Login'
import AdminDashBoard from './Component/Dashboard/AdminDashBoard'
import { getLocalStorage, SetLocalStorage } from './Utils/LocalStorage'


const App = () => {
  const [user,setuser] = useState(null)

  // useEffect(()=>{
  //   // SetLocalStorage()
  //   getLocalStorage()
  // },)
  return (
    <>
    {!user ? <Login/>:''}
   {/* <EmployeeDashBoard/> */}
   {/* <AdminDashBoard/> */}
    </>
  )
}

export default App