import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <span className="home-badge">✦ Free Dictionary App</span>
        <h1>Explore the World of <span>Words</span></h1>
        <p>
          Discover meanings, pronunciations, synonyms, and examples for any English word — instantly. Your intelligent language companion.
        </p>
        <div className="home-actions">
          <Link to="/dictionary">
            <button className="start-btn">🔍 Start Exploring</button>
          </Link>
        </div>
        <div className="home-stats">
          <div className="home-stat">
            <strong>170K+</strong>
            <span>Words</span>
          </div>
          <div className="home-stat">
            <strong>Free</strong>
            <span>Always</span>
          </div>
          <div className="home-stat">
            <strong>🎧</strong>
            <span>Audio</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;