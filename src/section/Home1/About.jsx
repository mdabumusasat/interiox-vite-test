import React from "react";
import { Link } from "react-router-dom";
import AboutImage from "../../assets/images/resource/about1-1.jpg";

export default function AboutSection() {
  return (
    <section className="about-section pb-0">
      <div className="auto-container">
        <div className="row">
          <div
            className="content-column col-lg-6 wow fadeInRight"
            data-wow-delay="600ms">
            <div className="inner-column">
              <div className="sec-title">
                <span className="sub-title">ABOUT INTERIOX</span>
                <h2>
                  We Provide Outdoor <br />
                  Activities To All Visitors
                </h2>
                <div className="text">
                  San Francisco has hills with views, the coast, excellent food
                  and has been voted the happiest, healthiest, and fittest city
                  in the United States many times.
                </div>
              </div>
              <div className="outer-box">
                <div className="info-block">
                  <div className="inner">
                    <div className="icon-box">
                      <i className="flaticon-light"></i>
                    </div>
                    <h4 className="title">
                      The Best <br />
                      Apartment
                    </h4>
                  </div>
                </div>
                <div className="info-block">
                  <div className="inner">
                    <div className="icon-box">
                      <i className="flaticon-pool"></i>
                    </div>
                    <h4 className="title">
                      The Best <br />
                      Architecture
                    </h4>
                  </div>
                </div>
              </div>
              <ul className="list-style-two">
                <li>
                  <i className="icon fa fa-check"></i>
                  It is a long fact that a reader will be distracted by the
                  readable content.
                </li>
                <li>
                  <i className="icon fa fa-check"></i>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </li>
                <li>
                  <i className="icon fa fa-check"></i>
                  There are many variations of Lorem Ipsum available today.
                </li>
              </ul>
              <div className="btn-box">
                <Link
                  to="/page-about"
                  className="theme-btn btn-style-one">
                  <span className="btn-title">Discover More</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Image Column */}
          <div className="image-column col-md-6 col-lg-6">
            <div className="inner-column wow fadeInLeft">
              <figure className="image-1 overlay-anim wow">
                <img
                  src={AboutImage}
                  alt="About Interiox"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}