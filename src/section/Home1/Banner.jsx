
import React, {useState} from "react";
import ModalVideo from 'react-modal-video';
import BannerShape from "../../assets/images/banner/banner-1-3.png";
import BannerImage1 from "../../assets/images/banner/banner-11-1.png";
import BannerImage2 from "../../assets/images/banner/banner-1-2.png";

export default function BannerSectionEleven() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
    <section className="banner-section-eleven">
      <div className="banner-slider banner-slider-home11">
        <div className="banner-slide">
          <div className="outer-box">
            <div className="stroke-title">INTERIOR</div>
            <div className="info-column">
              <figure className="image-shape-1">
                <img
                  src={BannerShape}
                  alt="Interior Design Shape"
                />
              </figure>
              <div className="info-box">
                <div className="inner-box">
                  <figure className="image-1">
                    <img
                      src={BannerImage1}
                      alt="Interior Design"
                    />
                  </figure>
                  <div className="info-year">
                    <div className="number">27+</div>
                    <div className="text">
                      Years of <br />
                      Experience
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-column">
              <div className="content-box">
                <div className="info-box">
                  <div
                    className="content-info wow fadeInRight"
                    data-delay-in="0.3">
                    <h1 data-animation-in="fadeInUp" data-delay-in="0.3">
                      Explore <br />
                      <span>Design</span>
                    </h1>
                    <div className="text">
                      We are Interior Agency
                    </div>
                  </div>
                  <div className="video-info">
                    <div className="inner-video-info">
                      <a
                        onClick={() => setOpen(true)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="play-now">
                        <i className="icon fa-sharp fa-solid fa-play"></i>
                        <span className="ripple"></span>
                      </a>
                      <div className="text">
                        Interiox Architects is a comprehensive design firm
                        specializing in architecture, master planning, urban
                        design, interior architecture, space planning, and
                        programming. Our portfolio features innovative and
                        functional spaces tailored to modern lifestyles.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="image-column">
              <div
                className="inner-column wow fadeInRight"
                data-wow-delay="200ms">
                <figure className="image-1">
                  <img
                    src={BannerImage2}
                    alt="Interior Architecture"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="Fvae8nxzVz4" onClose={() => setOpen(false)} />
    </>
  );
}