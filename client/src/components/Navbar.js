import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


function Navbar() {
  return (
   <>
      <nav className="navbar navbar-dark bg-dark">
        <a className="nav-link" href="/">Home</a>
        <a className="nav-link" href="/login">Login</a>
        <a className="nav-link" href="/signup">Signup</a>
      </nav>
      </>
      )
  }
 export default Navbar

