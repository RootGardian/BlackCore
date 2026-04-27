import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const AIData = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="service-detail-page">
      <section className="contact-hero">
        <div className="container">
          <div className="section-title reveal active">
            <div className="hero-badge">IA & DATA</div>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '3.5rem', color: 'white' }}>L'Intelligence au Cœur des Données</h1>
            <p style={{ maxWidth: '800px', margin: '20px auto' }}>Valorisez votre patrimoine data et automatisez vos processus grâce à l'Intelligence Artificielle.</p>
          </div>
        </div>
      </section>

      <section className="service-body">
        <div className="container">
          <div className="contact-container reveal active service-grid">
            <div>
              <h3>Nos Solutions IA</h3>
              <p>Nous transformons la donnée brute en insights actionnables pour booster votre croissance.</p>
              <ul className="nav-links" style={{ alignItems: 'flex-start', marginTop: '20px', gap: '15px' }}>
                <li><i className="fas fa-check-circle" style={{ color: 'var(--primary)', marginRight: '10px' }}></i> Machine Learning & Analyse Prédictive</li>
                <li><i className="fas fa-check-circle" style={{ color: 'var(--primary)', marginRight: '10px' }}></i> Traitement du Langage Naturel (NLP)</li>
                <li><i className="fas fa-check-circle" style={{ color: 'var(--primary)', marginRight: '10px' }}></i> Vision par Ordinateur & Reconnaissance</li>
                <li><i className="fas fa-check-circle" style={{ color: 'var(--primary)', marginRight: '10px' }}></i> Dashboards BI & Visualisation avancée</li>
              </ul>
            </div>
            <div style={{ background: 'rgba(255,102,0,0.05)', padding: '40px', borderRadius: '20px', border: '1px solid rgba(255,102,0,0.1)' }}>
              <h3>Innovez maintenant</h3>
              <p>La donnée est votre plus grand atout. Exploitez-la à son plein potentiel avec nos experts IA.</p>
              <Link to="/contact" className="btn-pill" style={{ marginTop: '20px', display: 'inline-block' }}>Exploiter mes données</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AIData;
