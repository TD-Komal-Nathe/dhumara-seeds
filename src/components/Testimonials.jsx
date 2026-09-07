import { Quote, Star } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './Testimonials.css';

const testimonialsData = [
  {
    id: 1,
    name: 'Suresh Patil',
    role: 'Farmer, Pune',
    mobile: '+91 98765 43210',
    quote: '"Dhumara Seeds che watermelon seeds khup changle ahet. Fruit size motha ani gunwatta pan uttam!"',
    avatar: '/farmer-1.jpg'
  },
  {
    id: 2,
    name: 'Rajesh Jadhav',
    role: 'Farmer, Nashik',
    mobile: '+91 98234 56789',
    quote: '"Muskmelon cha taste ani aroma excellent ala. Next season pan mi Dhumara Seeds use karnaar."',
    avatar: '/farmer-2.jpg'
  },
  {
    id: 3,
    name: 'Meena Shinde',
    role: 'Farmer, Ahmednagar',
    mobile: '+91 97654 32109',
    quote: '"High germination rate ani changla yield. Dhumara Seeds la majhi full recommendation!"',
    avatar: '/farmer-3.jpg'
  },
  {
    id: 4,
    name: 'Vilas Kadam',
    role: 'Farmer, Solapur',
    mobile: '+91 94222 12345',
    quote: '"Pratap Watermelon variety is simply the best. The rind is firm and the yield is extremely high."',
    avatar: '/farmer-4.jpg'
  },
  {
    id: 5,
    name: 'Sandip Pawar',
    role: 'Farmer, Barshi',
    mobile: '+91 99234 98765',
    quote: '"I am using Rubi Muskmelon seeds. The fruit has an amazing rich flavor and very uniform shape. Fully satisfied!"',
    avatar: '/farmer-5.jpg'
  },
  {
    id: 6,
    name: 'Kavita Deshmukh',
    role: 'Farmer, Latur',
    mobile: '+91 95525 11223',
    quote: '"Excellent support and premium quality seeds. My harvest this year has been the best so far. Highly trusted!"',
    avatar: '/farmer-6.jpg'
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding bg-cream">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <span className="kicker">What Farmers Say</span>
          <h2>Testimonials</h2>
          <p>Trusted by farmers who grow with Dhumara Seeds.</p>
        </div>

        <div className="testimonials-slider-wrapper" data-aos="fade-up" data-aos-delay="200">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              }
            }}
            className="testimonials-swiper"
          >
            {testimonialsData.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="testimonial-card">
                  <div className="quote-icon-wrapper">
                    <Quote size={28} className="quote-icon" />
                  </div>
                  <p className="testimonial-text">{testimonial.quote}</p>
                  
                  <div className="testimonial-author">
                    <img src={testimonial.avatar} alt={testimonial.name} className="author-avatar" />
                    <div className="author-info">
                      <h4 className="author-name">{testimonial.name}</h4>
                      <span className="author-role">{testimonial.role}</span>
                      <span className="author-mobile">Mobile: {testimonial.mobile}</span>
                      <div className="stars">
                        {[1, 2, 3, 4, 5].map(star => (
                          <Star key={star} size={14} fill="#E9A25A" color="#E9A25A" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
