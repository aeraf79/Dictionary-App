import React from 'react';
<<<<<<< HEAD
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
=======
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
>>>>>>> 5c82e76e8ad50cc288a177719fe1336954456c87
        </span>
      )}
    </nav>
  );
};

<<<<<<< HEAD
export default Navbar;
=======
export default Navbar;
>>>>>>> 5c82e76e8ad50cc288a177719fe1336954456c87
