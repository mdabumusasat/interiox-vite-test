import React from "react";
import { Link } from "react-router-dom";
import Project1 from "../assets/images/resource/project1-1.jpg";
import Project2 from "../assets/images/resource/project1-2.jpg";
import Project3 from "../assets/images/resource/project1-3.jpg";
import Project4 from "../assets/images/resource/project1-4.jpg";
import Project5 from "../assets/images/resource/project1-5.jpg";

const projects = [
  {
    id: 1,
    image: Project1,
    category: "Design",
    title: "Las Vegas, USA",
    colClass: "col-lg-6 col-md-6 col-sm-12",
    delay: "",
    large: false,
  },
  {
    id: 2,
    image: Project2,
    category: "Design",
    title: "Home Design, CA",
    colClass: "col-lg-6 col-md-6 col-sm-12",
    delay: "200ms",
    large: false,
  },
  {
    id: 3,
    image: Project3,
    category: "Design",
    title: "Art Park, USA",
    colClass: "col-lg-3 col-md-6 col-sm-12",
    delay: "300ms",
    large: false,
  },
  {
    id: 4,
    image: Project4,
    category: "ARCHITECTURE",
    title: "Davis Villa, USA",
    colClass: "col-lg-6 col-md-6 col-sm-12",
    delay: "400ms",
    large: true,
  },
  {
    id: 5,
    image: Project5,
    category: "Design",
    title: "Ohio Park, USA",
    colClass: "col-lg-3 col-md-6 col-sm-12",
    delay: "500ms",
    large: false,
  },
];

const ProjectSection = () => {
  return (
    <section className="project-section pt-120">
      <div className="auto-container">
        <div className="row">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`project-block ${project.colClass}`}>
              <div
                className={`inner-box wow fadeIn ${
                  project.large ? "large-style" : ""
                }`}
                data-wow-delay={project.delay}>
                <div className="image-box">
                  <figure className="image-2 overlay-anim">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-100"
                    />
                  </figure>
                </div>
                <div className="content-box">
                  <span className="category">
                    {project.category}
                  </span>
                  <h4 className="title">
                    <Link to="/page-project-details">
                      {project.title}
                    </Link>
                  </h4>
                </div>
                <div className="box-caption">
                  <Link
                    to="/page-project-details"
                    className="book-btn">
                    SEE MORE
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;