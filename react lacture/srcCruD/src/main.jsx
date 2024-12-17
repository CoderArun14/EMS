import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home.jsx";
import Desboard from "./Components/Desboard.jsx";
let router = createBrowserRouter([
  { path: "/",
     element: <App />, 
     children: [
      {path:"/Home", element:<Home/>},
      {path:"/Deshboard", element:<Desboard/>}
     ] },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
