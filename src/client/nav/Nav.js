import React from 'react'
import { Link } from 'react-router-dom'
import '../../App.css';

function Nav() {
  const navStyle = {
    color: "white",
    //text-decoration: none;
  }

  return (
    <nav>
      <Link style={navStyle} to="/"> <h1>LOGO</h1></Link>
      <ul className="nav-links">
        <Link style={navStyle} to="/about"><li>About</li></Link>
        <Link style={navStyle} to="/cart"><li>Cart</li></Link>
        <Link style={navStyle} to="/admin/product"><li>Admin</li></Link>
        <Link style={navStyle} to="/signin"><li>SignIn</li></Link> 
      </ul>
    </nav>

  );
}

export default Nav;
