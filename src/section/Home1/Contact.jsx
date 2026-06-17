
import React from "react";
import ContactBg from "../../assets/images/background/bg-contact1.jpg";

export default function ContactSection() {

  return (
    <section className="contact-section style-two">
      {/* Background Image */}
      <div className="bg bg-image wow tm-gsap-img-parallax overflow-hidden">
        <img
          className="img-fit-cover w-100"
          src={ContactBg}
          alt="Background"
        />
      </div>

      <div className="outer-box">
        {/* Form Column */}
        <div className="form-column">
          <div className="inner-column">
            {/* Contact Form */}
            <div className="contact-form wow fadeInLeft">
              <div className="icon-anchor-1 bounce-y"></div>

              <div className="sec-title">
                <span className="sub-title">
                  Contact Us
                </span>

                <h2>Get in Touch</h2>
              </div>

              {/* Contact Form */}
              <form
                id="contact-form">
                <div className="row">
                  <div className="form-group col-lg-6 col-md-6">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div className="form-group col-lg-6 col-md-6">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      required
                    />
                  </div>

                  {/* Phone */}
                  <div className="form-group col-lg-6 col-md-6">
                    <input
                      type="text"
                      name="phone"
                      placeholder="Phone Number"
                      required
                    />
                  </div>

                  {/* Subject */}
                  <div className="form-group col-lg-6 col-md-6">
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      required
                    />
                  </div>

                  {/* Message */}
                  <div className="form-group col-lg-12">
                    <textarea
                      name="message"
                      placeholder="Write a Message"
                      rows={2}
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="form-group col-lg-12">
                    <button
                      type="submit"
                      className="theme-btn btn-style-two"
                    >
                      <span className="btn-title">
                        Submit now
                      </span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
            {/* End Contact Form */}
          </div>
        </div>
      </div>
    </section>
  );
}