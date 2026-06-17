
import React from "react";
import { Link } from "react-router-dom";
import News1 from "../../assets/images/resource/news1-1.jpg";
import News2 from "../../assets/images/resource/news1-2.jpg";
import News3 from "../../assets/images/resource/news1-3.jpg";

const newsData = [
  {
    id: 1,
    category: "Architecture",
    date: "May 25, 2026",
    title:
      "Detailed Accents on Custom of Built Office Design",
    image: News1,
  },
  {
    id: 2,
    category: "Room Service",
    date: "May 25, 2026",
    title:
      "Swimming Benefits is Good For Your Health",
    image: News2,
    delay: "300ms",
  },
  {
    id: 3,
    category: "Hotel Guide",
    date: "May 25, 2026",
    title:
      "Available Now Health Club For Your Fitness",
    image: News3,
    delay: "600ms",
  },
];

export default function NewsSection() {
  return (
    <section className="news-section">
      <div className="auto-container">
        {/* Section Title */}
        <div className="sec-title text-center wow fadeInUp">
          <span className="sub-title">
            Interiox NEWS
          </span>

          <h2>Latest News Update</h2>
        </div>

        <div className="row">
          {newsData.map((news) => (
            <div
              key={news.id}
              className="news-block col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay={news.delay}
            >
              <div className="inner-box">
                {/* Image */}
                <div className="image-box">
                  <figure className="image">
                    <Link to="/news-details">
                      <img
                        src={news.image}
                        alt={news.title}
                      />
                      <img
                        src={news.image}
                        alt={news.title}
                      />
                    </Link>
                  </figure>
                </div>

                {/* Content */}
                <div className="content-box">
                  <ul className="post-meta">
                    <li className="categories">
                      <Link to="/news-details">
                        {news.category}
                      </Link>
                    </li>

                    <li className="date">
                      {news.date}
                    </li>
                  </ul>

                  <h4 className="title">
                    <Link to="/news-details">
                      {news.title}
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