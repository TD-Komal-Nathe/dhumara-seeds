import { useState, useEffect } from 'react';
import { Menu, X, Leaf } from 'lucide-react';
import './Header.css';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#about' },
  { name: 'Our Seeds', href: '#products' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact Us', href: '#contact' }
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // Handle header background transition
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Handle active link tracking
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 150; // offset

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // Trigger once on load
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    setIsMobileMenuOpen(false);
    setActiveSection(sectionId);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <a href="#home" className="logo">
          <Leaf className="logo-icon" size={32} />
          <div className="logo-text">
            <span className="logo-title">Dhumara</span>
            <span className="logo-subtitle">Seeds</span>
          </div>
        </a>

        <nav className={`nav-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            {navLinks.map((link) => {
              const sectionId = link.href.substring(1);
              return (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className={`nav-link ${activeSection === sectionId ? 'active' : ''}`} 
                    onClick={() => handleNavClick(sectionId)}
                  >
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="header-right">
          <a href="#contact" className="btn btn-secondary get-in-touch-btn">
            Get In Touch
          </a>
          <button 
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
