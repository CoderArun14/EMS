// // import React, { useContext } from 'react'
// // import { storeProvide } from './Store'

import { Button } from "bootstrap"
import { storeProvide } from "./Store"

// // const Sectwo = ({}) => {
// //   let {Todoitem,Deteleitem} = useContext(storeProvide)
// //   return (
// //     <>
// //     <div className='row mt-4'>
// //       {Todoitem.map((info,ind)=> <div key={ind} className="row my-2">
// //                 <div className="col-5 fs-5 ">{info.work}</div>
// //                 <div className="col-4 fs-5">{info.myDate}</div>
// //                 <div className="col-3  text-center"><button className="btn btn-danger p-2 fs-3 fw-3" onClick={()=>Deteleitem(ind)}>Delete</button></div>
// //             </div> )}
// //     </div>
    
// //     </>
// //   )
// // }

// // export default Sectwo


// import React, { useContext } from 'react'
// import { storeProvide } from './Store'

// function Sectwo({Tododata,Delete}) {
//   let Api = useContext(storeProvide)
//   return (
//     <>
//     {Api.map((elm,index)=><div key={index} className="row  my-4">
//       <div className="col-md-5  text-center text-secondary">
//         <h2>{elm.Work}</h2>
//       </div>
//       <div className="col-md-5  text-center text-secondary">
//         <h2>{elm.Date}</h2>
//       </div>
//       <div className="col-md-2">
//         <button className='btn bg-danger p-3 text-light fs-3' onClick={()=>Delete(index)}>Delete </button>
//       </div>
//     </div>)}
//     </>
//   )
// }

// export default Sectwo

import React, { useContext } from 'react'

function Sectwo() {
  let Api = useContext(storeProvide)
  return (
    <>
    {Api.map((elm,index)=><div className="row">
      <div className="col-md-5">{elm.Work}</div>
    <div className="col-md-5">{elm.Date}</div>
    <div className="col-md-2">
      <button className="btn p-2 bg-danger">Delete</button></div>
    </div>)}

    </>
  )
}

export default Sectwo