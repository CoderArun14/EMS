// import React, { createContext, useContext, useState } from 'react'
// import { storeProvide } from './Store'


// const Secone = () => {
// let {handlernewitem} = useContext(storeProvide)

//   let [Todotask,settodotask] = useState('')
//   let [Tododate,settododate] = useState('')


//   const Addnewitem = ()=>{
    
//     handlernewitem(Todotask,Tododate)
//       settodotask("")
//       settododate("")
//   }
//   return (
//     <>
//     < div className='row'>
//     <div className='col-md-5'>
//     <input type="text" placeholder='Enter Todo here' value={Todotask} className='form-control  p-3 fs-4 text-secondary fw-bold' onChange={(e)=>settodotask(e.target.value)} />
//     </div>
//     <div className='col-md-4'>
//     <input type="date" placeholder='Enter Todo here' value={Tododate} className='form-control  p-3 fs-4 text-secondary fw-bold' onChange={(e)=>settododate(e.target.value)}/>
//     </div>
//     <div className='col-md-3'>
//     <button className='btn border px-5  py-3 fs-4 fw-bold bg-success text-light' onClick={Addnewitem}>Add</button>
//     </div>
//     </div>
    
//     </>
//   )
// }

// export default Secone

// import React, { useRef } from 'react'

// function Secone({Addnewitem}) {

// let newdate = useRef()
// let newtask = useRef()

// const handelAdd = ()=>{
//  Addnewitem(newtask.current.value,newdate.current.value)
  
// }
  
//   return (
//     <>
//     <div className="row my-4 ">
//       <div className="col-md-5">
//         <input type="text" placeholder='Enter Todo here' ref={newtask} className='form-control p-3 fs-3 text-center' />
//       </div>
//       <div className="col-md-5">
//         <input type="date" placeholder='Enter Todo Date' ref={newdate} className='form-control p-3 fs-3  text-center' />
//       </div>
//       <div className="col-md-2">
//       <button className='btn bg-success text-light p-3 fs-3' onClick={handelAdd}>Add Task</button>
//       </div>
//     </div>
//     </>
//   )
// }

// export default Secone


