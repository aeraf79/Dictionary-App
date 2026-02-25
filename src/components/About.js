import React from 'react';
import './About.css';

const features = [
  { icon: '🔍', title: 'Instant Definitions', desc: 'Get accurate meanings for any English word in seconds using the Free Dictionary API.' },
  { icon: '🎧', title: 'Audio Pronunciation', desc: 'Listen to how any word is pronounced with native speaker audio.' },
  { icon: '📚', title: 'Multiple Meanings', desc: 'View definitions across parts of speech — noun, verb, adjective, and more.' },
  { icon: '🔗', title: 'Clickable Synonyms', desc: 'Click any synonym to instantly look it up and explore related words.' },
];

const About = () => {
  return (
    <div className="about-container">
      <div className="about-card">
        <div className="about-header">
          <span className="about-icon">📖</span>
          <h1>About WordWise</h1>
          <p className="about-tagline">Your intelligent English language companion</p>
        </div>

        <div className="about-divider" />

        <div className="about-features">
          {features.map((f, i) => (
            <div className="about-feature" key={i}>
              <span className="about-feature-icon">{f.icon}</span>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>

        <p className="about-description">
          WordWise is a clean, fast dictionary app built for students, writers, teachers, and anyone curious about language. 
          Whether you're expanding your vocabulary, checking a definition mid-read, or exploring synonyms for better writing — WordWise has you covered.
        </p>

        <div className="about-tech">
          <span>Built with</span>
          <span className="tech-badge">⚛️ React</span>
          <span className="tech-badge">🌐 Free Dictionary API</span>
          <span className="tech-badge">💾 localStorage</span>
        </div>
      </div>
    </div>
  );
};

export default About;