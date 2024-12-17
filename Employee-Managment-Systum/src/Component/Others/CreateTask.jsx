import React from 'react'

const CreateTask = () => {
  return (
    <>
    <div className='d-flex justify-content-center align-item-center'  style={{height:'60vh', backgroundColor:'rgb(27, 25, 25)',}}>
     <form className="d-flex justify-content-between flex-wrap   text-white ">
            <div className=""style={{width:'40vw'}}>
              <div className="mt-3">
                <h6>Task Title</h6>
                <input type="text" placeholder="Make a UI design"  className="rounded border-0 col-md-6 py-1 text-white " style={{fontSize:'15px',backgroundColor:'rgb(40, 32, 32)', fontSize:'15px'}}/>
              </div>
              <div className="mt-3">
                <h6>Date</h6>
                <input type="date" name="" id=""   className="rounded border-0 col-md-6 py-1 text-white" style={{fontSize:'15px',backgroundColor:'rgb(40, 32, 32)', fontSize:'15px'}}/>
              </div>
              <div className="mt-3">
                <h6>Asign to</h6>
                <input type="text" placeholder="Employee Name"className="rounded border-0 col-md-6 py-1 text-white" style={{fontSize:'15px',backgroundColor:'rgb(40, 32, 32)', fontSize:'15px'}} />
              </div>
              <div className="mt-3">
                <h6>Category</h6>
                <input type="text" placeholder="Design ,Dev ,Etc"className="rounded border-0 col-md-6 py-1 text-white" style={{fontSize:'15px',backgroundColor:'rgb(40, 32, 32)', fontSize:'15px'}} />
              </div>
            </div>
            <div className="description d-flex flex-column mt-3" style={{width:'50vw'}}>
              <h6>Description</h6>
              <textarea name="" id=""className="rounded mb-1 text-white p-2" style={{width:'40vw',height:'40vh', backgroundColor:'rgb(40, 32, 32)', fontSize:'15px'}}></textarea>
              <button className="btn bg-info m-0 p-2 rounded-5"  style={{width:'40vw'}}>Create Task</button>
            </div>
          </form>
          </div>
    </>
  )
}

export default CreateTask