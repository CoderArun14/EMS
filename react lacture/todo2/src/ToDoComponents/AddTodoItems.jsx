import React from 'react'

const AddTodoItems = () => {
  return (
    <>
    <div className="row">
        <div className="col-5">
            <input type="text" className='form-control' />
        </div>
        <div className="col-5">
            <input type="date" className='form-control' />
        </div>
        <div className="col-2">
            <button className='btn btn-danger px-4'>Add</button>
        </div>
    </div>
    </>
  )
}

export default AddTodoItems