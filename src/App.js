import React from 'react';
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
    
  );
}

export default App;
