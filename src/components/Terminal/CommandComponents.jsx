// CommandComponents.jsx
import React from "react";
// import "./Terminal.css"; // Import styles if needed

export const HelpCommand = () => {
  return (
    <div className="command-output">
      <p>Commands:</p>
      <ul>
        <li><strong>help</strong> - Show this help message</li>
        <li><strong>about</strong> - Navigate to the About section</li>
        <li><strong>projects</strong> - Navigate to the Projects section</li>
        <li><strong>contact</strong> - Navigate to the Contact section</li>
        <li><strong>clear</strong> - Clear the terminal</li>
      </ul>
    </div>
  );
};

export const FactsCommand = () => {
  return (
    <div className="command-output">
 <p className="title">Hello! I'm Ashleigh GB</p>
          <p>Here's some facts about me:</p>
          <p className="web-dev">✔ Web Developer</p>
          <p className="app-dev">✔ App Developer</p>
          <p className="typescript">✔ TypeScript Expert</p>
          <p className="backend">✔ Backend Specialist</p>
          <p className="epos">✔ EPOS Builder</p>
          <p className="football">✔ Football Fanatic ⚽ (forza Biancazzurri!)</p>    </div>
  );
};

export const ProjectsCommand = () => {
  return (
    <div className="command-output">
      <p>Navigating to the Projects section...</p>
    </div>
  );
};

export const ContactCommand = () => {
  return (
    <div className="command-output">
      <p>Navigating to the Contact section...</p>
    </div>
  );
};

export const UnknownCommand = ({ command }) => {
  return (
    <div className="command-output">
      <p>Unknown command: <span className="command-name">{command}</span></p>
    </div>
  );
};
