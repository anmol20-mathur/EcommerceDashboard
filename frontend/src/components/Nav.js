import React from 'react';
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <ul className="navbar-nav mx-2">
            <li className='nav-item active mx-2'><Link to="/addProducts" className='nav-link'>Add Products</Link></li>
            <li className='nav-item mx-2'><Link to="/update"  className='nav-link'>Update</Link></li>
            <li className='nav-item mx-2'><Link to="/logout"  className='nav-link'>Logout</Link></li>
            <li className='nav-item mx-2'><Link to="/profileView"  className='nav-link'>Profile View</Link></li>
            <li className='nav-item mx-2'><Link to="/signup"  className='nav-link'>Sign Up</Link></li>
        </ul> 
      </nav>
    </div>
  )
}

export default Nav;