import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <nav>
      <span className="heading">MyDictionary</span>
      {isLoggedIn && (
        <span className="nav-links">
          <Link to="/home">Home</Link>
          <Link to="/dictionary">Dictionary</Link>
          <Link to="/about">About</Link>
          <button onClick={handleLogout}>Logout</button>
        </span>
      )}
    </nav>
  );
};

export default Navbar;
