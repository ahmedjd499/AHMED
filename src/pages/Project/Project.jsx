

import React from 'react';

function Project() {
  return (
    <div>
      <Terminal />
      {/* The sections can be identified with id attributes */}
      <section id="about" style={{ padding: '50px', background: '#f0f0f0' }}>
        <h2>About Me</h2>
        <p>Details about you...</p>
      </section>
      <section id="projects" style={{ padding: '50px' }}>
        <h2>Projects</h2>
        {/* List your projects with links to the project details page */}
        <ul>
          <li>
            <a href="/project/1">Project One</a>
          </li>
          <li>
            <a href="/project/2">Project Two</a>
          </li>
        </ul>
      </section>
      <section id="contact" style={{ padding: '50px', background: '#f0f0f0' }}>
        <h2>Contact</h2>
        <p>Contact details here...</p>
      </section>
    </div>
  );
}

export default Project;
