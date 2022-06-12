import React from 'react';
//import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './About';
import ContactUs from './Contact';
import Footer from './Footer';
import Home from './Home';
import Navbar from './Navbar';
import Projects from './Projects';
import Skills from './Skills';


function App() {
  return (
    
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <ContactUs />
      <Footer />
      </div>
    
  );
}

export default App;
