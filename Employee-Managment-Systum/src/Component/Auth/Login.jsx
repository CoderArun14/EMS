
import React, { useState } from 'react'

const Login = ({handleLogin}) => {
  let[email,setemail] = useState("")
  let[password,setpassword] =useState("")

  const handleSubmit=(e)=>{
    e.preventDefault()
    handleLogin(email,password)
    setemail('')
    setpassword('')
  }
  return (
    <>
    <div className='login d-flex justify-content-center align-items-center '>
      <div className='border bg-primary rounded'>
        <form className='d-flex flex-column justify-content-center align-items-center p-5' onSubmit={(e)=>{
          handleSubmit(e)
        }}>
          <input required type="email" value={email} placeholder='Enter Your Email' className='fs-5 rounded-5 border-1 px-3 border-danger text-center my-3 text-secondary' onChange={(e)=>{
            setemail(e.target.value)
          }}/>
          <input required type="password" placeholder='Enter Your Password'className='fs-5 px-3 rounded-5 border-1 border-danger text-center my-3 text-secondary' value={password} onChange={(e)=>{
            setpassword(e.target.value)
          }}/>
          <button className='btn bg-success rounded-4'>Submit</button>
        </form>
      </div>
    </div>
    </>
  )
}

export default Login