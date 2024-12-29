import React, { useContext, useEffect, useState } from 'react'
import EmployeeDashBoard from './Component/Dashboard/EmployeeDashboard'
import Login from './Component/Auth/Login'
import AdminDashBoard from './Component/Dashboard/AdminDashBoard'
import { getLocalStorage, SetLocalStorage } from './Utils/LocalStorage'
import { AuthContext } from './Context/AuthProvider'


const App = () => {

  const [userData,setuserData] = useContext(AuthContext)
  // console.log(userData)
 
  const [user,setuser] = useState('')
  const [logInUser,setlogInUser]=useState('')
  useEffect(()=>{
    const logInUser = localStorage.getItem('logInUser')

    if(logInUser){
     const userData = JSON.parse(logInUser)
     setuser(userData.role)
     setlogInUser(userData.data)
    }
  },[])

  const handleLogin=(email,paasword)=>{
    if(email=='admin@example.com' && paasword =='123'){
      setuser('admin')
      localStorage.setItem('logInUser',JSON.stringify({role:'admin'}))
    }else if(userData){
      const employee = userData.find((e)=> email == e.email && paasword==e.password)
      if(employee ){

        setuser(' Employee')
        setlogInUser(employee)
        localStorage.setItem('logInUser',JSON.stringify({role:'Employee',data:employee}))
      }
    }
    else{
      alert('inavalid Credential')
    }
  }
   
  return (
    <>
    {!user ? <Login handleLogin={handleLogin}/>:''}
    {user == 'admin' ? <AdminDashBoard changeUser={setuser}/>: <EmployeeDashBoard data={logInUser} changeUser={setuser}/>}
    </>
  )
}

export default App