
import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Service1 from "../../assets/images/resource/service2-1.jpg";
import Service2 from "../../assets/images/resource/service2-2.jpg";
import Service3 from "../../assets/images/resource/service2-3.jpg";
import Service4 from "../../assets/images/resource/service2-4.jpg";

export default function ServiceSectionThree() {
  const services = [
    {
      id: 1,
      title: "Interior work",
      image: Service1,
    },
    {
      id: 2,
      title: "Kitchen Interior",
      image: Service2,
    },
    {
      id: 3,
      title: "Urban Design",
      image: Service3,
    },
    {
      id: 4,
      title: "Architecture",
      image: Service4,
    },
    {
      id: 5,
      title: "Urban Interior",
      image: Service2,
    },
  ];

  return (
    <section className="service-section-three">
      <div className="auto-container">
        <div className="sec-title wow fadeInUp">
          <div className="row">
            <div className="col-lg-6">
              <span className="sub-title">
                Interiox SERVICES
              </span>
              <h2>
                We Provide More Then Just Quality
                Services
              </h2>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <div className="text">
                Interiox in a powerful way of just
                not an only professions, however,
                in a passion for our Company. We
                have to a tendency to believe the
                idea that smart.
              </div>
            </div>
          </div>
        </div>
        {/* Slider */}
        <div className="carousel-outer">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              576: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 4,
              },
            }}
            className="service-three-slider">
            {services.map((service) => (
              <SwiperSlide key={service.id}>
                <div className="service-block-three">
                  <div className="inner-box">
                    <figure className="image">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-100"
                      />
                    </figure>

                    <div className="content-box">
                      <h4 className="title">
                        <Link to="/page-service-details">
                          {service.title}
                        </Link>
                      </h4>
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
}