import { Leaf } from 'lucide-react';
import './Footer.css';

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const YoutubeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
);

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);

const Footer = () => {
  return (
    <footer className="footer bg-dark-green">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand" data-aos="fade-up" data-aos-delay="100">
            <a href="#home" className="logo footer-logo">
              <Leaf className="logo-icon-footer" size={36} />
              <div className="logo-text-footer">
                <span className="logo-title-footer">Dhumara</span>
                <span className="logo-subtitle-footer">Seeds</span>
              </div>
            </a>
            <p className="footer-desc">
              We provide carefully selected seeds that help farmers grow healthier crops, improve productivity and build a better tomorrow.
            </p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Facebook"><FacebookIcon /></a>
              <a href="#" className="social-link" aria-label="Instagram"><InstagramIcon /></a>
              <a href="#" className="social-link" aria-label="YouTube"><YoutubeIcon /></a>
              <a href="#" className="social-link" aria-label="Twitter"><TwitterIcon /></a>
            </div>
          </div>

          <div className="footer-links-group" data-aos="fade-up" data-aos-delay="200">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-list">
              <li><a href="#about">About Us</a></li>
              <li><a href="#products">Our Seeds</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>

          <div className="footer-links-group" data-aos="fade-up" data-aos-delay="300">
            <h4 className="footer-title">Products</h4>
            <ul className="footer-list">
              <li><a href="#products">Watermelon Seeds</a></li>
              <li><a href="#products">Muskmelon Seeds</a></li>
            </ul>
          </div>

          <div className="footer-links-group" data-aos="fade-up" data-aos-delay="400">
            <h4 className="footer-title">Contact</h4>
            <ul className="footer-list">
              <li>+91 97307 21626</li>
              <li>info@dhumaraseeds.com</li>
              <li>A/P- Saundare, Tal- Barshi, Solapur, Maharashtra. 413401</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom" data-aos="fade-up" data-aos-delay="500">
          <p>&copy; 2026 Dhumara Seeds. All rights reserved.</p>
          <p className="footer-tagline">Growing Better, Together. <span className="leaf-icon-small">{"\uD83C\uDF31"}</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
