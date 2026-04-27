import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <div className="hero-badge reveal">L'EXCELLENCE TECHNOLOGIQUE • 2024</div>
        <h1 className="reveal">Propulsez votre <span className="gradient-text">Vision</span> vers le Futur</h1>
        <p className="reveal">Experts en ingénierie logicielle et solutions technologiques avancées. Nous transformons vos idées complexes en réalités digitales performantes.</p>
        <div className="hero-btns reveal">
          <a href="#services" className="btn btn-primary">DÉCOUVRIR NOS MÉTIERS</a>
          <Link to="/contact" className="btn btn-outline">NOUS CONTACTER <i className="fas fa-chevron-right" style={{ marginLeft: '10px', fontSize: '0.8rem' }}></i></Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
