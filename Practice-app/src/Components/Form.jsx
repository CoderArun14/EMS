import React, { useEffect, useState } from 'react'
import './Form.css'

const Form = () => {
  const data = {name:"",email:"",password:""}
  let[inputdata, setinputData] =useState(data)
  let [flag,setflag] = useState(false)
  useEffect(()=>{
    console.log("Register")
  },[flag])

  function handledata(e){
      setinputData({...inputdata,[e.target.name]:e.target.value})
      
  }
  function handleSubmit(e){
      if(!inputdata.name || !inputdata.email || !inputdata.password){
        alert("All Fields are Mendatory")
      }else{
        setflag(true)
      }
  }
  return (
    <>
    
    <form onSubmit={handleSubmit}>
    <pre>{(flag)? <p>Hello {inputdata.name}, you have register seccusfully</p>:""}</pre>
      <div className='container'>
        <div className='header'>
        <h1>Registration Form</h1>
        </div>
        <div className='input-box'>
          <input type="text" name='name' value={inputdata.name} placeholder='Enter Your Name' onChange={handledata}/>
        </div>
        <div className='input-box'>
          <input type="Email" name='email' value={inputdata.email} placeholder='Enter Your Email' onChange={handledata}/>
        </div>
        <div className='input-box'>
          <input type="Password" name='password' value={inputdata.password} placeholder='Enter Your Password'onChange={handledata} />
        </div>
        <div className='input-box'>
         <button type='submit'>Submit</button>
        </div>
      </div>
    </form>
    </>
  )
}

export default Form