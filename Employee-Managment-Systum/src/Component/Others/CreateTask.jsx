import React, { useState,useEffect,useContext } from 'react'
import { AuthContext } from '../../Context/AuthProvider'

const CreateTask = () => {
 const [userData,setuserData] = useContext(AuthContext)
  const [taskTitle,settaskTitle] = useState('')
  const [taskDate,settaskDate] = useState('')
  const [taskAsign,settaskAsign] = useState('')
  const [taskCetegory,settaskCetegory] = useState('')
  const [taskDescrip,settaskDescrip] = useState('')
 
const [Ap, setAp] = useState({});

const submitHandler = (e) => {
  e.preventDefault();
  const data = {
    TaskTitle:taskTitle,
    TaskDate:taskDate,
    Category:taskCetegory,
    TaskDescription:taskDescrip,
    taskAsign,
    Active: false,
    NewTask: true,
    Failed: false,
    Completed: false,
  };
  setAp(data);

};


useEffect(() => {

  const data = userData
 console.log(data)
  userData.map((elm)=>{
    if(taskAsign==elm.firstname){
      elm.tasks.push(Ap)
      
      console.log(elm)

    }
  })
  console.log(setuserData(data))
  console.log(data)
  settaskAsign('')
  settaskDate('')
  settaskCetegory('')
  settaskDescrip('')
  settaskTitle('')
}, [Ap]);

  return (
    <>
    <div className='d-flex justify-content-center align-item-center'  style={{height:'60vh', backgroundColor:'rgb(27, 25, 25)',}}>
     <form className="d-flex justify-content-between flex-wrap   text-white " onSubmit={(e)=>submitHandler(e)}>
            <div className=""style={{width:'40vw'}}>
              <div className="mt-3">
                <h6>Task Title</h6>
                <input type="text" placeholder="Make a UI design"  className="rounded border-0 col-md-6 py-1 text-white " style={{fontSize:'15px',backgroundColor:'rgb(40, 32, 32)', fontSize:'15px'}} value={taskTitle} onChange={(e)=>{settaskTitle(e.target.value)}}/>
              </div>
              <div className="mt-3">
                <h6>Date</h6>
                <input type="date" name="" id=""   className="rounded border-0 col-md-6 py-1 text-white" style={{fontSize:'15px',backgroundColor:'rgb(40, 32, 32)', fontSize:'15px'}} value={taskDate} onChange={(e)=>{settaskDate(e.target.value)}}/>
              </div>
              <div className="mt-3">
                <h6>Asign to</h6>
                <input type="text" placeholder="Employee Name"className="rounded border-0 col-md-6 py-1 text-white" style={{fontSize:'15px',backgroundColor:'rgb(40, 32, 32)', fontSize:'15px'}} value={taskAsign} onChange={(e)=>{settaskAsign(e.target.value)}} />
              </div>
              <div className="mt-3">
                <h6>Category</h6>
                <input type="text" placeholder="Design ,Dev ,Etc"className="rounded border-0 col-md-6 py-1 text-white" style={{fontSize:'15px',backgroundColor:'rgb(40, 32, 32)', fontSize:'15px'}} value={taskCetegory} onChange={(e)=>{settaskCetegory(e.target.value)}} />
              </div>
            </div>
            <div className="description d-flex flex-column mt-3" style={{width:'50vw'}}>
              <h6>Description</h6>
              <textarea name="" id=""className="rounded mb-1 text-white p-2" style={{width:'40vw',height:'40vh', backgroundColor:'rgb(40, 32, 32)', fontSize:'15px'}} value={taskDescrip} onChange={(e)=>{settaskDescrip(e.target.value)}}></textarea>
              <button className="btn bg-info m-0 p-2 rounded-5"  style={{width:'40vw'}}>Create Task</button>
            </div>
          </form>
          </div>
    </>
  )
}

export default CreateTask