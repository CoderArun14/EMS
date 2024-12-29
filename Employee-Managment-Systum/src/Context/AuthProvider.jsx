import React, { createContext, useEffect, useState} from 'react'
import { getLocalStorage, SetLocalStorage } from '../Utils/LocalStorage'

export const AuthContext = createContext()
const AuthProvider = ({children}) => {
// localStorage.clear()

const[userData,setuserData] = useState([])

useEffect(()=>{
  SetLocalStorage()
  // const{employees} = getLocalStorage()
  setuserData(employees)
  
},[])
console.log(userData)

  return (
    <>
    <AuthContext.Provider  value={[userData,setuserData]}>
      {children}
    </AuthContext.Provider>
    </>
  )
}

export default AuthProvider