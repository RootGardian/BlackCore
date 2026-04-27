import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isSubpage = location.pathname !== '/';

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }, [mobileMenuOpen]);

  return (
    <header id="header" className={`${isSubpage ? 'scrolled' : ''} ${mobileMenuOpen ? 'mobile-nav-open' : ''}`}>
      <div className="logo">
        <img src="/favicon.png" alt="BlackCore Icon" className="logo-icon" />
        <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
          BLACK<span>CORE</span> TECH
        </Link>
      </div>

      <button 
        className="mobile-menu-btn" 
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
      >
        <i className={mobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
      </button>

      <nav className={mobileMenuOpen ? 'open' : ''}>
        <ul className="nav-links">
          <li><Link to="/">Accueil</Link></li>
          <li><a href="/#about">À Propos</a></li>
          <li><a href="/#services">Nos Métiers</a></li>
          <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link></li>
          <li className="mobile-only">
            <Link to="/contact" className="btn btn-primary">Démarrer un projet</Link>
          </li>
        </ul>
      </nav>

      <Link to="/contact" className="btn btn-primary desktop-only">Démarrer un projet</Link>
    </header>
  );
};

export default Header;
