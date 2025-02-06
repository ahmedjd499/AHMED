// src/pages/Home.jsx
import React from 'react';
import Terminal from '../../components/Terminal/Terminal';
import './Home.css';
import Monitor from '../../components/Monitor/Monitor';
import About from '../../components/About/About';
function Home() {
  

  return (
    <div className="home">
      <section id="home-section">

      <Monitor />
      <Terminal />
      </section>
      <About />
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
