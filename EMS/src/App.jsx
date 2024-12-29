import React, { useEffect, useState } from 'react'
import Login from './Components/Auth/Login'
import EmployeeDashBoard from './Components/DashBoard/EmployeeDashBoard'
import AdminDashBoard from './Components/DashBoard/AdminDashBoard'
import { getLocalStorage, setLocalStorage } from './Components/Utils/LocalStorage'
import { useContext } from 'react'
import { AuthContext } from './Components/Context/AuthProvider'

const App = () => {
  const [userData,setuserData] = useContext(AuthContext)
  

const  [user,setuser] = useState("")
const [logInUser,setlogInUser] = useState('')

    useEffect(()=>{
      const logInUser = localStorage.getItem('logInUser')
      if(logInUser){
        const userData = JSON.parse(logInUser)
        setuser(userData.role)
        setlogInUser(userData.data)
      }

    },[userData])

    const handleLogin =(email,password)=>{
      if(userData){
        const admin = userData.admin.find((e)=> email==e.email && password==e.password)
        if(admin){
            setuser('admin')
            setlogInUser(admin)
          localStorage.setItem('logInUser',JSON.stringify({role:'admin',data:admin}))
      }else if(userData){
        const employee = userData.employees.find((e)=> email==e.email && password==e.password)
        if(employee){
          setuser('employee')
          setlogInUser(employee) 
          localStorage.setItem('logInUser',JSON.stringify({role:'employee',data:employee}))
        }else {
          alert("invelid Creadencial")
        }
      }
    }
  }
  return (
    <>
    <div>
      {!user  ? <Login handleLogin={handleLogin}/>:''}
      {user==='admin' ?<AdminDashBoard employeeData={logInUser} setuser={setuser}/>:''}
      {user==='employee' ?<EmployeeDashBoard employeeData={logInUser} setuser={setuser}/>:''}
    </div>
    </>
  )
}

export default App