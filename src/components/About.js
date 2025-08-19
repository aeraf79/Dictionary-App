import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-card">
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
      </div>
    </div>
  );
};

export default About;
