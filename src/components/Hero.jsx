import { ArrowRight, PlayCircle, ShieldCheck, TrendingUp, Users, Sprout } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
        <img 
          src="/hero-banner.jpg" 
          alt="Agricultural Field with Watermelon and Muskmelon" 
          className="hero-bg-img"
        />
      </div>
      
      <div className="container hero-container">
        <div className="hero-content">
          <span className="hero-eyebrow" data-aos="fade-up" data-aos-delay="100">
            <span className="leaf-icon">{"\uD83C\uDF31"}</span> PREMIUM QUALITY SEEDS
          </span>
          <h1 className="hero-title" data-aos="fade-up" data-aos-delay="200">
            Growing Sweet <br />
            Futures <span className="highlight-orange">Together</span>
          </h1>
          <p className="hero-description" data-aos="fade-up" data-aos-delay="300">
            High-quality Watermelon and Muskmelon seeds for healthier crops, better yield and a greener tomorrow.
          </p>
          
          <div className="hero-actions" data-aos="fade-up" data-aos-delay="400">
            <a href="#products" className="btn btn-primary">
              Explore Our Seeds <ArrowRight size={18} />
            </a>
            {/* <a href="#about" className="btn btn-outline hero-video-btn">
              <PlayCircle size={20} className="icon-orange" /> Watch Video
            </a> */}
          </div>

          <div className="hero-stats" data-aos="fade-up" data-aos-delay="500">
            <div className="stat-item">
              <div className="stat-icon-wrapper">
                <ShieldCheck size={20} />
              </div>
              <span className="stat-text">Premium<br/>Quality Seeds</span>
            </div>
            <div className="stat-item">
              <div className="stat-icon-wrapper">
                <TrendingUp size={20} />
              </div>
              <span className="stat-text">High<br/>Germination Rate</span>
            </div>
            <div className="stat-item">
              <div className="stat-icon-wrapper">
                <Users size={20} />
              </div>
              <span className="stat-text">Farmer<br/>Trusted</span>
            </div>
            <div className="stat-item">
              <div className="stat-icon-wrapper">
                <Sprout size={20} />
              </div>
              <span className="stat-text">Better<br/>Yield</span>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
