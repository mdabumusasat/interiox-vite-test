import { useState } from "react";

export default function FaqSection() {
  const faqData = [
    {
      question: "What warranties do I have for installation?",
      answer:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more It is a long established fact that a reader.",
      delay: ".0s",
    },
    {
      question: "What is included in your services?",
      answer:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more It is a long established fact that a reader.",
      delay: ".2s",
    },
    {
      question: "What are the payment methods?",
      answer:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more It is a long established fact that a reader.",
      delay: ".4s",
    },
    {
      question: "How fast I get my order?",
      answer:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more It is a long established fact that a reader.",
      delay: ".6s",
    },
    {
      question: "Produce Your Own Clean Save The Environment",
      answer:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more It is a long established fact that a reader.",
      delay: ".8s",
    },
  ];

  const [activeIndexLeft, setActiveIndexLeft] = useState(0);
  const [activeIndexRight, setActiveIndexRight] = useState(0);

  return (
    <section className="faqs-section-home1 dark-style mt-0 pt-120 pb-60 pb-md-20">
      <div className="auto-container">
        <div className="row">
          {/* Left FAQ */}
          <div className="faq-column col-lg-6">
            <div className="inner-column mb-md-50">
              <ul className="accordion-box style-two wow fadeInLeft">
                {faqData.map((item, index) => (
                  <li
                    key={index}
                    className={`accordion block wow fadeInUp ${
                      activeIndexLeft === index ? "active-block" : ""
                    }`}
                    data-wow-delay={item.delay}
                  >
                    <div
                      className={`acc-btn ${
                        activeIndexLeft === index ? "active" : ""
                      }`}
                      onClick={() =>
                        setActiveIndexLeft(
                          activeIndexLeft === index ? null : index
                        )
                      }
                      style={{ cursor: "pointer" }}
                    >
                      {item.question}
                      <div className="icon fa fa-plus"></div>
                    </div>

                    <div
                      className={`acc-content ${
                        activeIndexLeft === index ? "current" : ""
                      }`}
                      style={{
                        display:
                          activeIndexLeft === index ? "block" : "none",
                      }}
                    >
                      <div className="content">
                        <div className="text">{item.answer}</div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right FAQ */}
          <div className="faq-column col-lg-6">
            <div className="inner-column mb-md-50">
              <ul className="accordion-box style-two bg-transparent p-0 wow fadeInLeft">
                {faqData.map((item, index) => (
                  <li
                    key={index}
                    className={`accordion block wow fadeInUp pl-30 pr-30 ${
                      activeIndexRight === index ? "active-block" : ""
                    }`}
                    data-wow-delay={item.delay}>
                    <div
                      className={`acc-btn ${
                        activeIndexRight === index ? "active" : ""
                      }`}
                      onClick={() =>
                        setActiveIndexRight(
                          activeIndexRight === index ? null : index
                        )
                      }
                      style={{ cursor: "pointer" }}>
                      {item.question}
                      <div className="icon fa fa-plus"></div>
                    </div>
                    <div
                      className={`acc-content ${
                        activeIndexRight === index ? "current" : ""
                      }`}
                      style={{
                        display:
                          activeIndexRight === index ? "block" : "none",
                      }}>
                      <div className="content">
                        <div className="text">{item.answer}</div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}