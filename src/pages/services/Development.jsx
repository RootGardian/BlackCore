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
            <h1 className="gradient-text" style={{ fontFamily: 'var(--font-serif)', fontSize: '4rem', marginBottom: '20px' }}>Solutions Digitales Sur Mesure</h1>
            <p style={{ maxWidth: '800px', margin: '0 auto', opacity: 0.8, fontSize: '1.1rem' }}>Nous concevons et développons des applications performantes, scalables et centrées sur l'utilisateur.</p>
          </div>
        </div>
      </section>

      <section className="service-body">
        <div className="container">
          <div className="service-grid reveal active">
            <div className="service-main-content">
              <h3>Notre Expertise</h3>
              <p>De l'idée à la mise en production, nous vous accompagnons dans la création de vos outils digitaux les plus complexes.</p>
              
              <div className="features-list">
                <div className="feature-row"><i className="fas fa-code"></i> <span>Applications Web Modernes</span></div>
                <div className="feature-row"><i className="fas fa-mobile-alt"></i> <span>Solutions Mobile</span></div>
                <div className="feature-row"><i className="fas fa-layer-group"></i> <span>Microservices</span></div>
                <div className="feature-row"><i className="fas fa-link"></i> <span>API REST & GraphQL</span></div>
              </div>
            </div>

            <div className="service-sidebar">
              <div className="cta-card-premium">
                <h3>Prêt à coder ?</h3>
                <p>Confiez-nous vos projets les plus ambitieux. Nous transformons votre vision en code performant.</p>
                <Link to="/contact" className="btn btn-primary" style={{ width: '100%' }}>LANCER MON PROJET</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Development;
