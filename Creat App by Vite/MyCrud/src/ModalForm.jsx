import React, { useContext } from 'react'
import {StoreProvider }from "./Store/Store"
import { Modal,Button } from 'react-bootstrap'

const ModalForm = () => {
  let {show,handleClose,userValue,newuserValue,handleADD} = useContext(StoreProvider)

  const handleputvalue=(e)=>{
      newuserValue({...userValue,[e.target.name]: e.target.value})
      console.log(userValue)
  }
  return (
    <>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Enter Name</label>
    <input type="text" name='name' onChange={handleputvalue} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name"/>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Enter Email</label>
    <input type="email" name='email' onChange={handleputvalue} className="form-control" id="exampleInputPassword1" placeholder="Enter Email"/>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Enter Address</label>
    <input type="text" name='address' onChange={handleputvalue} className="form-control" id="exampleInputPassword1" placeholder="Enter Address"/>
  </div>
</form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleADD}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ModalForm