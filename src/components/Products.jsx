import { ArrowRight, CheckCircle2 } from 'lucide-react';
import './Products.css';

const productsData = [
  {
    id: 1,
    title: 'Watermelon Seeds',
    tag: 'Premium Quality',
    description: 'Strong, healthy and high-yielding watermelon seeds for better fruit size, sweetness and quality.',
    specs: {
      variety: 'Pratap',
      germination: '60% (Min)',
      physicalPurity: '98% (Min)',
      geneticPurity: '95% (Min)'
    },
    features: ['Excellent Fruit Size', 'Deep Red Flesh', 'High Yield', 'Disease Resistant'],
    mainImage: '/watermelon-product.jpg',
    seedImage: '/watermelon-seeds.jpg',
    pdfUrl: '/Dhumara_seeds_Watermelon.pdf'
  },
  {
    id: 2,
    title: 'Muskmelon Seeds',
    tag: 'Sweet Variety',
    description: 'Premium muskmelon seeds for sweet taste, strong aroma and high productivity.',
    specs: {
      variety: 'Rubi',
      germination: '60% (Min)',
      physicalPurity: '98% (Min)',
      geneticPurity: '95% (Min)'
    },
    features: ['Sweet Taste', 'Rich Aroma', 'Uniform Fruit Shape', 'High Germination'],
    mainImage: '/muskmelon-product.jpg',
    seedImage: '/muskmelon-seeds.jpg',
    pdfUrl: '/Dhumara_seeds_Muskmelon.pdf'
  }
];

const Products = () => {
  return (
    <section id="products" className="section-padding bg-light-green">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <span className="kicker">Our Seeds</span>
          <h2>Our Products</h2>
          <p>Currently we offer premium quality seeds for:</p>
        </div>

        <div className="products-grid">
          {productsData.map((product, index) => (
            <div key={product.id} className="product-card" data-aos="fade-up" data-aos-delay={index * 150}>
              <div className="product-image-section">
                <img src={product.mainImage} alt={product.title} className="product-main-img" />
                <div className="product-seed-img-wrapper">
                  <img src={product.seedImage} alt={`${product.title} seeds`} className="product-seed-img" />
                </div>
              </div>
              
              <div className="product-content">
                <h3 className="product-title">{product.title}</h3>
                <p className="product-desc">{product.description}</p>
                
                <div className="product-specs">
                  <div className="spec-item">
                    <span className="spec-label">Variety:</span>
                    <span className="spec-value">{product.specs.variety}</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Germination:</span>
                    <span className="spec-value">{product.specs.germination}</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Phy. Purity:</span>
                    <span className="spec-value">{product.specs.physicalPurity}</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Gen. Purity:</span>
                    <span className="spec-value">{product.specs.geneticPurity}</span>
                  </div>
                </div>

                <ul className="product-features">
                  {product.features.map((feature, idx) => (
                    <li key={idx}>
                      <CheckCircle2 size={16} className="product-feature-icon" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <a href={product.pdfUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline product-btn">
                  View Details <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
