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
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '3.5rem', color: 'white' }}>Mentions Légales</h1>
            <p style={{ maxWidth: '800px', margin: '20px auto' }}>Informations réglementaires concernant l'édition et l'hébergement du site BlackCore Tech.</p>
          </div>
        </div>
      </section>

      <section className="legal-content">
        <div className="container">
          <div className="contact-container reveal active" style={{ display: 'block' }}>
            <h3>Éditeur du site</h3>
            <p>BlackCore Tech<br />
            Société par actions simplifiée<br />
            Contact : ahmedbangoura852@gmail.com</p>
            
            <h3>Hébergement</h3>
            <p>Le site est hébergé par des serveurs sécurisés garantissant une haute disponibilité et une protection des données optimale.</p>
            
            <h3>Propriété Intellectuelle</h3>
            <p>L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés.</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LegalMentions;
