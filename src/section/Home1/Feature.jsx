
import React from "react";
import { Link } from "react-router-dom";
import Feature1 from "../../assets/images/resource/feature1-1.jpg";
import Feature2 from "../../assets/images/resource/feature1-2.jpg";
import Feature3 from "../../assets/images/resource/feature1-3.jpg";
import FeatureIcon from "../../assets/images/resource/icon1.png";

const features = [
  {
    subtitle: "MODERN",
    title: "3D Visualizations",
    image: Feature1,
    reverse: false,
  },
  {
    subtitle: "DISCOVER",
    title: "Panoramic Glass",
    image: Feature2,
    reverse: true,
  },
  {
    subtitle: "MODERN",
    title: "Process Breakdown",
    image: Feature3,
    reverse: false,
  },
];

export default function FeatureSection() {
  return (
    <section className="feature-section">
      <div className="auto-container">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`row feature-row g-0 ${
              feature.reverse ? "right-align" : ""
            }`}>
            {!feature.reverse && (
              <div className="image-column col-lg-4">
                <div className="inner-column">
                  <div className="image-box">
                    <figure
                      className="image overlay-anim wow">
                      <img src={feature.image} alt={feature.title} />
                    </figure>
                  </div>
                </div>
              </div>
            )}
            <div className="content-column col-lg-8">
              <div className="inner-column">
                <div className="content-box">
                  <div className="sec-title">
                    <span className="sub-title">
                      {feature.subtitle}
                    </span>
                    <h2>{feature.title}</h2>
                    <div className="text">
                      Interior inilla duiman at elit finibus viverra
                      nec a lacus themo the nesudea seneoice misuscipit
                      non sagie fermen ziverra tristiue duru the ivite
                      dianne onen nivami acsestion augue artine.
                    </div>
                  </div>
                  <Link
                    to="/page-project-details"
                    className="theme-btn btn-style-three read-more">
                    Discover More
                  </Link>
                  <figure className="image-2">
                    <img
                      src={FeatureIcon}
                      alt="Icon"
                    />
                  </figure>
                </div>
              </div>
            </div>
            {feature.reverse && (
              <div className="image-column col-lg-4">
                <div className="inner-column">
                  <div className="image-box">
                    <figure
                      className="image overlay-anim wow">
                      <img src={feature.image} alt={feature.title} />
                    </figure>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}