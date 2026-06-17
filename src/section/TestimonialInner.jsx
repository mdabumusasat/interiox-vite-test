import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import TestiThumb1 from "../assets/images/resource/testi2-thumb1.png";
import TestiThumb2 from "../assets/images/resource/testi2-thumb2.png";

const testimonials = [
  {
    id: 1,
    image: TestiThumb1,
    name: "Jenny Wilson",
    designation: "Business Owner",
    text: "Lorem ipsum dolor amet consectetur adipiscing accumsan pellentesque litora vitae parturient malesuada himenaeos tempor.",
  },
  {
    id: 2,
    image: TestiThumb2,
    name: "Ralph Edwards",
    designation: "Nursing Assistant",
    text: "Lorem ipsum dolor amet consectetur adipiscing accumsan pellentesque litora vitae parturient malesuada himenaeos tempor.",
  },
  {
    id: 3,
    image: TestiThumb1,
    name: "Ralph Edwards",
    designation: "Nursing Assistant",
    text: "Lorem ipsum dolor amet consectetur adipiscing accumsan pellentesque litora vitae parturient malesuada himenaeos tempor.",
  },
  {
    id: 4,
    image: TestiThumb2,
    name: "Ralph Edwards",
    designation: "Nursing Assistant",
    text: "Lorem ipsum dolor amet consectetur adipiscing accumsan pellentesque litora vitae parturient malesuada himenaeos tempor.",
  },
];

const TestimonialSectionThree = () => {
  return (
    <section className="testimonial-section-three">
      <div className="auto-container">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          speed={1000}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            365: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            991: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
          className="testimonial-carousel-two slick-gap-30"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="testimonial-block-three">
                <div className="inner-box">
                  <div className="content-box">
                    <span className="icon fa fa-quote-right"></span>

                    <div className="text">
                      {item.text}
                    </div>
                  </div>

                  <div className="info-box">
                    <figure className="thumb">
                      <img
                        src={item.image}
                        alt={item.name}
                      />
                    </figure>

                    <div>
                      <h6 className="name">{item.name}</h6>
                      <span className="designation">
                        {item.designation}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialSectionThree;