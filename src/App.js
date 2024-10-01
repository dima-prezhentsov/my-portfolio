import React from 'react';
import './App.css';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="container">
      <div className="photo-section">
        <img src="my-photo.jpg" alt="Ваше имя" className="profile-photo" />
      </div>
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
