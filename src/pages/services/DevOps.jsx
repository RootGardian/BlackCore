import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const DevOps = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="service-detail-page">
      <section className="contact-hero">
        <div className="container">
          <div className="section-title reveal active">
            <h1 className="gradient-text" style={{ fontFamily: 'var(--font-serif)', fontSize: '4rem', marginBottom: '20px' }}>Agilité & Performance Infra</h1>
            <p style={{ maxWidth: '800px', margin: '0 auto', opacity: 0.8, fontSize: '1.1rem' }}>Optimisez vos cycles de déploiement et garantissez une haute disponibilité pour vos services.</p>
          </div>
        </div>
      </section>

      <section className="service-body">
        <div className="container">
          <div className="service-grid reveal active">
            <div className="service-main-content">
              <h3>Automatisation Cloud</h3>
              <p>Nous construisons des infrastructures résilientes et automatisées pour vos applications.</p>
              
              <div className="features-list">
                <div className="feature-row"><i className="fas fa-infinity"></i> <span>Pipelines CI/CD</span></div>
                <div className="feature-row"><i className="fas fa-cloud"></i> <span>Infrastructure as Code</span></div>
                <div className="feature-row"><i className="fas fa-dharmachakra"></i> <span>Kubernetes</span></div>
                <div className="feature-row"><i className="fas fa-chart-line"></i> <span>Observabilité</span></div>
              </div>
            </div>

            <div className="service-sidebar">
              <div className="cta-card-premium">
                <h3>Stabilisez votre Cloud</h3>
                <p>Réduisez les temps d'arrêt et accélérez vos cycles de mise à jour avec une culture DevOps forte.</p>
                <Link to="/contact" className="btn btn-primary" style={{ width: '100%' }}>OPTIMISER MON INFRA</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DevOps;
