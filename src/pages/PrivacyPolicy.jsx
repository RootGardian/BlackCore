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
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '3.5rem', color: 'white' }}>Politique de Confidentialité</h1>
            <p style={{ maxWidth: '800px', margin: '20px auto' }}>Chez BlackCore Tech, la protection de vos données personnelles est une priorité absolue.</p>
          </div>
        </div>
      </section>

      <section className="legal-content">
        <div className="container">
          <div className="contact-container reveal active" style={{ display: 'block' }}>
            <h3>1. Collecte des données</h3>
            <p>Nous collectons les informations que vous nous fournissez via notre formulaire de contact (nom, email, sujet de votre demande).</p>
            
            <h3>2. Utilisation des données</h3>
            <p>Vos données sont utilisées exclusivement pour répondre à vos demandes de projet et assurer le suivi commercial de notre relation.</p>
            
            <h3>3. Sécurité</h3>
            <p>Nous mettons en œuvre toutes les mesures de sécurité nécessaires pour protéger vos données contre tout accès non autorisé.</p>
            
            <h3>4. Vos droits</h3>
            <p>Vous disposez d'un droit d'accès, de rectification et de suppression de vos données personnelles sur simple demande par email.</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPolicy;
