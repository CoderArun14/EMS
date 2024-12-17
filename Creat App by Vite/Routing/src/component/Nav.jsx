import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container">
    <Link class="navbar-brand" to={"/Home"}>Navbar</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <Link class="nav-link active" aria-current="page" to={"/Home"}>Home</Link>
        <Link class="nav-link" to={"/Features"}>Features</Link>
        <Link class="nav-link" to={"/Pricing"}>Pricing</Link>
        <Link class="nav-link disabled" aria-disabled="true">Disabled</Link>
      </div>
    </div>
  </div>
</nav>
    </>
  )
}

export default Nav