import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: 'fa-code',
      title: 'Développement',
      items: ['Applications Web Modernes', 'Solutions Mobile iOS/Android', 'Architectures Microservices', 'API REST & GraphQL'],
      color: 'dark',
      link: '/services/developpement'
    },
    {
      icon: 'fa-brain',
      title: 'Intelligence Artificielle & Data',
      items: ['Machine Learning Appliqué', 'Analyse de Données Massive', 'NLP & Chatbots Intelligents', 'Vision par Ordinateur'],
      color: 'orange',
      link: '/services/ia-data'
    },
    {
      icon: 'fa-server',
      title: 'DevOps',
      items: ['CI/CD Automation', 'Infrastructure as Code', 'Docker & Kubernetes', 'Optimisation Performance'],
      color: 'dark',
      link: '/services/devops'
    },
    {
      icon: 'fa-shield-alt',
      title: 'Cyber-sécurité',
      items: ['Audit de Sécurité', 'Tests de Pénétration', 'Protection de Données', 'Gouvernance IT'],
      color: 'orange',
      link: '/services/cyber-securite'
    }
  ];

  return (
    <section className="services" id="services">
      <div className="section-title">
        <h2>Nos Métiers</h2>
        <p>Une expertise 360° pour couvrir l'ensemble de vos besoins technologiques.</p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <Link key={index} to={service.link} className={`service-card ${service.color} reveal`} style={{ textDecoration: 'none' }}>
            <i className={`fas ${service.icon}`}></i>
            <h3>{service.title}</h3>
            <ul>
              {service.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <div style={{ marginTop: 'auto', paddingTop: '20px', color: service.color === 'orange' ? 'white' : 'var(--primary)', fontWeight: '700', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '5px' }}>
              EN SAVOIR PLUS <i className="fas fa-arrow-right" style={{ fontSize: '0.7rem' }}></i>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Services;
