// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Nav from "./component/Nav";
// import Section from "./component/Section";
// import Home from "./Home";
// import Features from "./Features";
// import Pricing from "./Pricing";

// const App = () => {
//   return (
//     <>
    
//       <BrowserRouter>
//         <Nav />
//         <Routes>
//           <Route path="/" element={<Section/>}>
//             <Route path="/Home" element = {<Home/>}/>
//             <Route path="/Features" element = {<Features/>}/>
//             <Route path="/Pricing" element = {<Pricing/>}/>
//           </Route>
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// };

// export default App;


import React from 'react'
import  Nav from "./component/Nav"
import Section from "./component/Section"
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <>
    <Nav/>
    <Section/>
    {/* <Outlet/> */}
    </>
  )
}

export default App
