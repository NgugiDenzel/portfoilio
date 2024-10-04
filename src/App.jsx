// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
// import Contact from './pages/Contact';
// import './styles/App.css';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes><br /><br /><br />
      <footer>
      <Footer />
      </footer>
    </Router>
  );
};

export default App;
