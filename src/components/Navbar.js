import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  return (
    <nav>
      <Link to={isLoggedIn ? '/home' : '/login'} className="nav-brand">
        Word<span>Wise</span>
      </Link>

      {isLoggedIn && (
        <span className="nav-links">
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/dictionary">Dictionary</NavLink>
          <NavLink to="/about">About</NavLink>
          <button className="nav-logout" onClick={() => setIsLoggedIn(false)}>
            Logout
          </button>
        </span>
      )}
    </nav>
  );
};

export default Navbar;