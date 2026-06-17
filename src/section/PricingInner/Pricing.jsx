import React from "react";
import { Link } from "react-router-dom";

const pricingPlans = [
  {
    id: 1,
    title: "Basic",
    price: 20,
    features: [
      "Information Architecture",
      "Lifetime Support",
      "A-Z Design",
      "Full Concept",
      "Book Plan Online",
      "Interior Design Planning",
    ],
  },
  {
    id: 2,
    title: "Standard",
    price: 30,
    features: [
      "Information Architecture",
      "Lifetime Support",
      "A-Z Design",
      "Full Concept",
      "Book Plan Online",
      "Interior Design Planning",
    ],
  },
  {
    id: 3,
    title: "Premium",
    price: 99,
    features: [
      "Information Architecture",
      "Lifetime Support",
      "A-Z Design",
      "Full Concept",
      "Book Plan Online",
      "Interior Design Planning",
    ],
  },
];

const PricingSectionTwo = () => {
  return (
    <section className="pricing-section-two">
      <div className="auto-container">
        <div className="row">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className="pricing-block-two col-md-6 col-lg-4">
              <div className="inner-box">
                <div className="content-column">
                  <div className="inner-column wow fadeInLeft">
                    <span className="pricing-title">
                      {plan.title}
                    </span>
                    <h6 className="pricing-amount">
                      <sup>$</sup>
                      {plan.price}
                      <span> Per Month</span>
                    </h6>
                    <ul className="list-style-two">
                      {plan.features.map((feature, index) => (
                        <li key={index}>
                          <i className="icon fa fa-check"></i>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/page-contact"
                      className="book-now btn-style-four">
                      CONTACT
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSectionTwo;