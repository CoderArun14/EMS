 import { createContext, useReducer, useState } from "react";
import axios from "axios";

export const StoreProvider = createContext([]) 
const reducerFun = (curentData,action)=>{
  let newdata = curentData;
    if(action.type=="AddData"){
      newdata = [...curentData,action.payload]
      
    }else if(action.type=="DELETEDATA"){
      newdata = curentData.filter(
        (elm,id)=> id!=action.payload.id
      )
    }
  return newdata
}

import React from 'react'
import { act } from "react-dom/test-utils";

const Store = ({children}) => {
  let[data,dispatch] =    useReducer(reducerFun,[{name:"rahul",age:29,address:"agra"}])

  const  handleAdddata = ()=>{
    let newItem = {
      type:"AddData",
      payload:{
        name:"Karishma",
        age:45,
        address:"Sikandra"
      }
    }
    dispatch(newItem)
  }
  const handleDeletedata = (id)=>{
    let afterDeletItem = {
      type:"DELETEDATA",
      payload:{
        id
      }

    }
    dispatch(afterDeletItem)
  }
  let [newData, setNewdata] = useState([]);
  let [formType,setformType] = useState("Create")
  let [handleId,sethandleId] = useState()
  // const navigate = useNavigate()
  let [userData, setuserData] = useState({
    name: "",
    email: "",
    address: "",
  });

  //  function Fetchapi(){
  //   fetch("https://67409db7d0b59228b7f0b79f.mockapi.io/crud/CrudApp").then((data)=> data.json()).then((data)=> setNewdata(data) )
  //  }

  const getData = () => {
    axios
      .get("https://67409db7d0b59228b7f0b79f.mockapi.io/crud/CrudAPP")
      .then((data) => setNewdata(data.data));
  };
  const handleAdd = () => {
    setformType("Create")
    axios
      .post(
        "https://67409db7d0b59228b7f0b79f.mockapi.io/crud/CrudAPP",
        userData
      )
      .then(() => getData());
  };

  const handleDelete = (id) => {
    axios
      .delete(
        "https://67409db7d0b59228b7f0b79f.mockapi.io/crud/CrudAPP" + `/${id}`
      )
      .then(() => getData());
  };

  const getSingleData = (id)=>{
    sethandleId(id)
    setformType("Update")
    handleShow()
    axios.get("https://67409db7d0b59228b7f0b79f.mockapi.io/crud/CrudAPP"+ `/${id}`).then((user)=>setuserData(user.data))
  }
  const handleUpdate = ()=>{
    console.log(handleId,userData)

    axios.put("https://67409db7d0b59228b7f0b79f.mockapi.io/crud/CrudAPP"+ `/${handleId}`,userData).then(
      ()=> getData()
    )
    console.log(handleId)

  }
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <StoreProvider.Provider
        value={{
          newData,
          setNewdata,
          show,
          handleClose,
          handleShow,
          userData,
          setuserData,
          getData,
          handleAdd,
          handleDelete,
          handleUpdate,
          formType,
          getSingleData,
          data,
          handleAdddata,
          handleDeletedata
        }}
      >
    {children}
    </StoreProvider.Provider>
    </>
  )
}

export default Store