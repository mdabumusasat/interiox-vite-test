import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import ServiceDetailsImage from "../assets/images/resource/service-details.jpg";
import ServiceD1 from "../assets/images/resource/service-d1.jpg";
import ServiceD2 from "../assets/images/resource/service-d2.jpg";

export default function ServiceDetailsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: "Is my technology allowed on tech?",
      answer:
        "There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.",
    },
    {
      question: "How to soft launch your business?",
      answer:
        "There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.",
    },
    {
      question: "How to turn visitors into contributors",
      answer:
        "There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.",
    },
    {
      question: "How can i find my solutions?",
      answer:
        "There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.",
    },
  ];

  return (
    <section className="services-details section-padding">
      <div className="container">
        <div className="row">
          {/* Sidebar */}
          <div className="col-xl-4 col-lg-4">
            <div className="service-sidebar">
              <div className="sidebar-widget service-sidebar-single">
                <div className="sidebar-service-list">
                  <ul>
                    <li>
                      <Link to="#" className="current">
                        <i className="fas fa-angle-right"></i>
                        <span>Architecture</span>
                      </Link>
                    </li>
                    <li className="current">
                      <Link to="#">
                        <i className="fas fa-angle-right"></i>
                        <span>Interior Design</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fas fa-angle-right"></i>
                        <span>Urban Design</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fas fa-angle-right"></i>
                        <span>Planning</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fas fa-angle-right"></i>
                        <span>Décor Plan</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fas fa-angle-right"></i>
                        <span>3D modelling</span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="service-details-help">
                  <div className="help-shape-1"></div>
                  <div className="help-shape-2"></div>
                  <div className="h2 help-title">
                    Contact with <br /> us for any <br /> advice
                  </div>
                  <div className="help-icon">
                    <span className="lnr-icon-phone-handset"></span>
                  </div>
                  <div className="help-contact">
                    <p>Need help? Talk to an expert</p>
                    <Link to="/">
                      +892 ( 123 ) 112 - 9999
                    </Link>
                  </div>
                </div>
                <div className="sidebar-widget service-sidebar-single mt-4">
                  <div className="service-sidebar-single-btn wow fadeInUp" data-wow-delay="0.5s" data-wow-duration="1200m">
                    <Link to="#" className="theme-btn btn-style-one d-grid"><span className="btn-title"><span className="fas fa-file-pdf"></span> download pdf file</span></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="col-xl-8 col-lg-8">
            <div className="services-details__content">
              <img
                src={ServiceDetailsImage}
                alt="service"
                className="img-fluid"
              />

              <h3 className="mt-4 text-white">Service Overview</h3>

              <p>
                Lorem ipsum is simply free text used by copytyping refreshing.
                Neque porro est qui dolorem ipsum quia quaed inventore
                veritatis et quasi architecto beatae vitae dicta sunt
                explicabo. Aelltes port lacus quis enim var sed efficitur
                turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply
                dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the ndustry standard dummy text ever since the
                1500s, when an unknown printer took a galley of type and
                scrambled it to make
              </p>

              <p>
                When an unknown printer took a galley of type and scrambled it
                to make a type specimen book. It has survived not only five
                centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged Lorem ipsum dolor sit amet
                consec tetur adipis icing elit
              </p>

              <div className="content mt-40">
                <div className="text">
                  <h3 className="text-white">Service Center</h3>

                  <p>
                    Lorem ipsum is simply free text used by copytyping
                    refreshing. Neque porro est qui dolorem ipsum quia quaed
                    inventore veritatis et quasi architecto beatae vitae dicta
                    sunt explicabo.
                  </p>

                  <blockquote className="blockquote-one">
                    Lorem ipsum dolor sit amet, consectetur notted adipisicing
                    elit sed do eiusmod remaining essentially unchanged Lorem
                    ipsum dolor sit amet consec tetur
                  </blockquote>
                </div>

                <div className="feature-list mt-4">
                  <div className="row clearfix">
                    <div className="col-lg-6 col-md-6 col-sm-12 column mb-5 mb-md-0">
                      <img
                        src={ServiceD1}
                        alt="images"
                        className="mb-3 img-fluid"
                      />

                      <p>
                        Lorem ipsum dolor sit amet consec adipis elit Dolor
                        repellat pariatur temporibus doloribus hic conse
                        quatur copy typing refreshing
                      </p>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-12 column mb-5 mb-md-0">
                      <img
                        src={ServiceD2}
                        alt="images"
                        className="mb-3 img-fluid"
                      />

                      <p>
                        Lorem ipsum dolor sit amet consec adipis elit Dolor
                        repellat pariatur temporibus doloribus hic conse
                        quatur copy typing refreshing
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div className="mt-25">
                <h3 className="text-white">Frequently Asked Question</h3>

                <p>
                  Lorem ipsum is simply free text used by copytyping
                  refreshing. Neque porro est qui dolorem ipsum quia quaed
                  inventore veritatis et quasi architecto beatae vitae dicta
                  sunt explicabo.
                </p>

                <ul className="accordion-box mt-25 wow fadeInRight">
                  {faqs.map((faq, index) => (
                    <li
                      key={index}
                      className={`accordion block ${
                        activeIndex === index
                          ? "active-block"
                          : ""
                      } ${
                        index === faqs.length - 1
                          ? "border-bottom-0"
                          : ""
                      }`}
                    >
                      <div
                        className={`acc-btn d-flex justify-content-between align-items-center ${
                          activeIndex === index ? "active" : ""
                        }`}
                        onClick={() =>
                          setActiveIndex(
                            activeIndex === index ? -1 : index
                          )
                        }
                        style={{ cursor: "pointer" }}
                      >
                        {faq.question}
                        <div className="icon fa fa-plus"></div>
                      </div>

                      {activeIndex === index && (
                        <div className="acc-content current">
                          <div className="content">
                            <div className="text mw-100 p-3">
                              {faq.answer}
                            </div>
                          </div>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {/* End Content */}
        </div>
      </div>
    </section>
  );
}