import React, { useContext, useRef, useState } from 'react'
import { StoreProvide } from '../Store/Store'

const AddTodoItems = () => {
 let {handleAdd}=  useContext(StoreProvide)
  // let [work,setWork] =useState("")
  // let [myDate,setMyDate] =useState("")
  let myWork = useRef()
  let myDate = useRef()
  const addTodo= ()=>{
    handleAdd(myWork.current.value,myDate.current.value)
    myWork.current.value=""
    myDate.current.value=""
    // console.log(work)
    // console.log(myDate)
    // if(work==" "){

    // }else{
    //   // handleAdd(work,myDate)
    //   setWork(" ")
    //   setMyDate(" ")
    // }
  }
  return (
    <>
    <div className="row">
        <div className="col-5">
            <input  
              // onChange={(e)=>setWork(e.target.value)}
            // type="text" value={work} className='form-control' />
            type="text" ref={myWork}  className='form-control' />
        </div>
        <div className="col-5">
            <input  
              // onChange={(e)=>setMyDate(e.target.value)}
            // type="date" value={myDate} className='form-control' />
            type="date" ref={myDate} className='form-control' />
        </div>
        <div className="col-2">
            <button
            onClick={addTodo}
            className='btn btn-success px-4'>Add</button>
        </div>
    </div>
    </>
  )
}

export default AddTodoItems