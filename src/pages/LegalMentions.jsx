import { useEffect } from 'react';

const LegalMentions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="legal-page">
      <section className="contact-hero">
        <div className="container">
          <div className="section-title reveal active">
            <h1 className="gradient-text" style={{ fontFamily: 'var(--font-serif)', fontSize: '4rem', marginBottom: '20px' }}>Mentions Légales</h1>
            <p style={{ maxWidth: '800px', margin: '0 auto', opacity: 0.8, fontSize: '1.1rem' }}>Informations réglementaires concernant l'édition et l'hébergement du site BlackCore Tech.</p>
          </div>
        </div>
      </section>

      <section className="legal-content">
        <div className="container">
          <div className="legal-cards-grid">
            <div className="legal-item reveal active">
              <h3><i className="fas fa-building"></i> Éditeur du site</h3>
              <p>BlackCore Tech<br />
              Société par actions simplifiée<br />
              Contact : ahmedbangoura852@gmail.com</p>
            </div>

            <div className="legal-item reveal active">
              <h3><i className="fas fa-server"></i> Hébergement</h3>
              <p>Le site est hébergé par des serveurs sécurisés garantissant une haute disponibilité et une protection des données optimale.</p>
            </div>
            
            <div className="legal-item reveal active">
              <h3><i className="fas fa-copyright"></i> Propriété Intellectuelle</h3>
              <p>L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LegalMentions;
