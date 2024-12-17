import React, { useState } from 'react'

const AddTodoItems = ({handleAdd}) => {
  let [work,setWork] =useState("")
  let [myDate,setMyDate] =useState("")
  const addTodo= ()=>{
    // console.log(work)
    // console.log(myDate)
    if(work==" "){

    }else if(myDate==null){

    }else{
      handleAdd(work,myDate)
      setWork(" ")
      setMyDate(" ")
    }
  }
  return (
    <>
    <div className="row">
        <div className="col-5">
            <input  
              onChange={(e)=>setWork(e.target.value)}
            type="text" value={work} className='form-control' />
        </div>
        <div className="col-5">
            <input  
              onChange={(e)=>setMyDate(e.target.value)}
            type="date" value={myDate} className='form-control' />
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