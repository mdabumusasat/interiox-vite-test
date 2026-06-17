
import React, {useState} from "react";
import ModalVideo from 'react-modal-video';
import VideoBg from "../../assets/images/background/bg-video2.jpg";

export default function VideoSectionTwo() {
    const [isOpen, setOpen] = useState(false);
  return (
    <>
    <section className="video-section-two">
      <div
        className="bg bg-image"
        style={{
          backgroundImage: `url(${VideoBg})`,
        }}
      ></div>
      <div className="auto-container">
        <div className="row">
          <div className="content-column col-lg-9 col-md-12 col-sm-12">
            <div className="inner-column">
              <div className="sec-title wow slideInUp">
                <span className="sub-title">DISCOVER MORE</span>
                <h2>
                  Park Town, Canada <br />
                  Interior Design
                </h2>
                <div className="post-info">
                  <i className="fa-light fa-location-dot"></i>
                  {" "}
                  2464 Royal Ln. Mesa, New
                  <br />
                  Jersey 45463
                </div>
              </div>
            </div>
          </div>
          <div className="btn-column col-lg-3 col-md-12 col-sm-12 wow slideInUp">
            <div className="inner-column">
              <a
                onClick={() => setOpen(true)}
                target="_blank"
                rel="noopener noreferrer"
                className="play-now-two">
                <i className="icon fa-sharp fa-solid fa-play"></i>
                <span className="ripple"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="Fvae8nxzVz4" onClose={() => setOpen(false)} />
    </>
  );
}