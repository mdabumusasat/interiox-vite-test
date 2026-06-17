import React from "react";
import { Link } from "react-router-dom";
import News1 from "../assets/images/resource/news1-1.jpg";
import News2 from "../assets/images/resource/news1-2.jpg";
import News3 from "../assets/images/resource/news1-3.jpg";

export default function NewsSection() {
  const newsData = [
    {
      id: 1,
      image: News1,
      category: "Architecture",
      date: "June 25, 2026",
      title: "Detailed Accents on Custom of Built Office Design",
      delay: "",
    },
    {
      id: 2,
      image: News2,
      category: "Room Service",
      date: "June 25, 2026",
      title: "Swimming Benefits is Good For Your Health",
      delay: "200ms",
    },
    {
      id: 3,
      image: News3,
      category: "Hotel Guide",
      date: "June 25, 2026",
      title: "Available Now Health Club For Your Fitness",
      delay: "300ms",
    },
    {
      id: 4,
      image: News2,
      category: "Room Service",
      date: "June 25, 2026",
      title: "Swimming Benefits is Good For Your Health",
      delay: "400ms",
    },
    {
      id: 5,
      image: News3,
      category: "Hotel Guide",
      date: "June 25, 2026",
      title: "Available Now Health Club For Your Fitness",
      delay: "500ms",
    },
    {
      id: 6,
      image: News1,
      category: "Architecture",
      date: "June 25, 2026",
      title: "Detailed Accents on Custom of Built Office Design",
      delay: "600ms",
    },
  ];

  return (
    <section className="news-section">
      <div className="auto-container">
        <div className="row">
          {newsData.map((news) => (
            <div
              key={news.id}
              className="news-block col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay={news.delay}>
              <div className="inner-box">
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
                <div className="content-box">
                  <ul className="post-meta">
                    <li className="categories">
                      <Link to="/news-details">
                        {news.category}
                      </Link>
                    </li>
                    <li className="date">{news.date}</li>
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