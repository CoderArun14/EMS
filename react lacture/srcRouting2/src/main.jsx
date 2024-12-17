import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from "./components/Home.jsx"
import About from "./components/About.jsx"
import Projects from "./components/Projects.jsx"
import ContactUs from "./components/ContactUs.jsx"
let routerHere = createBrowserRouter([
  {path:"/", element:<App />, children:[
    {path:"/Home", element:<Home/>},
    {path:"/About", element:<About/>},
    {path:"/ContactUs", element:<ContactUs/>},
    {path:"/Projects", element:<Projects/>},
    {path:"*", element:<h1>404 Not Found</h1>},
  ]},
  
  
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routerHere}/>
    
  </StrictMode>,
)
