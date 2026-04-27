import { useEffect } from 'react';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="legal-page">
      <section className="contact-hero">
        <div className="container">
          <div className="section-title reveal active">
            <h1 className="gradient-text" style={{ fontFamily: 'var(--font-serif)', fontSize: '4rem', marginBottom: '20px' }}>Politique de Confidentialité</h1>
            <p style={{ maxWidth: '800px', margin: '0 auto', opacity: 0.8, fontSize: '1.1rem' }}>Chez BlackCore Tech, la protection de vos données personnelles est une priorité absolue.</p>
          </div>
        </div>
      </section>

      <section className="legal-content">
        <div className="container">
          <div className="legal-cards-grid">
            <div className="legal-item reveal active">
              <h3><i className="fas fa-database"></i> 1. Collecte des données</h3>
              <p>Nous collectons les informations que vous nous fournissez via notre formulaire de contact (nom, email, sujet de votre demande).</p>
            </div>

            <div className="legal-item reveal active">
              <h3><i className="fas fa-user-check"></i> 2. Utilisation des données</h3>
              <p>Vos données sont utilisées exclusivement pour répondre à vos demandes de projet et assurer le suivi commercial de notre relation.</p>
            </div>
            
            <div className="legal-item reveal active">
              <h3><i className="fas fa-shield-alt"></i> 3. Sécurité</h3>
              <p>Nous mettons en œuvre toutes les mesures de sécurité nécessaires pour protéger vos données contre tout accès non autorisé.</p>
            </div>
            
            <div className="legal-item reveal active">
              <h3><i className="fas fa-balance-scale"></i> 4. Vos droits</h3>
              <p>Vous disposez d'un droit d'accès, de rectification et de suppression de vos données personnelles sur simple demande par email.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPolicy;
