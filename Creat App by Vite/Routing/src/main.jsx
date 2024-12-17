import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Home.jsx'
import Features from "./Features.jsx"
import Pricing from "./Pricing.jsx"



let routerhere = createBrowserRouter([
  {path:"/", element:<App/>,children:[
    {path:"/Home", element:<Home/>},
    {path:"/Features", element:<Features/>},
    {path:"/Pricing", element:<Pricing/>},
  ]},
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routerhere}/>
  </StrictMode>,
)
