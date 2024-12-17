import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container">
      {/* <a className="navbar-brand" href="/Home">Tech</a> */}
      <Link className="navbar-brand" to={"/Home"}>Tech</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link " aria-current="page" to={"/Home"}>Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to={"/About"}>About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to={"/Projects"}>Projects</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to={"/ContactUs"}>ConatctUS</NavLink>
          </li>
        </ul>
        
      </div>
    </div>
  </nav>
  )
}

export default NavBar
