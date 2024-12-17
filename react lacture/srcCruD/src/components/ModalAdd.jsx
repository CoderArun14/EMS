import React, { useContext } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { DataProvider } from "../Store/Store";

const ModalAdd = () => {
  let { handleClose, show ,userData,setUserData} = useContext(DataProvider);
  const handleformValue = (e)=>{
      setUserData({...userData,[e.target.name]:e.target.value})
      console.log(userData) 
  }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <div className="row">
              <div className="col- mx-auto">
                <div className="form-floating mb-3">
                  <input
                  name="name"
                  onChange={handleformValue}
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="enter Your Name"
                  />
                  <label htmlFor="floatingInput">Name</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                  name="email"
                  onChange={handleformValue}
                    type="email"
                    className="form-control"
                    id="floatingemail"
                    placeholder="Enter Your Email"
                  />
                  <label htmlFor="floatingemail">Email</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                  name="address"
                  onChange={handleformValue}
                    type="text"
                    className="form-control"
                    id="floatinaddress"
                    placeholder="Enter Your Address"
                  />
                  <label htmlFor="floatinaddress">Address</label>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          
          <Button variant="primary" onClick={handleClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalAdd;
