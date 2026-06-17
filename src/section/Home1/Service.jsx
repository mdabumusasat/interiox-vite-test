
import React from "react";
import { Link } from "react-router-dom";
import ServiceImage from "../../assets/images/resource/service1-1.jpg";

const services = [
  {
    icon: "flaticon-bed-2",
    title: "Architecture",
    delay: "100ms",
  },
  {
    icon: "flaticon-travel",
    title: "Interior Design",
    delay: "200ms",
  },
  {
    icon: "flaticon-wifi",
    title: "Urban Design",
    delay: "300ms",
  },
  {
    icon: "flaticon-breakfast",
    title: "Planning",
    delay: "400ms",
  },
  {
    icon: "flaticon-swimming-pool",
    title: "Décor Plan",
    delay: "500ms",
  },
];

export default function ServiceSection() {
  return (
    <section className="service-section">
      <div className="auto-container">
        <div className="sec-title text-center">
          <span className="sub-title">WHAT WE DO</span>
          <h2>Interiox Facilities</h2>
        </div>
        <div className="row">
          {services.map((service, index) => (
            <div
              className="service-block col-lg-4 col-sm-6"
              key={index}>
              <div
                className="inner-box wow fadeIn"
                data-wow-delay={service.delay}>
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
                    parturient ridiculus
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="service-block col-lg-4 col-sm-6">
            <div
              className="image-box wow fadeIn"
              data-wow-delay="600ms">
              <figure className="image overlay-anim">
                <img
                  src={ServiceImage}
                  alt="Service"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}