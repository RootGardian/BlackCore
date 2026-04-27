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
            <h1 className="gradient-text" style={{ fontFamily: 'var(--font-serif)', fontSize: '4rem', marginBottom: '20px' }}>Intelligence Artificielle & Data</h1>
            <p style={{ maxWidth: '800px', margin: '0 auto', opacity: 0.8, fontSize: '1.1rem' }}>Valorisez votre patrimoine data et automatisez vos processus grâce à l'Intelligence Artificielle.</p>
          </div>
        </div>
      </section>

      <section className="service-body">
        <div className="container">
          <div className="service-grid reveal active">
            <div className="service-main-content">
              <h3>Nos Solutions IA</h3>
              <p>Nous transformons la donnée brute en insights actionnables pour booster votre croissance.</p>
              
              <div className="features-list">
                <div className="feature-row"><i className="fas fa-brain"></i> <span>Machine Learning</span></div>
                <div className="feature-row"><i className="fas fa-language"></i> <span>NLP</span></div>
                <div className="feature-row"><i className="fas fa-eye"></i> <span>Computer Vision</span></div>
                <div className="feature-row"><i className="fas fa-chart-bar"></i> <span>Data Visualization</span></div>
              </div>
            </div>

            <div className="service-sidebar">
              <div className="cta-card-premium">
                <h3>Innovez maintenant</h3>
                <p>Ne laissez pas vos données dormir. Utilisez la puissance de l'IA pour automatiser votre succès.</p>
                <Link to="/contact" className="btn btn-primary" style={{ width: '100%' }}>EXPLORER LA DATA</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AIData;
