import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { StoreProvider } from './Store/Store'

const Nav = () => {
  let{handleADD} = useContext(StoreProvider)
  return (
    <>
    <div className='container'>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand fs-1 fw-bold " href="#">CRUD</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav fs-3 fw-bold mx-auto">
      <li className="nav-item ">
        <Link className="nav-link  mx-2" to={"/Home"} >Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link mx-2" to={"/About"}>About</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link  mx-2" to={"/DashBoard"}>DashBoard</Link>
      </li>
    </ul>
    <div><button className='btn btn-success' onClick={handleADD}>Add User</button></div>
  </div>
</nav>
    </div>
    </>
  )
}

export default Nav