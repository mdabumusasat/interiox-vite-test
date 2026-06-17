
import React from "react";
import { Link } from "react-router-dom";
import News1 from "../../assets/images/resource/news1-1.jpg";
import News2 from "../../assets/images/resource/news1-2.jpg";
import News3 from "../../assets/images/resource/news1-3.jpg";

export default function NewsSection() {
  const news = [
    {
      id: 1,
      category: "Architecture",
      date: "June 25, 2026",
      title:
        "Detailed Accents on Custom of Built Office Design",
      image: News1,
      delay: "",
    },
    {
      id: 2,
      category: "Room Service",
      date: "June 25, 2026",
      title:
        "Swimming Benefits is Good For Your Health",
      image: News2,
      delay: "300ms",
    },
    {
      id: 3,
      category: "Hotel Guide",
      date: "June 25, 2026",
      title:
        "Available Now Health Club For Your Fitness",
      image: News3,
      delay: "600ms",
    },
  ];

  return (
    <section className="news-section">
      <div className="auto-container">
        {/* Section Title */}
        <div className="sec-title text-center wow fadeInUp">
          <span className="sub-title">
            Interiox News
          </span>
          <h2>Latest News Update</h2>
        </div>

        <div className="row">
          {news.map((item) => (
            <div
              key={item.id}
              className="news-block col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay={item.delay}
            >
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image">
                    <Link to="/news-details">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-100"
                      />
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-100"
                      />
                    </Link>
                  </figure>
                </div>

                <div className="content-box">
                  <ul className="post-meta">
                    <li className="categories">
                      <Link to="/news-details">
                        {item.category}
                      </Link>
                    </li>
                    <li className="date">{item.date}</li>
                  </ul>

                  <h4 className="title">
                    <Link to="/news-details">
                      {item.title}
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}