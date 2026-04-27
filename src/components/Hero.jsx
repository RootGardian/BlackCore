import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <div className="hero-badge">BLACKCORE TECH • INNOVATION DIGITALE</div>
        <h1>Propulsez votre Vision vers le Futur</h1>
        <p>Experts en ingénierie logicielle et solutions technologiques avancées. Nous transformons vos idées complexes en réalités digitales performantes.</p>
        <div className="hero-btns">
          <a href="#services" className="btn btn-primary">DÉCOUVRIR NOS SERVICES</a>
          <Link to="/contact" className="btn btn-outline"><i className="fas fa-comment-alt"></i> NOUS CONTACTER</Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
