import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return ( 
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <NavLink className="navbar-brand" exact to="/">RD Technical</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarSupportedContent">
                <ul className="navbar-nav NN mb-2 mb-lg-0">
                    <li className="nav-item">
                    <NavLink className="nav-link "  activeClassName='ac'  aria-current="page"  exact to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link"  activeClassName='ac' exact to="/Service">Services</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link"  activeClassName='ac' exact to="/Contact">Contact</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" activeClassName='ac'  exact to="/About">About</NavLink>
                    </li>
        
                </ul>
            
            </div>
        </div>
        </nav>
        </div>
     );
}

export default Navbar;