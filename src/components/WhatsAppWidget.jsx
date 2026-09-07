import { MessageCircle } from 'lucide-react';
import './WhatsAppWidget.css';

const WhatsAppWidget = () => {
  const OWNER_WHATSAPP = "919730721626";
  const message = encodeURIComponent("Hello Dhumara Seeds! I have an inquiry.");
  const whatsappUrl = `https://wa.me/${OWNER_WHATSAPP}?text=${message}`;

  return (
    <a 
      href={whatsappUrl} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="whatsapp-widget"
      aria-label="Chat with us on WhatsApp"
    >
      <div className="whatsapp-icon-wrapper">
        <MessageCircle size={32} color="white" />
      </div>
    </a>
  );
};

export default WhatsAppWidget;
