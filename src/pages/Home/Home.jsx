// src/pages/Home.jsx
import React from 'react';
import Terminal from '../../components/Terminal/Terminal';
import './Home.css';
import Monitor from '../../components/Monitor/Monitor';
function Home() {
  

  return (
    <div className="home">
      <section id="home-section">

      <Monitor />
      <Terminal />
      </section>
      <section id="about">
        <h2>About Me</h2>
        <p>
          Hello! I am Ahmed, a passionate web developer with experience in building interactive web applications.
        </p>
      </section>
      <section id="projects">
        <h2>Projects</h2>
        <p>Here are some of my projects:</p>
        <ul>
          <li>
            <a href="/project/1">Project One</a>
          </li>
          <li>
            <a href="/project/2">Project Two</a>
          </li>
        </ul>
      </section>
      <section id="contact">
        <h2>Contact</h2>
        <p>You can reach me at: example@example.com</p>
      </section>
    </div>
  );
}

export default Home;
