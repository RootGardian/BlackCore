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
            <div className="hero-badge">DEVOPS</div>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '3.5rem', color: 'white' }}>Agilité & Performance Infrastructure</h1>
            <p style={{ maxWidth: '800px', margin: '20px auto' }}>Optimisez vos cycles de déploiement et garantissez une haute disponibilité pour vos services.</p>
          </div>
        </div>
      </section>

      <section className="service-body">
        <div className="container">
          <div className="contact-container reveal active service-grid">
            <div>
              <h3>Automatisation Cloud</h3>
              <p>Nous construisons des infrastructures résilientes et automatisées pour vos applications.</p>
              <ul className="nav-links" style={{ alignItems: 'flex-start', marginTop: '20px', gap: '15px' }}>
                <li><i className="fas fa-check-circle" style={{ color: 'var(--primary)', marginRight: '10px' }}></i> Pipelines CI/CD (GitHub Actions, GitLab)</li>
                <li><i className="fas fa-check-circle" style={{ color: 'var(--primary)', marginRight: '10px' }}></i> Infrastructure as Code (Terraform, Ansible)</li>
                <li><i className="fas fa-check-circle" style={{ color: 'var(--primary)', marginRight: '10px' }}></i> Orchestration Docker & Kubernetes</li>
                <li><i className="fas fa-check-circle" style={{ color: 'var(--primary)', marginRight: '10px' }}></i> Monitoring & Observabilité Temps Réel</li>
              </ul>
            </div>
            <div style={{ background: 'rgba(255,102,0,0.05)', padding: '40px', borderRadius: '20px', border: '1px solid rgba(255,102,0,0.1)' }}>
              <h3>Stabilisez votre Cloud</h3>
              <p>Éliminez les frictions entre développement et opérations pour accélérer votre mise sur le marché.</p>
              <Link to="/contact" className="btn-pill" style={{ marginTop: '20px', display: 'inline-block' }}>Optimiser mon infra</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DevOps;
