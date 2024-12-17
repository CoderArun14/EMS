import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Home.jsx'
import About from './About.jsx'
import DashBoard from './DashBoard.jsx'

let router = createBrowserRouter([
  { path: "/",
     element: <App />, 
     children: [
      {path:"/Home", element:<Home/>},
      {path:"/About", element:<About/>},
      {path:"/DashBoard", element:<DashBoard/>}
     ] },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>
)
