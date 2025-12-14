import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-socials">
        <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
          <i className="fab fa-whatsapp"></i>
        </a>
        <a href="https://tiktok.com/@yourprofile" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
          <i className="fab fa-tiktok"></i>
        </a>
        <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://forms.gle/your-google-form" target="_blank" rel="noopener noreferrer" aria-label="Contact Us">
          <i className="fas fa-envelope"></i>
        </a>
      </div>
      <div className="footer-links">
        <a href="#" className="footer-btn">Privacy Policy</a>
        <a href="#" className="footer-btn">Terms of Service</a>
      </div>
      <div className="footer-copy">© {new Date().getFullYear()} Voice Line Services. All rights reserved.</div>
    </footer>
  );
}

export default Footer;
