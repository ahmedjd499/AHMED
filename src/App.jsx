// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Project from './pages/Project/Project';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <Router basename='/AHMED'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:projectId" element={<Project />} />
      </Routes>
    </Router>
  );
}

export default App;
