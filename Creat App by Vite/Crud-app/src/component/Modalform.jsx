import React, { useContext } from "react";
import { Modal } from "react-bootstrap";
import { StoreProvider } from "../Store/Store";
import { Button } from "react-bootstrap";

const Modalform = () => {
  let { show, handleClose, userData, setuserData, handleAdd,formType,handleUpdate } =
    useContext(StoreProvider);

  const handleputvalue = (e) => {
    setuserData({ ...userData, [e.target.name]: e.target.value });
    // console.log(userData);
  };
  const createData = () => {
    if(formType==="Create"){
      handleAdd();

    }else{
      handleUpdate()
    }
    handleClose();
  };
  let { name, email, address } = userData;

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{formType} Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label fs-4">
                Enter Your Name
              </label>
              <input
                name="name"
                value={name}
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={handleputvalue}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label fs-4">
                Enter Your Email address
              </label>
              <input
                name="email"
                value={email}
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={handleputvalue}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label fs-4">
                Enter Your Address
              </label>
              <input
                name="address"
                value={address}
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={handleputvalue}
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={createData}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Modalform;


