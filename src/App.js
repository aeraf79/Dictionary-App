import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Dictionary from './components/Dictionary';
import Login from './components/Login';
<<<<<<< HEAD
import About from './components/About';
=======
import About from './components/About'; 
>>>>>>> 5c82e76e8ad50cc288a177719fe1336954456c87
import Register from './components/Register';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

<<<<<<< HEAD
  const ProtectedRoute = ({ element }) =>
    isLoggedIn ? element : <Navigate to="/login" />;

=======
>>>>>>> 5c82e76e8ad50cc288a177719fe1336954456c87
  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<Navigate to={isLoggedIn ? '/home' : '/login'} />} />
        <Route path="/login" element={isLoggedIn ? <Navigate to="/home" /> : <Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/register" element={isLoggedIn ? <Navigate to="/home" /> : <Register />} />
        <Route path="/home"       element={<ProtectedRoute element={<Home />} />} />
        <Route path="/dictionary" element={<ProtectedRoute element={<Dictionary />} />} />
        <Route path="/about"      element={<ProtectedRoute element={<About />} />} />
        <Route path="*" element={<Navigate to={isLoggedIn ? '/home' : '/login'} />} />
=======
        <Route
          path="/"
          element={isLoggedIn ? <Navigate to="/home" /> : <Login setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route path="/home" element={isLoggedIn ? <Home /> : <Navigate to="/" />} />
        <Route path="/dictionary" element={isLoggedIn ? <Dictionary /> : <Navigate to="/" />} />
        <Route path="/about" element={isLoggedIn ? <About /> : <Navigate to="/" />} />
        <Route path="/register" element={<Register />} />
>>>>>>> 5c82e76e8ad50cc288a177719fe1336954456c87
      </Routes>
    </Router>
  );
}

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> 5c82e76e8ad50cc288a177719fe1336954456c87
