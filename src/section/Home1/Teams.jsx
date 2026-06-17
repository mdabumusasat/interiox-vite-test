
import React from "react";
import { Link } from "react-router-dom";
import Team1 from "../../assets/images/resource/team2-1.png";
import Team2 from "../../assets/images/resource/team2-2.png";
import Team3 from "../../assets/images/resource/team2-3.png";

const teamMembers = [
  {
    id: 1,
    name: "Leslie Alexander",
    designation: "Founder",
    image: Team1,
    className: "",
  },
  {
    id: 2,
    name: "Savannah Nguyen",
    designation: "Marketer",
    image: Team2,
    className: "content-center-align",
  },
  {
    id: 3,
    name: "Marvin McKinney",
    designation: "Web Designer",
    image: Team3,
    className: "content-right-align",
  },
];

export default function TeamSectionTwo() {
  return (
    <section className="team-section-two">
      <div className="auto-container">
        <div className="sec-title text-center wow fadeInUp">
          <span className="sub-title">
            Interiox Expert team
          </span>
          <h2>Expert Team Persons</h2>
        </div>
        <div className="row">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className={`team-block-two ${member.className} col-lg-4 col-sm-6`}
            >
              <div
                className="inner-box wow fadeInLeft"
                data-wow-delay={
                  index !== 0 ? "200ms" : undefined
                }
              >
                <div className="image-box">
                  <figure className="image overlay-anim">
                    <Link to="/page-team-details">
                      <img
                        src={member.image}
                        alt={member.name}
                      />
                    </Link>
                  </figure>

                  <div className="info-box">
                    <h4 className="name">
                      <Link to="/page-team-details">
                        {member.name}
                      </Link>
                    </h4>

                    <span className="designation">
                      {member.designation}
                    </span>

                    <div className="social-links">
                      <Link to="#">
                        <i className="fab fa-facebook-f"></i>
                      </Link>

                      <Link to="#">
                        <i className="fab fa-instagram"></i>
                      </Link>

                      <Link to="#">
                        <i className="fab fa-x-twitter"></i>
                      </Link>

                      <Link to="#">
                        <i className="fab fa-linkedin"></i>
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