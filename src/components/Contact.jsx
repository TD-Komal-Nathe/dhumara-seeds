import { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import './Contact.css';

const OWNER_WHATSAPP = "917499070439";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    product: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear validation message when user starts typing
    if (formStatus.type === 'error') {
      setFormStatus({ type: '', message: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const { name, phone, email, product, message } = formData;

    // Validation
    if (!name.trim() || !phone.trim() || !product || !message.trim()) {
      setFormStatus({ 
        type: 'error', 
        message: 'Please fill in all required fields.' 
      });
      return;
    }

    // Phone validation (simple check for reasonable length)
    const phoneClean = phone.replace(/[^0-9+]/g, '');
    if (phoneClean.length < 10) {
      setFormStatus({ 
        type: 'error', 
        message: 'Please enter a valid phone number.' 
      });
      return;
    }

    // Generate WhatsApp message with explicit newlines and unicode emojis to prevent encoding issues
    const whatsappMessage = 
      "\uD83C\uDF31 New Enquiry - Dhumara Seeds\n\n" +
      "\uD83D\uDC64 Name: " + name.trim() + "\n" +
      "\uD83D\uDCDE Phone: " + phone.trim() + "\n" +
      "\uD83D\uDCE7 Email: " + (email.trim() || 'Not provided') + "\n" +
      "\uD83C\uDF31 Product: " + product + "\n\n" +
      "\uD83D\uDCAC Message:\n" + 
      message.trim() + "\n\n" +
      "Thank you.";

    const whatsappUrl = `https://wa.me/${OWNER_WHATSAPP}?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');

    // Show success message and reset form
    setFormStatus({ 
      type: 'success', 
      message: 'Your enquiry is ready in WhatsApp. Please press Send to submit it.' 
    });
    
    setFormData({
      name: '',
      email: '',
      phone: '',
      product: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <span className="kicker">Get In Touch</span>
          <h2>Contact Us</h2>
          <p>We'd love to hear from you! Reach out for inquiries, partnerships or support.</p>
        </div>

        <div className="contact-wrapper">
          <div className="contact-info-section" data-aos="fade-right">
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4>Location</h4>
                  <p>A/P- Saundare, Tal- Barshi, Dist - Solapur, Maharashtra. 413401</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <Phone size={24} />
                </div>
                <div>
                  <h4>Phone</h4>
                  <p>+91 97307 21626</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <Mail size={24} />
                </div>
                <div>
                  <h4>Email</h4>
                  <p>info@dhumaraseeds.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-section" data-aos="fade-left">
            <form className="contact-form" onSubmit={handleSubmit}>
              
              {formStatus.message && (
                <div className={`form-alert form-alert-${formStatus.type}`}>
                  {formStatus.message}
                </div>
              )}

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    placeholder="Enter your name" 
                    value={formData.name}
                    onChange={handleChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder="Enter your email" 
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    placeholder="Enter your phone number" 
                    value={formData.phone}
                    onChange={handleChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="product">Select Product</label>
                  <select 
                    id="product" 
                    name="product" 
                    value={formData.product}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>Select a product</option>
                    <option value="Watermelon Seeds">Watermelon Seeds</option>
                    <option value="Muskmelon Seeds">Muskmelon Seeds</option>
                    <option value="General Enquiry">General Enquiry</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="4" 
                  placeholder="Type your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary submit-btn">
                Send Enquiry <Send size={18} style={{ marginLeft: '4px' }} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
