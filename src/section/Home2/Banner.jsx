
import React from "react";
import { Link } from "react-router-dom";
import BannerBg from "../../assets/images/banner/banner2-2.jpg";
import BannerShape from "../../assets/images/banner/banner2-3.png";

export default function BannerSectionTwelve() {
  return (
    <section className="banner-section-twelve">
      <div className="float-text">
        Call Us - +1 (313) 654 - 32 - 63
      </div>
      <div className="banner-slider banner-slider-home2">
        <div className="banner-slide">
          <div className="inner-slide">
            <div
              className="bg bg-image"
              style={{
                backgroundImage: `url(${BannerBg})`,
              }}
            ></div>
            <div className="anim-icons">
              <img
                className="image-1"
                src={BannerShape}
                alt="Banner Shape"
              />
            </div>
            <div className="auto-container">
              <div className="outer-box">
                <div className="row">
                  <div className="content-column col-lg-7 col-md-6">
                    <div className="inner-column">
                      <span
                        className="stroke-title wow fadeInUp"
                        data-wow-delay="300ms"
                      >
                        Interior
                      </span>

                      <h1
                        className="title mt-15 wow fadeInUp"
                        data-wow-delay="300ms"
                      >
                        Innovative Interiors Inspired by You
                      </h1>

                      <div
                        className="text wow fadeInUp"
                        data-wow-delay="600ms"
                      >
                        We believe every space has the potential to inspire.
                        Our design approach combines creativity,
                        functionality, and your personal touch.
                      </div>
                    </div>

                    <div
                      className="btn-box wow fadeInUp"
                      data-wow-delay="800ms"
                    >
                      <Link
                        to="/page-services"
                        className="theme-btn btn-style-two"
                      >
                        <span className="btn-title">
                          VIEW PROJECTS
                        </span>
                      </Link>
                    </div>
                  </div>

                  {/* Form Column */}
                  <div className="booking-form-column bg-dark-style col-lg-5 col-md-6">
                    <div
                      className="inner-column wow fadeInRight"
                      data-wow-delay="200ms"
                    >
                      <div className="sec-title light">
                        <h3>Need Any Help?</h3>
                      </div>

                      <form className="bk-form">
                        <div className="frm-field">
                          <input
                            name="form_name"
                            className="form-control"
                            type="text"
                            placeholder="Name"
                          />
                        </div>

                        <div className="frm-field">
                          <input
                            name="form_phone"
                            className="form-control"
                            type="text"
                            placeholder="Phone"
                          />
                        </div>

                        <div className="frm-field">
                          <input
                            name="form_email"
                            className="form-control"
                            type="email"
                            placeholder="Email"
                          />
                        </div>

                        <div className="frm-field">
                          <textarea
                            name="form_message"
                            className="form-control required"
                            rows={7}
                            placeholder="Message"
                          ></textarea>
                        </div>

                        <div className="form-submit">
                          <button type="submit">
                            SUBMIT REQUEST
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  {/* End Form Column */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End banner-slide */}
      </div>
    </section>
  );
}