
import React from "react";
import { Link } from "react-router-dom";

export default function FeatureSectionThree() {
  const features = [
    {
      id: 1,
      icon: "flaticon-travel",
      title: "Architecture",
      delay: "100ms",
      description:
        "Architecture is more than just designing buildings; it is about creating spaces that inspire, connect",
    },
    {
      id: 2,
      icon: "flaticon-wifi",
      title: "Interior",
      delay: "200ms",
      description:
        "Interior design is the art of transforming spaces into functional, beautiful, and personalized environments",
    },
    {
      id: 3,
      icon: "flaticon-bed-2",
      title: "Planning",
      delay: "300ms",
      description:
        "Planning is the foundation of every successful project, transforming ideas into actionable steps that lead",
    },
  ];

  return (
    <section className="feature-section-three">
      <div className="auto-container">
        <div className="row">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="feature-block-three col-lg-4 col-sm-6">
              <div
                className="inner-box wow fadeIn"
                data-wow-delay={feature.delay}>
                <div className="icon-box">
                  <i className={feature.icon}></i>
                </div>
                <div className="content-box">
                  <h4 className="title">
                    <Link to="/page-service-details">
                      {feature.title}
                    </Link>
                  </h4>
                  <div className="text">
                    {feature.description}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}