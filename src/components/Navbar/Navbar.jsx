// src/components/Navbar/Navbar.jsx
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
        <Link to="/"> {"< A/"} <span className='logo-name'>HMED</span> {" >"} </Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/#about">About</Link>
        </li>
        <li>
          <Link to="/#projects">Projects</Link>
        </li>
        <li>
          <Link to="/#contact">Contact</Link>
        </li>
      </ul>
      <div className="theme-toggle" onClick={toggleTheme}>
        <img src={theme === 'light' ? sun : moon} alt="toggle theme" />
      </div>
    </nav>
  );
}

export default Navbar;
