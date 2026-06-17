
import React from "react";
import CountUp from "react-countup";

export default function FunfactSection() {
  const counters = [
    {
      id: 1,
      end: 20,
      text: "Years Of\nExperience",
    },
    {
      id: 2,
      end: 10,
      text: "Online\nBooking",
    },
    {
      id: 3,
      end: 40,
      text: "Experience\nInterior",
    },
    {
      id: 4,
      end: 30,
      text: "Best Interior\nAward",
    },
  ];

  return (
    <section className="funfact-section pb-0">
      <div className="outer-box">
        <div className="auto-container">
          <div className="fact-counter">
            <div className="row">
              {counters.map((item) => (
                <div
                  key={item.id}
                  className="counter-block-one col-lg-3 col-sm-6"
                >
                  <div className="inner-box">
                    <div className="count-box">
                      <CountUp
                        end={item.end}
                        duration={3}
                      />
                    </div>
                    <div className="counter-text">
                      {item.text.split("\n").map((line, i) => (
                        <span key={i}>
                          {line}
                          <br />
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}