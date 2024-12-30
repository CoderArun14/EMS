import { Button } from '@mui/material'
import React, { useState } from 'react'


const Login = ({handleLogin}) => {

  const[email,setemail]=useState('')
  const[password,setpassword]=useState('')
  
const handleSubmit=(e)=>{
  e.preventDefault()
    handleLogin(email,password)
    setemail('')
    setpassword('')
}
  
  return (
    <>
    <div className=' login row d-flex justify-content-center align-items-center' >
    <div className='col-md-4'>
    <form className='bg-secondary p-5 rounded' onSubmit={(e)=>handleSubmit(e)}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" placeholder='Enter Your Email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>setemail(e.target.value)} value={email}/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" placeholder='Enter Your Password' className="form-control" id="exampleInputPassword1" onChange={(e)=>setpassword(e.target.value)} value={password}/>
  </div>
  <div className='d-flex justify-content-center'>
  <Button variant="contained"  type="submit" className="btn btn-primary px-4 mt-3">Submit</Button>
  </div>
</form>
    </div>
    </div>
    
    </>
  )
}

export default Login