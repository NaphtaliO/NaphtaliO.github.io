
import { Routes, Route } from 'react-router-dom';
import './App.css';
import './scss/App.scss'
import NavBar from './components/NavBar';
import Home from './routes/Home';
import "bootstrap";
import Footer from './components/Footer';
import Contact from './routes/Contact';
import Projects from './routes/Projects';
import About from './routes/About';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={ <About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
