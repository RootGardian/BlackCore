const Partners = () => {
  const logos = [
    { src: '/ynov.png', alt: 'Ynov Campus' },
    { src: '/DM.png', alt: 'Dakar Marketing' },
    { src: '/DarkSync_Africa.jpeg', alt: 'DarkSync Africa' },
    { src: '/ElixirCasaDakar.png', alt: 'Elixir Casa Dakar' },
    { src: '/Morocco_shopper.jpg', alt: 'Morocco Shopper' },
    { src: '/Nimba_Fragrance.png', alt: 'Nimba Fragrance' },
    { src: '/café_ikfinii.png', alt: 'Café Ikfinii' },
    { src: '/Maison_Hathor.png', alt: 'Maison Hathor' }
  ];

  return (
    <section className="partners-trust">
      <div className="container">
        <h2 className="trust-title">Grandes et petites entreprises font confiance aux services de BlackCore Tech</h2>
        <div className="trust-grid">
          {logos.map((logo, index) => (
            <div key={index} className="trust-logo reveal">
              <img src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
