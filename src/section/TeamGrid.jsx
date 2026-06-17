import React from "react";
import { Link } from "react-router-dom";
import Team1 from "../assets/images/resource/team1-1.jpg";
import Team2 from "../assets/images/resource/team1-2.jpg";
import Team3 from "../assets/images/resource/team1-3.jpg";
import Team4 from "../assets/images/resource/team1-4.jpg";

export default function TeamSection() {
  const teamMembers = [
    {
      id: 1,
      name: "Michel Dean",
      designation: "Architect",
      image: Team1,
      delay: "",
    },
    {
      id: 2,
      name: "Frank Burton",
      designation: "Architect",
      image: Team2,
      delay: "200ms",
    },
    {
      id: 3,
      name: "Mya Mullins",
      designation: "Architect",
      image: Team3,
      delay: "300ms",
    },
    {
      id: 4,
      name: "Ralph Nguyen",
      designation: "Architect",
      image: Team4,
      delay: "400ms",
    },
  ];

  return (
    <section className="team-section">
      <div className="auto-container">
        <div className="row">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="team-block col-lg-3 col-sm-6">
              <div
                className="inner-box wow fadeInLeft"
                data-wow-delay={member.delay}>
                <div className="image-box">
                  <figure className="image overlay-anim">
                    <Link to="/page-team-details">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="img-fluid"
                      />
                    </Link>
                  </figure>
                  <div className="info-box">
                    <span className="designation">
                      {member.designation}
                    </span>
                    <h4 className="name">
                      <Link to="/page-team-details">
                        {member.name}
                      </Link>
                    </h4>
                    <div className="social-links">
                      <Link to="#">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                      <Link to="#">
                        <i className="fab fa-x-twitter"></i>
                      </Link>
                      <Link to="#">
                        <i className="fab fa-linkedin"></i>
                      </Link>
                      <Link to="#">
                        <i className="fab fa-youtube"></i>
                      </Link>
                    </div>
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