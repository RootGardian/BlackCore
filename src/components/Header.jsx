import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isSubpage = location.pathname !== '/';

  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Close menus when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  }, [location]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }, [mobileMenuOpen]);

  const services = [
    { title: 'Développement', path: '/services/developpement' },
    { title: 'IA & Data', path: '/services/ia-data' },
    { title: 'DevOps', path: '/services/devops' },
    { title: 'Cyber-sécurité', path: '/services/cyber-securite' }
  ];

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
          <li><Link to="/#about">À Propos</Link></li>
          <li 
            className={`dropdown ${dropdownOpen ? 'active' : ''}`}
            onMouseEnter={() => window.innerWidth > 992 && setDropdownOpen(true)}
            onMouseLeave={() => window.innerWidth > 992 && setDropdownOpen(false)}
            onClick={() => window.innerWidth <= 992 && setDropdownOpen(!dropdownOpen)}
          >
            <span className="dropdown-trigger">
              Nos Métiers <i className={`fas fa-chevron-down ${dropdownOpen ? 'rotate' : ''}`}></i>
            </span>
            <ul className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
              {services.map((s, i) => (
                <li key={i}><Link to={s.path}>{s.title}</Link></li>
              ))}
            </ul>
          </li>
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
