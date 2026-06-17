
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import TestimonialImage from "../../assets/images/resource/testi1-1.jpg";
import TestimonialBg from "../../assets/images/background/bg-testi1.jpg";
import QuoteIcon from "../../assets/images/icons/comas.png";

const testimonials = [
  {
    image: TestimonialImage,
    name: "Leslie Alexander",
    designation: "Businessman",
    text: `The utanislen quam nestibulum ac quame odion elementum sceisue
    the aucan. Orci varius natoque penatibus et magnis disney
    parturient monte nascete ridiculus mus nellen etesque habitant
    morbine.`,
  },
  {
    image: TestimonialImage,
    name: "Leslie Alexander",
    designation: "Businessman",
    text: `The utanislen quam nestibulum ac quame odion elementum sceisue
    the aucan. Orci varius natoque penatibus et magnis disney
    parturient monte nascete ridiculus mus nellen etesque habitant
    morbine.`,
  },
  {
    image: TestimonialImage,
    name: "Leslie Alexander",
    designation: "Businessman",
    text: `The utanislen quam nestibulum ac quame odion elementum sceisue
    the aucan. Orci varius natoque penatibus et magnis disney
    parturient monte nascete ridiculus mus nellen etesque habitant
    morbine.`,
  },
];

export default function TestimonialSection() {
  return (
    <section className="testimonial-section">
      <div
        className="bg bg-image"
        style={{
          backgroundImage: `url(${TestimonialBg})`,
        }}
      />
      <div className="auto-container">
        <div className="row">
          <div className="col-lg-4 hide-on-tablet"></div>
          <div className="testimonial-column col-lg-8 col-md-12">
            <div className="inner-column">
              <div className="sec-title light wow fadeInUp">
                <span className="sub-title">
                  What says for customer
                </span>
                <h2>What Client's Say?</h2>
              </div>
              <Swiper
                modules={[Pagination, Autoplay]}
                slidesPerView={1}
                loop={true}
                speed={1000}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                className="testimonial-slider wow fadeInUp">
                {testimonials.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="testimonial-slide">
                      <div className="content-box">
                        <div
                          className="image-box"
                          data-animation-in="fadeInLeft"
                          data-delay-in="0.01">
                          <figure className="thumb">
                            <img
                              src={item.image}
                              alt={item.name}
                            />
                          </figure>
                        </div>
                        <div className="info-box">
                          <ul
                            className="rating-list"
                            data-animation-in="fadeInUp"
                            data-delay-in="0.01">
                            {[...Array(5)].map((_, i) => (
                              <li key={i}>
                                <i className="fa-solid fa-star"></i>
                              </li>
                            ))}
                          </ul>
                          <div
                            className="text"
                            data-animation-in="fadeInUp"
                            data-delay-in="0.2">
                            {item.text}
                          </div>
                          <div
                            className="auther-info"
                            data-animation-in="fadeInUp"
                            data-delay-in="0.3">
                            <h4 className="title">
                              {item.name}
                            </h4>
                            <span className="designation">
                              {item.designation}
                            </span>
                          </div>
                          <div
                            className="icon-box"
                            data-animation-in="fadeInUp"
                            data-delay-in="0.4">
                            <figure className="image">
                              <img
                                src={QuoteIcon}
                                alt="Quote"
                              />
                            </figure>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}