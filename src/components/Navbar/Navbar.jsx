// src/components/Navbar.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import moon from '/src/assets/moon.png';
import sun from '/src/assets/sun.png';

function Navbar() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Update the data-theme attribute on the html element
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };
  return (
    <nav className="navbar">
      <div className="nav-brand">
        {/* You can link to the home page */}
        <Link to="/"> {"< A/ >"} </Link>
      </div>
      <ul className="nav-links">
      <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className=" theme-toggle" onClick={toggleTheme}>
        <img src={theme === 'light' ? sun : moon}
          alt="toggle theme">
        </img>
      </div>
    </nav>
  );
}

export default Navbar;
