// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import your CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/">Signup</Link>
        </li>
        <li className="nav-item">
          <Link to="/login">Login</Link>
        </li>
        <li className="nav-item">
          <Link to="/gettodo">Todos</Link>
        </li>
        <li className="nav-item">
          <Link to="/createtodo">Create Todo</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
