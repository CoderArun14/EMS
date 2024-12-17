import React from 'react'
import {BrowserRouter, Route,Routes} from "react-router-dom"
import Home from './Home'
import NavBar from './NavBar'
import Section from './Section'
import About from './About'
import ContactUs from './ContactUs'
import Projects from './Projects'
const Transfer = () => {
  return (
    <>
    <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path='/' element ={<Section/>}>
                <Route path='/Home' element={<Home/>}/>
                <Route path='/About' element={<About/>}/>
                <Route path='/ContactUs' element={<ContactUs/>}/>
                <Route path='/Projects' element={<Projects/>}/>
                <Route path='*' element={<h1>404 NOt Found</h1>}/>
            </Route>

        </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default Transfer