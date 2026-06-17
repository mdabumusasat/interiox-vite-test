
import React from "react";
import { Link } from "react-router-dom";
import AboutImage1 from "../../assets/images/resource/about2-1.jpg";
import AboutImage2 from "../../assets/images/resource/about2-2.jpg";

export default function AboutSectionTwo() {
  return (
    <section className="about-section-two pt-0">
      <div className="auto-container">
        <div className="row">
          <div
            className="content-column col-lg-7 wow fadeInRight"
            data-wow-delay="600ms">
            <div className="inner-column">
              <div className="sec-title">
                <span className="sub-title">
                  Interiox INTERIOR
                </span>
                <h2>Best Interior Solution</h2>
                <div className="text">
                  Interiox in a powerful way of just not an
                  only professions, however, in a passion
                  for our Company. We have to a tendency
                  to believe the idea that smart looking
                  of any website.
                </div>
              </div>
              <div className="btn-box">
                <Link
                  to="/page-about"
                  className="theme-btn btn-style-one">
                  <span className="btn-title">
                    DISCOVER MORE
                  </span>
                </Link>
              </div>
              <figure className="image-1 overlay-anim wow fadeInLeft">
                <img
                  src={AboutImage1}
                  alt="Interior Design"
                />
              </figure>
            </div>
          </div>
          <div className="image-column col-lg-5">
            <div className="inner-column wow fadeInLeft">
              <figure className="image-1 overlay-anim wow">
                <img
                  src={AboutImage2}
                  alt="About Interior"
                />
              </figure>

              <div className="text">
                We've been in the industry for over two
                decades now. Consequently, some of our
                partnerships have stood the test of time,
                much like some <br />
                of our colleagues..
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
