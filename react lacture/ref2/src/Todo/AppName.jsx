import React, { useState } from 'react'

const AppName = () => {
  let [count,setCount] = useState(0)
  let increse = ()=>{
      setCount(++count)
  }
  return (
    <>
    {/* <div className="row" style={{backgroundColor:"gold"}}> */}
    <div className="row shavi" >
      <div className="col-6 mx-auto text-center">
      <h1>{count}</h1>
    <button
    // onClick={()=>count<10 ? setCount(count + 1):count}
    onClick={increse}
    className='btn btn-lg btn-success'>inc</button>
    <button
    onClick={()=>count>0 ? setCount(count - 1):count}
    className='btn btn-lg btn-success'>dec</button>
      </div>
    </div>
    
    </>
  )
}

export default AppName