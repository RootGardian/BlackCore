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
            <h1 className="gradient-text" style={{ fontFamily: 'var(--font-serif)', fontSize: '4rem', marginBottom: '20px' }}>Forteresse Digitale & Confiance</h1>
            <p style={{ maxWidth: '800px', margin: '0 auto', opacity: 0.8, fontSize: '1.1rem' }}>Protégez vos actifs les plus précieux et assurez la continuité de votre activité face aux menaces.</p>
          </div>
        </div>
      </section>

      <section className="service-body">
        <div className="container">
          <div className="service-grid reveal active">
            <div className="service-main-content">
              <h3>Protection 360°</h3>
              <p>Une approche holistique de la sécurité pour anticiper et neutraliser les cyber-menaces.</p>
              
              <div className="features-list">
                <div className="feature-row"><i className="fas fa-user-secret"></i> <span>Audits & Pentests</span></div>
                <div className="feature-row"><i className="fas fa-user-shield"></i> <span>Protection de Données</span></div>
                <div className="feature-row"><i className="fas fa-balance-scale"></i> <span>Conformité & RGPD</span></div>
                <div className="feature-row"><i className="fas fa-fire-extinguisher"></i> <span>Réponse aux Incidents</span></div>
              </div>
            </div>

            <div className="service-sidebar">
              <div className="cta-card-premium">
                <h3>Sécurisez votre Futur</h3>
                <p>Dans un monde connecté, la sécurité n'est plus une option. Faites-en un avantage compétitif.</p>
                <Link to="/contact" className="btn btn-primary" style={{ width: '100%' }}>AUDITER MA SÉCURITÉ</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CyberSecurity;
