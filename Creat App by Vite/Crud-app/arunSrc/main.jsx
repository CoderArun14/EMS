import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css"
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './component/Home.jsx'
import DashBoard from './component/DashBoard.jsx'
import About from './component/About.jsx'



let route = createBrowserRouter([
  {path:"/", element:<App/>, children:[
    {path:"/Home", element:<Home/>},
    {path:"/DashBoard", element:<DashBoard/>},
    {path:"/About", element:<About/>},
    
  ]}
]) 
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={route}/>
  </StrictMode>,
)
