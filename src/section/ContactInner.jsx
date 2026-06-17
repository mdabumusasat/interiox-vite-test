import React from "react";
import { Link } from "react-router-dom";

export default function ContactDetails() {
  return (
    <>
    <section className="contact-details">
      <div className="container pt-110 pb-70">
        <div className="row">
          <div className="col-xl-7 col-lg-6">
            <div className="sec-title">
              <span className="sub-title before-none">
                Send us email
              </span>
              <h2>Feel free to write</h2>
            </div>
            <form
              className="dark-style">
              <div className="row">
                <div className="col-sm-6">
                  <div className="mb-3">
                    <input
                      name="form_name"
                      className="form-control"
                      type="text"
                      placeholder="Enter Name"
                    />
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="mb-3">
                    <input
                      name="form_email"
                      className="form-control"
                      type="email"
                      placeholder="Enter Email"
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-sm-6">
                  <div className="mb-3">
                    <input
                      name="form_subject"
                      className="form-control"
                      type="text"
                      placeholder="Enter Subject"
                    />
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="mb-3">
                    <input
                      name="form_phone"
                      className="form-control"
                      type="text"
                      placeholder="Enter Phone"
                    />
                  </div>
                </div>
              </div>

              <div className="mb-3">
                <textarea
                  name="form_message"
                  className="form-control"
                  rows={7}
                  placeholder="Enter Message"
                />
              </div>

              <div className="mb-5 d-flex gap-3">
                <button
                  type="submit"
                  className="theme-btn btn-style-one"
                >
                  <span className="btn-title">
                    Send message
                  </span>
                </button>

                <button
                  type="button"
                  className="theme-btn btn-style-one bg-theme-color5">
                  <span className="btn-title">
                    Reset
                  </span>
                </button>
              </div>
            </form>
          </div>

          {/* Right Side Contact Info */}
          <div className="col-xl-5 col-lg-6">
            <div className="contact-details__right">
              <div className="sec-title">
                <span className="sub-title before-none">
                  Need any help?
                </span>
                <h2>Get in touch</h2>
                <div className="text">
                  Lorem ipsum is simply free text available
                  dolor sit amet consectetur adipisicing elit.
                  Sed do eiusmod tempor incididunt dolore magna.
                </div>
              </div>
              <ul className="list-unstyled contact-details__info">
                <li>
                  <div className="icon">
                    <span className="lnr-icon-phone-plus"></span>
                  </div>
                  <div className="text">
                    <h6 className="mb-2">
                      Have any question?
                    </h6>
                    <Link to="#">
                      <span>Free</span> +92 (020)-9850
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <span className="lnr-icon-envelope1"></span>
                  </div>
                  <div className="text">
                    <h6 className="mb-2">
                      Write email
                    </h6>
                    <Link to="#">
                      needhelp@company.com
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <span className="lnr-icon-location"></span>
                  </div>
                  <div className="text">
                    <h6 className="mb-2">
                      Visit anytime
                    </h6>
                    <span>
                      66 broklyn golden street, New York
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="map-section">
      <iframe
        className="map w-100"
        src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&t=&z=14&ie=UTF8&iwloc=B&output=embed"
        width="100%"
        height="600"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
    </section>
    </>
  );
}