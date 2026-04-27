import { useEffect } from 'react';

const Contact = () => {
  useEffect(() => {
    // Add the specific body class
    document.body.classList.add('contact-page-body');
    return () => {
      document.body.classList.remove('contact-page-body');
    };
  }, []);

  return (
    <main>
      {/* Contact Hero */}
      <section className="contact-hero">
        <div className="container">
          <div className="section-title reveal active">
            <div className="hero-badge" style={{ marginBottom: '20px' }}>CONTACT</div>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '3.5rem', color: 'white' }}>Parlons de votre projet</h1>
            <p style={{ maxWidth: '700px', margin: '20px auto' }}>Vous avez une idée ambitieuse ou un défi technique ? Notre équipe est prête à vous accompagner dans votre transformation digitale.</p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-page-form">
        <div className="container">
          <div className="contact-container reveal active">
            <div className="contact-info">
              <h3>Informations</h3>
              <p>Nous répondons généralement sous 24h ouvrées.</p>
              <div className="info-item">
                <i className="fas fa-envelope"></i>
                <span>ahmedbangoura852@gmail.com</span>
              </div>
              <div className="info-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>Dakar, Sénégal</span>
              </div>
              <div className="info-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>Casablanca, Maroc</span>
              </div>
              <div className="info-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>Conakry, Guinée</span>
              </div>


              <form action="https://formsubmit.co/ahmedbangoura852@gmail.com" method="POST" className="main-contact-form">
                {/* Honeypot */}
                <input type="text" name="_honey" style={{ display: 'none' }} />
                {/* Disable Captcha */}
                <input type="hidden" name="_captcha" value="false" />

                <div className="form-row">
                  <div className="form-group">
                    <label>Nom complet</label>
                    <input type="text" name="name" placeholder="Ex: Jean Dupont" required />
                  </div>
                  <div className="form-group">
                    <label>Adresse Email</label>
                    <input type="email" name="email" placeholder="Ex: jean@email.com" required />
                  </div>
                </div>
                <div className="form-group">
                  <label>Sujet</label>
                  <input type="text" name="subject" placeholder="De quoi souhaitez-vous discuter ?" required />
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea name="message" rows="6" placeholder="Décrivez votre projet en quelques mots..." required></textarea>
                </div>
                <button type="submit" className="btn-pill" style={{ width: '100%', marginTop: '10px' }}>Envoyer la demande <i className="fas fa-paper-plane"></i></button>
              </form>
            </div>
          </div>
      </section>
    </main>
  );
};

export default Contact;
