import { Leaf } from 'lucide-react';
import './BrandVision.css';

const BrandVision = () => {
  return (
    <section className="brand-vision" id="vision">
      <div className="container brand-vision-container">
        
        <div className="brand-logo-wrapper" data-aos="fade-down" data-aos-duration="1000">
          <div className="brand-icon-circle">
            <Leaf size={48} className="brand-leaf-icon" />
          </div>
        </div>

        <div className="brand-parallax-text" data-aos="zoom-in" data-aos-duration="1200">
          DHUMARA SEEDS PVT. LTD.
        </div>

        <div className="brand-tagline-wrapper" data-aos="fade-up" data-aos-delay="400">
          <p className="brand-tagline">
            Sowing the seeds of a <span>prosperous future</span>
          </p>
        </div>

      </div>
    </section>
  );
};

export default BrandVision;
