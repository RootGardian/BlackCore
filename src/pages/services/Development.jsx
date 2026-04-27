import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Development = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="service-detail-page">
      <section className="contact-hero">
        <div className="container">
          <div className="section-title reveal active">
            <div className="hero-badge">DÉVELOPPEMENT</div>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '3.5rem', color: 'white' }}>Solutions Digitales Sur Mesure</h1>
            <p style={{ maxWidth: '800px', margin: '20px auto' }}>Nous concevons et développons des applications performantes, scalables et centrées sur l'utilisateur.</p>
          </div>
        </div>
      </section>

      <section className="service-body">
        <div className="container">
          <div className="contact-container reveal active service-grid">
            <div>
              <h3>Notre Expertise</h3>
              <p>De l'idée à la mise en production, nous vous accompagnons dans la création de vos outils digitaux les plus complexes.</p>
              <ul className="nav-links" style={{ alignItems: 'flex-start', marginTop: '20px', gap: '15px' }}>
                <li><i className="fas fa-check-circle" style={{ color: 'var(--primary)', marginRight: '10px' }}></i> Applications Web Modernes (React, Next.js)</li>
                <li><i className="fas fa-check-circle" style={{ color: 'var(--primary)', marginRight: '10px' }}></i> Solutions Mobile Hybrides & Natives</li>
                <li><i className="fas fa-check-circle" style={{ color: 'var(--primary)', marginRight: '10px' }}></i> Architectures Microservices Cloud-Native</li>
                <li><i className="fas fa-check-circle" style={{ color: 'var(--primary)', marginRight: '10px' }}></i> API REST & GraphQL robustes</li>
              </ul>
            </div>
            <div style={{ background: 'rgba(255,102,0,0.05)', padding: '40px', borderRadius: '20px', border: '1px solid rgba(255,102,0,0.1)' }}>
              <h3>Prêt à coder ?</h3>
              <p>Discutons de vos besoins techniques et trouvons ensemble la meilleure architecture pour votre projet.</p>
              <Link to="/contact" className="btn-pill" style={{ marginTop: '20px', display: 'inline-block' }}>Démarrer un projet</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Development;
