const Services = () => {
  const services = [
    {
      icon: 'fa-code',
      title: 'Développement',
      items: ['Applications Web Modernes', 'Solutions Mobile iOS/Android', 'Architectures Microservices', 'API REST & GraphQL'],
      color: 'dark'
    },
    {
      icon: 'fa-brain',
      title: 'Intelligence Artificielle & Data',
      items: ['Machine Learning Appliqué', 'Analyse de Données Massive', 'NLP & Chatbots Intelligents', 'Vision par Ordinateur'],
      color: 'orange'
    },
    {
      icon: 'fa-server',
      title: 'DevOps',
      items: ['CI/CD Automation', 'Infrastructure as Code', 'Docker & Kubernetes', 'Optimisation Performance'],
      color: 'dark'
    },
    {
      icon: 'fa-shield-alt',
      title: 'Cyber-sécurité',
      items: ['Audit de Sécurité', 'Tests de Pénétration', 'Protection de Données', 'Gouvernance IT'],
      color: 'orange'
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
          <div key={index} className={`service-card ${service.color} reveal`}>
            <i className={`fas ${service.icon}`}></i>
            <h3>{service.title}</h3>
            <ul>
              {service.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
