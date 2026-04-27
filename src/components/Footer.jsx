import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="final-footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src="/favicon.png" alt="BlackCore Icon" className="logo-icon" />
          BLACK<span>CORE</span> TECH
        </div>
        <div className="footer-links">
          <Link to="/politique-de-confidentialite">Politique de Confidentialité</Link>
          <Link to="/mentions-legales">Mentions Légales</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <p>BlackCore Tech © {new Date().getFullYear()} Tous droits réservés</p>
      <p style={{ marginTop: '10px', opacity: 0.6, fontSize: '0.75rem' }}>
        Powered by <a href="https://blackcore-l8nt.onrender.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', fontWeight: '700' }}>BlackCore Tech</a>
      </p>
    </footer>
  );
};

export default Footer;
