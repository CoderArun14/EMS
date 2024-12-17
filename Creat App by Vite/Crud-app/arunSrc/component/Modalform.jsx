// import React, { useContext } from "react";
// import { Modal } from "react-bootstrap";
// import { StoreProvider } from "../Store/Store";
// import { Button } from "react-bootstrap";

// const Modalform = () => {
//   let { show, handleClose, userData, setuserData, handleAdd,formType,handleUpdate } =
//     useContext(StoreProvider);

//   const handleputvalue = (e) => {
//     setuserData({ ...userData, [e.target.name]: e.target.value });
//     // console.log(userData);
//   };
//   const createData = () => {
//     if(formType==="Create"){
//       handleAdd();

//     }else{
//       handleUpdate()
//     }
//     handleClose();
//   };
//   let { name, email, address } = userData;

//   return (
//     <>
//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>{formType} Form</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <form>
//             <div classNameName="mb-3">
//               <label htmlFor="exampleInputEmail1" classNameName="form-label fs-4">
//                 Enter Your Name
//               </label>
//               <input
//                 name="name"
//                 value={name}
//                 type="text"
//                 classNameName="form-control"
//                 id="exampleInputEmail1"
//                 aria-describedby="emailHelp"
//                 onChange={handleputvalue}
//               />
//             </div>
//             <div classNameName="mb-3">
//               <label htmlFor="exampleInputEmail1" classNameName="form-label fs-4">
//                 Enter Your Email address
//               </label>
//               <input
//                 name="email"
//                 value={email}
//                 type="email"
//                 classNameName="form-control"
//                 id="exampleInputEmail1"
//                 aria-describedby="emailHelp"
//                 onChange={handleputvalue}
//               />
//             </div>
//             <div classNameName="mb-3">
//               <label htmlFor="exampleInputEmail1" classNameName="form-label fs-4">
//                 Enter Your Address
//               </label>
//               <input
//                 name="address"
//                 value={address}
//                 type="email"
//                 classNameName="form-control"
//                 id="exampleInputEmail1"
//                 aria-describedby="emailHelp"
//                 onChange={handleputvalue}
//               />
//             </div>
//           </form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="primary" onClick={createData}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// };

// export default Modalform;


import React, { useContext } from 'react'
import { StoreProvider } from '../Store/Store'
import { Modal } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

const Modalform = () => {

  let{show,handleClose,userData,setuserData,handleAdd} = useContext(StoreProvider)

  const handleputValue = (e)=>{
      setuserData({...userData,[e.target.name]:e.target.value})
  }
  const handleCreate = ()=>{
  handleAdd()
  handleClose()

  }
  return (
    <>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form action="/action_page.php">
  <div className="form-group">
    <label htmlFor="text">Name:</label>
    <input type="name" className="form-control" id="email" onChange={handleputValue}/>
  </div>
  <div className="form-group">
    <label htmlFor="eml">Email:</label>
    <input type="email" className="form-control" id="eml" onChange={handleputValue}/>
  </div>
  <div className="form-group">
    <label htmlFor="adr">Address:</label>
    <input type="text" className="form-control" id="adr" onChange={handleputValue}/>
  </div>
  
</form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCreate}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Modalform