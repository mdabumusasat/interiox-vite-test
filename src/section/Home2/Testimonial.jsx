
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import TestiThumb1 from "../../assets/images/resource/testi2-thumb1.png";
import TestiThumb2 from "../../assets/images/resource/testi2-thumb2.png";
import TestiThumb3 from "../../assets/images/resource/testi2-thumb3.png";
import QuoteIcon from "../../assets/images/icons/testi-shape1.png";

const testimonials = [
  {
    id: 1,
    text: "\"Nash Baker Architects transformed our Grade II Listed home in Chelsea with their innovative design and meticulous attention to detail. The entire process, from obtaining planning approvals to project management, was handled seamlessly.\"",
    name: "Jenny Wilson",
    role: "Business Owner",
    thumb: TestiThumb1,
  },
  {
    id: 2,
    text: "\"Nash Baker Architects transformed our Grade II Listed home in Chelsea with their innovative design and meticulous attention to detail. The entire process, from obtaining planning approvals to project management, was handled seamlessly.\"",
    name: "Marvin McKinney",
    role: "President of Sales",
    thumb: TestiThumb2,
  },
  {
    id: 3,
    text: "\"Nash Baker Architects transformed our Grade II Listed home in Chelsea with their innovative design and meticulous attention to detail. The entire process, from obtaining planning approvals to project management, was handled seamlessly.\"",
    name: "Jenny Wilson",
    role: "Business Owner",
    thumb: TestiThumb3,
  },
];

export default function TestimonialSectionTwo() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <section className="testimonial-section-two">
      <div className="auto-container">
        <div className="sec-title text-center wow fadeInUp">
          <span className="sub-title">OUR CUSTOMER FEEDBACK</span>
          <h2>What Client's Say?</h2>
        </div>
        <div className="row">
          <div className="testimonials overflow-hidden col-lg-12">
            <Swiper
              modules={[Navigation, Thumbs]}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              className="testimonial-slider-content">
              {testimonials.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="testimonial-block-two">
                    <div className="inner-box">
                      <div className="quote-icon">
                        <img src={QuoteIcon} alt="quote" />
                      </div>
                      <div className="text">{item.text}</div>
                      <div className="info-box">
                        <h5 className="name">{item.name}</h5>
                        <span className="designation">{item.role}</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={3}
              watchSlidesProgress={true}
              className="testimonial-thumbs mx-auto">
              {testimonials.map((item) => (
                <SwiperSlide key={item.id}>
                  <img src={item.thumb} alt={item.name} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
