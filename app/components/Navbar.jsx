import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
 <nav className="navbar navbar-inverse">
    <div className="container-fluid">
      <ul className="nav navbar-nav">
       <Link to="/"><li className="navbar-brand">Home</li></Link>
       <Link to="/students"><li className="navbar-brand">Students</li></Link>
      </ul>
    </div>
  </nav>
    )
}


export default Navbar;
