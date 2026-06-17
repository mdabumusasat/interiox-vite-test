
import React from "react";
import { Link } from "react-router-dom";
import Feature1 from "../../assets/images/resource/feature1-1.jpg";
import Feature2 from "../../assets/images/resource/feature1-2.jpg";
import FeatureIcon from "../../assets/images/resource/icon1.png";

export default function FeatureSection() {
  const projects = [
    {
      id: 1,
      subtitle: "MODERN",
      title: "3D Visualizations",
      description:
        "Interior inilla duiman at elit finibus viverra nec a lacus themo the nesudea seneoice misuscipit non sagie fermen ziverra tristiue duru the ivite dianne onen nivami acsestion augue artine.",
      image: Feature1,
      reverse: false,
    },
    {
      id: 2,
      subtitle: "DISCOVER",
      title: "Panoramic Glass",
      description:
        "Interior inilla duiman at elit finibus viverra nec a lacus themo the nesudea seneoice misuscipit non sagie fermen ziverra tristiue duru the ivite dianne onen nivami acsestion augue artine.",
      image: Feature2,
      reverse: true,
    },
  ];

  return (
    <section className="feature-section">
      {/* Section Title */}
      <div className="sec-title text-center wow fadeInUp">
        <span className="sub-title">
          Our Projects
        </span>
        <h2>Our Latest Projects</h2>
      </div>

      <div className="auto-container">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`row feature-row g-0 ${
              project.reverse
                ? "right-align"
                : ""
            }`}
          >
            {/* Left Image */}
            {!project.reverse && (
              <div className="image-column col-lg-4">
                <div className="inner-column">
                  <div className="image-box">
                    <figure
                      className="image overlay-anim wow">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-100"
                      />
                    </figure>
                  </div>
                </div>
              </div>
            )}

            {/* Content */}
            <div className="content-column col-lg-8">
              <div className="inner-column">
                <div className="content-box">
                  <div className="sec-title">
                    <span className="sub-title">
                      {project.subtitle}
                    </span>

                    <h2>{project.title}</h2>

                    <div className="text">
                      {project.description}
                    </div>
                  </div>
                  <Link
                    to="/page-project-details"
                    className="theme-btn btn-style-three read-more"
                  >
                    Discover More
                  </Link>
                  <figure className="image-2">
                    <img
                      src={FeatureIcon}
                    />
                  </figure>
                </div>
              </div>
            </div>

            {/* Right Image */}
            {project.reverse && (
              <div className="image-column col-lg-4">
                <div className="inner-column">
                  <div className="image-box">
                    <figure
                      className="image overlay-anim wow">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-100"
                      />
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