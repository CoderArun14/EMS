import React, { createContext ,useState} from 'react'
export const StoreProvider = createContext([])
import axios from 'axios'

const Store = ({children}) => {

  let[newData,setNewdata] = useState([])
  let [userValue,newuserValue] = useState({
    name:"",
    email:"",
    address:"",
  })
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const handleADD = ()=>{
    handleShow()
    axios.post("https://67409db7d0b59228b7f0b79f.mockapi.io/crud/crudAPP",userValue).then(()=>getData())

  } 
  const getData = () => {
    axios
      .get("https://67409db7d0b59228b7f0b79f.mockapi.io/crud/crudAPP")
      .then((data) => setNewdata(data.data));
  };
  return (
    <>
    <StoreProvider.Provider value={{show,handleShow,handleADD,handleClose,getData,newData,userValue,newuserValue}}>
    {children}
    </StoreProvider.Provider>
    </>
  )
}

export default Store