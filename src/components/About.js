<<<<<<< HEAD
import React from 'react';
import './About.css';

const features = [
  { icon: '🔍', title: 'Instant Definitions', desc: 'Get accurate meanings for any English word in seconds using the Free Dictionary API.' },
  { icon: '🎧', title: 'Audio Pronunciation', desc: 'Listen to how any word is pronounced with native speaker audio.' },
  { icon: '📚', title: 'Multiple Meanings', desc: 'View definitions across parts of speech — noun, verb, adjective, and more.' },
  { icon: '🔗', title: 'Clickable Synonyms', desc: 'Click any synonym to instantly look it up and explore related words.' },
];
=======
import React from "react";
import "./About.css";
>>>>>>> 5c82e76e8ad50cc288a177719fe1336954456c87

const About = () => {
  return (
    <div className="about-container">
      <div className="about-card">
<<<<<<< HEAD
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
=======
        <h1>About Dictionary App</h1>
        <p>
          The Dictionary App is a powerful and user-friendly tool designed to help you explore the meanings, pronunciations, synonyms, and grammatical aspects of words.
        </p>
        <p>
          🔍 Simply type in a word, and our app fetches accurate definitions and examples using the Free Dictionary API.
        </p>
        <p>
          🎧 Listen to word pronunciations and enhance your vocabulary in an interactive way.
        </p>
        <p>
          🌐 Whether you're a student, teacher, writer, or language enthusiast, this app is a handy companion for improving your English language skills.
        </p>
        <p style={{ marginTop: "20px", fontStyle: "italic" }}>
          Developed using <strong>React</strong> and <strong>Free Dictionary API</strong> 💻
        </p>
>>>>>>> 5c82e76e8ad50cc288a177719fe1336954456c87
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default About;
=======
export default About;
>>>>>>> 5c82e76e8ad50cc288a177719fe1336954456c87
