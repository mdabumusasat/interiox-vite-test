
import React from "react";

export default function BookingSection() {
  return (
    <section className="booking-section home-style2">
      <div className="auto-container">
        <div className="row">
          <div className="col-lg-6 booking-form-column wow fadeInUp">
            <div className="inner-column">
              <div className="sec-title">
                <span className="sub-title">
                  CONACT NOW
                </span>
                <h2>Booking Now</h2>
              </div>
              <form
                className="bk-form"
                id="contact_form"
              >
                <div className="frm-field">
                  <input
                    name="form_name"
                    className="form-control"
                    type="text"
                    placeholder="Your Name"
                  />
                </div>

                <div className="frm-field">
                  <input
                    name="form_phone"
                    className="form-control"
                    type="text"
                    placeholder="Enter Phone"
                  />
                </div>

                <div className="frm-field">
                  <input
                    name="form_email"
                    className="form-control required email"
                    type="email"
                    placeholder="Enter Email"
                  />
                </div>

                <div className="frm-field">
                  <textarea
                    name="form_message"
                    className="form-control required"
                    rows={7}
                    placeholder="Enter Message"
                  ></textarea>
                </div>

                <div className="form-submit">
                  <input
                    name="form_botcheck"
                    type="hidden"
                    value=""
                  />

                  <button
                    type="submit"
                    className="theme-btn btn-style-one"
                  >
                    <span className="btn-title">
                      SUBMIT NOW
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Content Column */}
          <div
            className="col-lg-6 booking-content-column wow fadeInRight"
            data-wow-delay="200ms"
          >
            <div className="inner-column">
              <div className="sec-title white">
                <span className="sub-title">
                  Interiox ARCHITECTURE
                </span>

                <h2>Why We are Best</h2>
              </div>

              <p>
                Each of our guest rooms feature a private bath,
                wi-fi, cable television and include full breakfast.
              </p>

              <p>
                Mea nibh meis philosophia eu. Duis legimus
                efficiantur ea sea. Id placerat tacimates
                definitionem sea, prima quidam vim no. Duo nobis
                persecuti cu.
              </p>

              <div className="contact-info">
                <div className="icon-box">
                  <i className="flaticon-customer-service"></i>
                </div>

                <span>CONTACT NOW</span>
                <h4 className="title">000 000 2222</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}