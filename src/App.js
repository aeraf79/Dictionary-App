import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Dictionary from './components/Dictionary';
import Login from './components/Login';
import About from './components/About';
import Register from './components/Register';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const ProtectedRoute = ({ element }) =>
    isLoggedIn ? element : <Navigate to="/login" />;

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path="/" element={<Navigate to={isLoggedIn ? '/home' : '/login'} />} />
        <Route path="/login" element={isLoggedIn ? <Navigate to="/home" /> : <Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/register" element={isLoggedIn ? <Navigate to="/home" /> : <Register />} />
        <Route path="/home"       element={<ProtectedRoute element={<Home />} />} />
        <Route path="/dictionary" element={<ProtectedRoute element={<Dictionary />} />} />
        <Route path="/about"      element={<ProtectedRoute element={<About />} />} />
        <Route path="*" element={<Navigate to={isLoggedIn ? '/home' : '/login'} />} />
      </Routes>
    </Router>
  );
}

export default App;