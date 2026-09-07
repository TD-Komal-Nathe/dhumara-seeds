import { ArrowRight } from 'lucide-react';
import './Gallery.css';

const galleryImages = [
  { id: 1, title: 'Seeds', size: 'small', src: '/about-seeds.jpg' },
  { id: 2, title: 'Fresh Produce', size: 'medium', src: '/watermelon-product.jpg' },
  { id: 3, title: 'Pratap Growth', size: 'large', src: '/pratap_watermelons_gallery.jpg' },
  { id: 4, title: 'Quality Harvest', size: 'medium', src: '/muskmelon-product.jpg' },
  { id: 5, title: 'Rubi Muskmelon', size: 'small', src: '/rubi_muskmelons_gallery.jpg' },
];

const Gallery = () => {
  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="container">
        <div className="gallery-header" data-aos="fade-up">
          <div className="section-title gallery-title-left">
            <span className="kicker">Our Gallery</span>
            <h2>From Our Fields</h2>
            <p>A glimpse of our seeds, plants and fresh harvest.</p>
          </div>
          {/* <a href="#gallery" className="btn btn-outline gallery-view-all">
            View All Photos <ArrowRight size={16} />
          </a> */}
        </div>

        <div className="gallery-grid">
          {galleryImages.map((img, index) => (
            <div key={img.id} className={`gallery-item ${img.size}`} data-aos="zoom-in" data-aos-delay={index * 100}>
              <img src={img.src} alt={img.title} />
              <div className="gallery-overlay">
                <span className="gallery-item-title">{img.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
