// import React from 'react'
// import NavBar from './components/NavBar'
// import Section from './components/Section'
// import Transfer from './components/Transfer'
// import Home from './components/Home'
// import About from './components/About'
// import ContactUs from './components/ContactUs'
// import Projects from './components/Projects'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'

// const App = () => {
//   return (
//     <>
   
//     {/* <Section/> */}
//     {/* <BrowserRouter>
//         <NavBar/>
//         <Routes>
//             <Route path='/' element ={<Section/>}>
//                 <Route path='/Home' element={<Home/>}/>
//                 <Route path='/About' element={<About/>}/>
//                 <Route path='/ContactUs' element={<ContactUs/>}/>
//                 <Route path='/Projects' element={<Projects/>}/>
//                 <Route path='*' element={<h1>404 NOt Found</h1>}/>
//             </Route>

//         </Routes>
    
//     </BrowserRouter> */}
//     {/* <Transfer/> */}
//     app
//     </>
//   )
// }

// export default App
import React from 'react'
import NavBar from "./components/NavBar"
import Section from "./components/Section"
import { Outlet } from 'react-router-dom'
const App = () => {
  return (
    <>
    <NavBar/>
    <Section/>
    <Outlet/>
    </>
  )
}

export default App