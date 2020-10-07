import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';


function Navbar() {
  return (
   <>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <ul className="ml-auto navbar-nav">

                    <li className="nav-item">
                        <NavLink to="/" exact={true} className={window.location.pathname === "/" ? "nav-link activeClassName" : "nav-link"}>Home
                             </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink to="/login" className={window.location.pathname === "/login" ? "nav-link activeClassName" : "nav-link"}>Login
                             </NavLink>
                    </li>
                </ul>
      </nav>
      </>
      )
  }
 export default Navbar

