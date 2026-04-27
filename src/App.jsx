import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import LegalMentions from './pages/LegalMentions';
import Development from './pages/services/Development';
import AIData from './pages/services/AIData';
import DevOps from './pages/services/DevOps';
import CyberSecurity from './pages/services/CyberSecurity';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Re-implement the scroll reveal and header scroll logic
    const handleScroll = () => {
      const header = document.getElementById('header');
      if (header) {
        if (window.scrollY > 50) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Right-click protection (deterrent)
    const handleContextMenu = (e) => e.preventDefault();
    document.addEventListener('contextmenu', handleContextMenu);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/politique-de-confidentialite" element={<PrivacyPolicy />} />
        <Route path="/mentions-legales" element={<LegalMentions />} />
        <Route path="/services/developpement" element={<Development />} />
        <Route path="/services/ia-data" element={<AIData />} />
        <Route path="/services/devops" element={<DevOps />} />
        <Route path="/services/cyber-securite" element={<CyberSecurity />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
