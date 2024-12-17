// import React, { useContext } from 'react'
// import {  Link } from 'react-router-dom'
// import { StoreProvider } from '../Store/Store'

// const Nav = () => {
//   let {handleShow} = useContext(StoreProvider)
//   return (
//     <>
//   <nav className="navbar navbar-expand-lg bg-body-tertiary">
//   <div className="container">
//     <a className="navbar-brand fs-4 fw-bold" href="#">Navbar</a>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
//         <li className="nav-item mx-3 fs-4 fw-bold">
//           <Link className="nav-link active" aria-current="page"to="/Home">Home</Link>
//         </li>
//         <li className="nav-item mx-3 fs-4 fw-bold">
//           <Link className="nav-link" to="/DashBoard">DashBoard</Link>
//         </li>
//         <li className="nav-item mx-3 fs-4 fw-bold">
//           <Link className="nav-link" to="/About">About</Link>
//         </li>
//       </ul>
//       <div><button className='btn btn-primary fs-4' onClick={handleShow}>Add</button></div>
    
//     </div>
//   </div>
// </nav>
      
//     </>
//   )
// }

// export default Nav

import React from 'react'
import { Link } from 'react-router-dom'


const Nav = () => {
  return (
    <>
    <div className='container-fluid'>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand fs-4 fw-bold ms-5" href="#">CRUD</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mx-auto fs-4 fw-bold">
      <li class="nav-item active">
        <Link class="nav-link mx-4" to="/Home">Home</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link  mx-4" to="/About">About</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link  mx-4" to="/DashBoard">DashBoard</Link>
      </li>
    </ul>
   <div>
    <button className='btn btn-primary'>Add User</button>
   </div>
  </div>
</nav>
</div>
    </>
  )
}

export default Nav