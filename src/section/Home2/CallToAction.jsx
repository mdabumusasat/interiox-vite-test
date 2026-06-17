
import React from "react";
import CallImage1 from "../../assets/images/resource/call1-1.jpg";
import CallImage2 from "../../assets/images/resource/call1-2.jpg";

export default function CallToAction() {
  return (
    <section className="call-to-action">
      <div className="auto-container">
        <div className="sec-title wow fadeInUp">
          <div className="row">
            <div className="col-lg-6">
              <span className="sub-title">
                Interiox FULL VIEW
              </span>
              <h2>
                See Interiox Room 360 View Now.
              </h2>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <div className="text">
                Interiox in a powerful way of just not an only
                professions, however, in a passion for our Company.
                We have to a tendency to believe the idea that smart.
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="image-column col-sm-6">
            <div className="inner-column">
              <figure className="image overlay-anim wow mb-4 mb-sm-0">
                <img
                  src={CallImage1}
                  alt="Room View 1"
                  className="w-100"
                />
              </figure>
            </div>
          </div>

          <div className="image-column col-sm-6">
            <div className="inner-column">
              <figure className="image overlay-anim wow">
                <img
                  src={CallImage2}
                  alt="Room View 2"
                  className="w-100"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}