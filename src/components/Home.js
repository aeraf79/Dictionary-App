import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <div className="overlay">
        <div className="home-content">
          <h1>Welcome to WordWise</h1>
          <p>Your ultimate companion for discovering word meanings, synonyms, and pronunciations. Explore the beauty of language with ease.</p>
          <Link to="/dictionary">
            <button className="start-btn">Start Exploring</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
