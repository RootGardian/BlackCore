import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const CyberSecurity = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="service-detail-page">
      <section className="contact-hero">
        <div className="container">
          <div className="section-title reveal active">
            <div className="hero-badge">CYBER-SÉCURITÉ</div>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '3.5rem', color: 'white' }}>Forteresse Digitale & Confiance</h1>
            <p style={{ maxWidth: '800px', margin: '20px auto' }}>Protégez vos actifs les plus précieux et assurez la continuité de votre activité face aux menaces.</p>
          </div>
        </div>
      </section>

      <section className="service-body">
        <div className="container">
          <div className="contact-container reveal active service-grid">
            <div>
              <h3>Protection 360°</h3>
              <p>Une approche holistique de la sécurité pour anticiper et neutraliser les cyber-menaces.</p>
              <ul className="nav-links" style={{ alignItems: 'flex-start', marginTop: '20px', gap: '15px' }}>
                <li><i className="fas fa-check-circle" style={{ color: 'var(--primary)', marginRight: '10px' }}></i> Audits de Sécurité & Tests d'Intrusion</li>
                <li><i className="fas fa-check-circle" style={{ color: 'var(--primary)', marginRight: '10px' }}></i> Protection des Données & Chiffrement</li>
                <li><i className="fas fa-check-circle" style={{ color: 'var(--primary)', marginRight: '10px' }}></i> Conformité RGPD & Gouvernance IT</li>
                <li><i className="fas fa-check-circle" style={{ color: 'var(--primary)', marginRight: '10px' }}></i> Réponse aux Incidents & Forensics</li>
              </ul>
            </div>
            <div style={{ background: 'rgba(255,102,0,0.05)', padding: '40px', borderRadius: '20px', border: '1px solid rgba(255,102,0,0.1)' }}>
              <h3>Sécurisez votre Futur</h3>
              <p>Dans un monde connecté, la sécurité n'est plus une option. Faites-en un avantage compétitif.</p>
              <Link to="/contact" className="btn-pill" style={{ marginTop: '20px', display: 'inline-block' }}>Auditer ma sécurité</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CyberSecurity;
