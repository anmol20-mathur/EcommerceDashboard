import React from 'react';
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
        <ul className='nav-ul'>
            <li><Link to="/">Products</Link></li>
            <li><Link to="/addProducts">Add Products</Link></li>
            <li><Link to="/update">Update</Link></li>
            <li><Link to="/logout">Logout</Link></li>
            <li><Link to="/profileView">Profile View</Link></li>
        </ul>
    </div>
  )
}

export default Nav;