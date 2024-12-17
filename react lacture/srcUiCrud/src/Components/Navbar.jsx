import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { DataProvider } from "../Store/Store";
import { Button } from "react-bootstrap";

const Navbar = () => {
  let {handleShow} = useContext(DataProvider)
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  to={"/Home"}
                  className="nav-link active"
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={"/Deshboard"}>
                  Deshboard
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={"/About"}>
                  About
                </NavLink>
              </li>
            </ul>
            <div><Button variant="primary" onClick={handleShow}>
        AddUser
      </Button></div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
