import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar'
import { Outlet } from 'react-router-dom'
import { DataProvider } from './Store/Store'

const App = () => {
  let [myData,setmyData] = useState([])
    function dataFetch(){
        fetch("https://6740497fd0b59228b7ef6578.mockapi.io/crud/crud").then((data)=> data.json()).then((data)=> setmyData(data)
        )
    }
    useEffect(()=>{
        dataFetch()

    },[])

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <DataProvider.Provider value={{myData,handleClose,handleShow,show,setShow}}>

    <Navbar/>
    
    <Outlet/>
    </DataProvider.Provider>
    </>
  )
}

export default App