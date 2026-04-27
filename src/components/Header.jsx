import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const isSubpage = location.pathname !== '/';

  return (
    <header id="header" className={isSubpage ? 'scrolled' : ''}>
      <div className="logo">
        <img src="/favicon.png" alt="BlackCore Icon" className="logo-icon" />
        <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
          BLACK<span>CORE</span> TECH
        </Link>
      </div>
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Accueil</Link></li>
          <li><a href="/#about">À Propos</a></li>
          <li><a href="/#services">Nos Métiers</a></li>
          <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link></li>
        </ul>
      </nav>
      <Link to="/contact" className="btn btn-primary">Démarrer un projet</Link>
    </header>
  );
};

export default Header;
