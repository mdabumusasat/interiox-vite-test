
import React, {useState} from "react";
import ModalVideo from 'react-modal-video';
import VideoBg from "../../assets/images/background/bg-video3.jpg";

export default function VideoSectionThree() {
    const [isOpen, setOpen] = useState(false);
  return (
    <>
    <section className="video-section-three">
      {/* Background Image */}
      <div
        className="bg bg-image"
        style={{
          backgroundImage: `url(${VideoBg})`,
        }}
      ></div>
      <div className="auto-container">
        <div className="row align-items-center">
          <div className="btn-column col-lg-12">
            <div className="inner-column text-center">
              <a
                onClick={() => setOpen(true)}
                className="play-now-two"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="ripple">Play</span>
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