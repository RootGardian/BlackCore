const Footer = () => {
  return (
    <footer className="final-footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src="/favicon.png" alt="BlackCore Icon" className="logo-icon" />
          BLACK<span>CORE</span> TECH
        </div>
        <div className="footer-links">
          <a href="/politique-de-confidentialite">Politique de Confidentialité</a>
          <a href="/mentions-legales">Mentions Légales</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
      <p>BlackCore Tech © {new Date().getFullYear()} Tous droits réservés</p>
    </footer>
  );
};

export default Footer;
