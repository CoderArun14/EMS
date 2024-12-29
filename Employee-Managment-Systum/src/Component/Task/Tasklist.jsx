import React from 'react'
import AcceptTask from './AcceptTask'
import CompleteTask from './CompleteTask'
import Newtask from './Newtask'
import FailedTask from './FailedTask'

const Tasklist = ({data}) => {
  return (
    <>
    <div className='Tasklist'>
      {data?.tasks?.map((elm,ind)=>{
 
        if(elm.Active){
          return <AcceptTask key={ind} elm={elm}/>
        }if(elm.NewTask){
          return <Newtask key={ind} elm={elm} />
        }
        if(elm.Completed){
          return <CompleteTask key={ind} elm={elm}/>
        }if(elm.Failed){
          return <FailedTask key={ind} elm={elm}/>
        }
      })}
      {/* <div className=' item rounded bg-warning '></div> */}
      {/* <div className=' item rounded 'style={{backgroundColor:"pink"}}></div>
      <div className=' item rounded 'style={{backgroundColor:"blue"}}></div>
      <div className=' item rounded ' style={{backgroundColor:"white"}}></div>
      <div className=' item rounded 'style={{backgroundColor:"yellow"}}></div>
      <div className=' item rounded 'style={{backgroundColor:"nevy-blue"}}></div>
      <div className=' item rounded ' style={{backgroundColor:"red"}}></div>
      <div className=' item rounded ' style={{backgroundColor:"pink"}}></div> */}
    </div>
    </>
  )
}

export default Tasklist