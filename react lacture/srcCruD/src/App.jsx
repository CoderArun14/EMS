import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar'
import { Outlet } from 'react-router-dom'
import { DataProvider } from './Store/Store'
import axios from 'axios'

const App = () => {
  let [myData,setmyData] = useState([])
  let [userData,setUserData] = useState({
    name:"",
    email:"",
    address:""
  })
    // function dataFetch(){
    //     fetch("https://6740497fd0b59228b7ef6578.mockapi.io/crud/crud").then((data)=> data.json()).then((data)=> setmyData(data)
    //     )
    // }
   
    const getData = ()=>{
       axios.get("https://6740497fd0b59228b7ef6578.mockapi.io/crud/crud").then((data)=> (setmyData(data.data)))
    

    }
    const HandleAddData = ()=>{
      axios.post("https://6740497fd0b59228b7ef6578.mockapi.io/crud/crud",userData).then(()=> getData())
    }
    
    const handleDelete = (id)=>{
      axios.delete("https://6740497fd0b59228b7ef6578.mockapi.io/crud/crud"+`/${id}`).then(()=> getData())
      
    }
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <DataProvider.Provider value={{myData,handleClose,handleShow,show,setShow,userData,setUserData,getData,HandleAddData,handleDelete}}>

    <Navbar/>
    
    <Outlet/>
    </DataProvider.Provider>
    </>
  )
}

export default App