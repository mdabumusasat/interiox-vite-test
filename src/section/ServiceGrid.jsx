import React from "react";
import { Link } from "react-router-dom";
import ServiceImage from "../assets/images/resource/service1-1.jpg";

const services = [
  {
    id: 1,
    icon: "flaticon-bed-2",
    title: "Architecture",
    delay: "100ms",
  },
  {
    id: 2,
    icon: "flaticon-travel",
    title: "Interior Design",
    delay: "200ms",
  },
  {
    id: 3,
    icon: "flaticon-wifi",
    title: "Urban Design",
    delay: "300ms",
  },
  {
    id: 4,
    icon: "flaticon-breakfast",
    title: "Planning",
    delay: "400ms",
  },
  {
    id: 5,
    icon: "flaticon-swimming-pool",
    title: "Décor Plan",
    delay: "500ms",
  },
];

const ServiceSection = () => {
  return (
    <section className="service-section pt-120 pb-90">
      <div className="auto-container">
        <div className="row">
          {services.map((service) => (
            <div
              key={service.id}
              className="service-block col-lg-4 col-sm-6"
            >
              <div
                className="inner-box wow fadeIn"
                data-wow-delay={service.delay}
              >
                <div className="icon-box wow fadeInUp">
                  <div className="icon">
                    <i className={service.icon}></i>
                  </div>

                  <h4 className="title">
                    <Link to="/page-service-details">
                      {service.title}
                    </Link>
                  </h4>
                </div>

                <div className="content-box">
                  <div className="text">
                    Orci varius natoque penatibus magnis ders disney
                    parturient ridiculus.
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Image Block */}
          <div className="service-block col-lg-4 col-sm-6">
            <div
              className="image-box wow fadeIn"
              data-wow-delay="600ms"
            >
              <figure className="image overlay-anim">
                <img
                  src={ServiceImage}
                  alt="Service"
                  className="w-100"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;