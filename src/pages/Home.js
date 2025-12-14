import React from 'react';

function Home() {
  return (
    <section className="home-section">
      <h1>Welcome to Voice Line Services</h1>
      <p>
        Voice Line Services offers professional interpretation solutions: Over-the-Phone (OPI), Video Remote (VRI), and In Person. Our mission is to bridge language barriers with accuracy, confidentiality, and care.
      </p>
      <div className="services-list">
        <div id="opi" className="service-card">
          <h2>OPI</h2>
          <p>Over-the-Phone Interpretation for instant, reliable communication.</p>
        </div>
        <div id="vri" className="service-card">
          <h2>VRI</h2>
          <p>Video Remote Interpretation for visual and spoken clarity.</p>
        </div>
        <div id="inperson" className="service-card">
          <h2>In Person</h2>
          <p>On-site interpretation for personal, face-to-face service.</p>
        </div>
      </div>
    </section>
  );
}

export default Home;
