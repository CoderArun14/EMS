// import React, { useEffect, useState } from "react";
// import Nav from "./component/Nav";
// import { Outlet, useNavigate } from "react-router-dom";
// import { StoreProvider } from "./Store/Store";
// import axios from "axios";

// const App = () => {
//   let [newData, setNewdata] = useState([]);
//   let [formType,setformType] = useState("Create")
//   let [handleId,sethandleId] = useState()
//   // const navigate = useNavigate()
//   let [userData, setuserData] = useState({
//     name: "",
//     email: "",
//     address: "",
//   });

//   //  function Fetchapi(){
//   //   fetch("https://67409db7d0b59228b7f0b79f.mockapi.io/crud/CrudApp").then((data)=> data.json()).then((data)=> setNewdata(data) )
//   //  }

//   const getData = () => {
//     axios
//       .get("https://67409db7d0b59228b7f0b79f.mockapi.io/crud/CrudApp")
//       .then((data) => setNewdata(data.data));
//   };
//   const handleAdd = () => {
//     setformType("Create")
//     axios
//       .post(
//         "https://67409db7d0b59228b7f0b79f.mockapi.io/crud/CrudApp",
//         userData
//       )
//       .then(() => getData());
//   };

//   const handleDelete = (id) => {
//     axios
//       .delete(
//         "https://67409db7d0b59228b7f0b79f.mockapi.io/crud/CrudApp" + `/${id}`
//       )
//       .then(() => getData());
//   };

//   const getSingleData = (id)=>{
//     sethandleId(id)
//     setformType("Update")
//     handleShow()
//     axios.get("https://67409db7d0b59228b7f0b79f.mockapi.io/crud/CrudApp"+ `/${id}`).then((user)=>setuserData(user.data))
//   }
//   const handleUpdate = ()=>{
//     console.log(handleId,userData)

//     axios.put("https://67409db7d0b59228b7f0b79f.mockapi.io/crud/CrudApp"+ `/${handleId}`,userData).then(
//       ()=> getData()
//     )
//     console.log(handleId)

//   }
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   return (
//     <>
//       <StoreProvider.Provider
//         value={{
//           newData,
//           setNewdata,
//           show,
//           handleClose,
//           handleShow,
//           userData,
//           setuserData,
//           getData,
//           handleAdd,
//           handleDelete,
//           handleUpdate,
//           formType,
//           getSingleData
//         }}
//       >
//         <Nav />
//         <Outlet />
//       </StoreProvider.Provider>
//     </>
//   );
// };

// export default App;


import React, { useEffect, useState } from 'react'
import Nav from './component/Nav'
import { Outlet } from 'react-router-dom'
import {StoreProvider} from './Store/Store'
import axios

from 'axios'
const App = () => {

  let[newData,setNewdata] = useState([])
  let [userData,setuserData] = useState({
    name:"",
    email:"",
    address:"",
  })

  

  let Fetch = ()=>{
    fetch("https://67409db7d0b59228b7f0b79f.mockapi.io/crud/CrudAPP").then((data)=> data.json()).then((data)=>setNewdata(data))
  }
  useEffect(()=>{
    Fetch()
  },[])

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAdd=()=>{
    axios
          .post(
            "https://67409db7d0b59228b7f0b79f.mockapi.io/crud/CrudApp",
            userData
          )
          .then(() => getData());
    
  }
  return (
    <>
    <StoreProvider.Provider value={{newData,show,setShow,handleShow,handleClose,userData,setuserData,handleAdd}}>
    <Nav/>
    <Outlet/>
    </StoreProvider.Provider>
    </>
  )
}

export default App