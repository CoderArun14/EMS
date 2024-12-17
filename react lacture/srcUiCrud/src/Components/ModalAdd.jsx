import React, { useContext } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { DataProvider } from "../Store/Store";

const ModalAdd = () => {
  let { handleClose, show } = useContext(DataProvider);
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
                <div class="form-floating mb-3">
                  <input
                    type="text"
                    class="form-control"
                    id="floatingInput"
                    placeholder="enter Your Name"
                  />
                  <label for="floatingInput">Name</label>
                </div>
                <div class="form-floating mb-3">
                  <input
                    type="email"
                    class="form-control"
                    id="floatingemail"
                    placeholder="Enter Your Email"
                  />
                  <label for="floatingemail">Email</label>
                </div>
                <div class="form-floating mb-3">
                  <input
                    type="text"
                    class="form-control"
                    id="floatinaddress"
                    placeholder="Enter Your Address"
                  />
                  <label for="floatinaddress">Address</label>
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
