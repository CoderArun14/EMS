import React, { useEffect, useState } from "react";
import Nav from "./component/Nav";
import { Outlet, useNavigate } from "react-router-dom";
import Store, { StoreProvider } from "./Store/Store";

const App = () => {
 

  return (
    <>
      
      <Store>
        <Nav />
        <Outlet />
      
      </Store>
    </>
  );
};

export default App;


// import React, { useEffect, useState } from 'react'
// import Nav from './component/Nav'
// import { Outlet } from 'react-router-dom'
// import {StoreProvider} from './Store/Store'
// const App = () => {

//   let[newData,setNewdata] = useState([])

//   let Fetch = ()=>{
//     fetch("https://67409db7d0b59228b7f0b79f.mockapi.io/crud/CrudApp").then((data)=> data.json()).then((data)=>setNewdata(data))
//   }
//   useEffect(()=>{
//     Fetch()
//   },[])
//   return (
//     <>
//     <StoreProvider.Provider value={{newData}}>
//     <Nav/>
//     <Outlet/>
//     </StoreProvider.Provider>
//     </>
//   )
// }

// export default App