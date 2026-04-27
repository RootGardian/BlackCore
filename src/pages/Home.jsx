import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Partners from '../components/Partners';
import { useEffect } from 'react';

const Home = () => {
  // Reveal logic is now handled globally in App.jsx
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <Hero />
      
      {/* Stats & Skills Section */}
      <section className="stats-skills" id="about">
        <div className="stats-grid">
          <div className="stats-card">
            <h2>+50</h2>
            <p>Projets Livrés avec Succès</p>
          </div>
          <div className="skills-content">
            <h2>Innovation & Performance</h2>
            <p>Notre équipe pluridisciplinaire maîtrise les technologies les plus pointues pour garantir la pérennité de vos infrastructures IT.</p>

            <SkillBar label="Développement Web & Mobile" percentage="95%" />
            <SkillBar label="Intelligence Artificielle & Data" percentage="70%" />
            <SkillBar label="DevOps" percentage="90%" />
            <SkillBar label="Cyber-sécurité" percentage="80%" />
          </div>
        </div>
      </section>

      <Services />
      <Partners />

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Un nouveau projet ?</h2>
          <Link to="/contact" className="btn-pill">Nous en parler <i className="fas fa-chevron-right"></i></Link>
          <div className="social-links">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </section>
    </main>
  );
};

const SkillBar = ({ label, percentage }) => (
  <div className="skill-bar-container">
    <div className="skill-info">
      <span>{label}</span>
      <span>{percentage}</span>
    </div>
    <div className="skill-bar">
      <div className="skill-progress active" style={{ width: percentage }}></div>
    </div>
  </div>
);

export default Home;
