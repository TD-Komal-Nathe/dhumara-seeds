import { CheckCircle2, ArrowRight } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section-padding bg-cream">
      <div className="container about-container">
        <div className="about-image-wrapper" data-aos="fade-right">
          <img 
            src="/about-seeds.jpg" 
            alt="Farmer holding seeds" 
            className="about-img"
          />
          {/* <div className="about-decorative-card" data-aos="zoom-in" data-aos-delay="200">
            <span className="card-icon">{"\uD83C\uDF31"}</span>
            <div className="card-text">
              <strong>Seeds for</strong>
              <span>Better Tomorrow</span>
            </div>
          </div> */}
        </div>
        
        <div className="about-content" data-aos="fade-left">
          <span className="kicker">About Us</span>
          <h2 className="about-title">Dhumara Seeds</h2>
          <p className="about-description">
            At Dhumara Seeds, we are committed to providing high-quality Watermelon and Muskmelon seeds to farmers. Our focus is on better germination, strong plant growth and excellent fruit quality, helping farmers achieve higher productivity and better returns.
          </p>
          
          <ul className="about-features">
            <li data-aos="fade-up" data-aos-delay="100">
              <div className="feature-icon"><CheckCircle2 size={24} /></div>
              <span>Quality Assurance</span>
            </li>
            <li data-aos="fade-up" data-aos-delay="200">
              <div className="feature-icon"><CheckCircle2 size={24} /></div>
              <span>Research Driven</span>
            </li>
            <li data-aos="fade-up" data-aos-delay="300">
              <div className="feature-icon"><CheckCircle2 size={24} /></div>
              <span>High Germination Rate</span>
            </li>
            <li data-aos="fade-up" data-aos-delay="400">
              <div className="feature-icon"><CheckCircle2 size={24} /></div>
              <span>Farmer Focused</span>
            </li>
          </ul>
          
          <a href="/Dhumara-Seeds-Brochure.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline about-btn" data-aos="fade-up" data-aos-delay="500">
            Learn More <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
