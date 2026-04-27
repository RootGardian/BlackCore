import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    // Header scroll logic
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

    // Hash Scroll Logic (for #services, etc.)
    if (location.hash) {
      setTimeout(() => {
        const id = location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300); // Wait for page to load/render
    }

    // Global Scroll Reveal logic
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    revealElements.forEach(el => revealObserver.observe(el));

    // Right-click protection (deterrent)
    const handleContextMenu = (e) => e.preventDefault();
    document.addEventListener('contextmenu', handleContextMenu);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('contextmenu', handleContextMenu);
      revealElements.forEach(el => revealObserver.unobserve(el));
    };
  }, [location]); // Re-run on route change to catch new reveal elements

  return (
    <>
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
    </>
  );
}

export default App;
