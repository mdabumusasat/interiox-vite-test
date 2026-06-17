import React from 'react';
import { Link } from "react-router-dom";
import FooterLogo from "../../assets/images/logo-2.png";

const Footer = () => {
  return (
  <footer className="main-footer footer-style-one">
    <div className="widgets-section">
      <div className="auto-container">
        <div className="row">
          <div className="footer-column col-lg-3 col-sm-6">
            <div className="footer-widget about-widget wow fadeInLeft">
              <div className="widget-content">
                <div className="logo"><Link to="/"><img src={FooterLogo} alt=""/></Link></div>
                <div className="text">We are professional organization that offers specialized expertise advice.</div>
              </div>
            </div>
          </div>
          <div className="footer-column col-lg-3 col-sm-6 mb-0 ps-xl-5">
            <div className="footer-widget links-widget ps-xl-5 wow fadeInLeft" data-wow-delay="200ms">
              <h4 className="widget-title">Services</h4>
              <div className="widget-content">
                <ul className="user-links">
                  <li><Link to="#">UI Design</Link></li>
                  <li><Link to="#">Web Design</Link></li>
                  <li><Link to="#">Branding</Link></li>
                  <li><Link to="#">Marketing</Link></li>
                  <li><Link to="#">Development</Link></li>
                </ul>
              </div>
            </div>                       
          </div>
          <div className="footer-column col-lg-3 col-sm-6 mb-0 ps-xl-4">
            <div className="footer-widget links-widget ps-xl-4 wow fadeInLeft" data-wow-delay="200ms">
              <h4 className="widget-title">Company</h4>
              <div className="widget-content">
                <ul className="user-links">
                  <li><Link to="#">Home</Link></li>
                  <li><Link to="#">About Us</Link></li>
                  <li><Link to="#">Services</Link></li>
                  <li><Link to="#">Career</Link></li>
                  <li><Link to="#">Contact</Link></li>
                </ul>
              </div>
            </div>                       
          </div>
          <div className="footer-column col-lg-3 col-sm-6">
            <div className="footer-widget news-widget wow fadeInLeft" data-wow-delay="400ms">
              <h4 className="widget-title">Newsletter</h4>
              <div className="text">Feel free to reach out if you want to collaborate with us, or simply chat.</div>
              <div className="subscribe-form-three">
                <form method="post" action="#">
                  <div className="form-group">
                    <input type="email" name="email" className="email" placeholder="Email Address" />
                    <button type="button" className="theme-btn btn-style-one"><span className="btn-title"><i className="fa fa-paper-plane"></i></span></button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="footer-column col-lg-3 col-sm-6 offset-lg-3 ps-xl-5">
            <div className="footer-widget info-widget ps-xl-5 wow fadeInLeft" data-wow-delay="300ms">
              <h4 className="widget-title">New York</h4>
              <div className="widget-content">
                <div className="contact-list">
                  <div className="inner">
                    <div className="list-info">2464 Royal Ln. Mesa, New Jersey 45463</div>
                    <div className="list-info">(000) 222-0000</div>
                    <div className="list-info">info@yourwebsite.com</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-column col-lg-3 col-sm-6 ps-xl-4">
            <div className="footer-widget info-widget ps-xl-4 wow fadeInLeft" data-wow-delay="300ms">
              <h4 className="widget-title">Mexico</h4>
              <div className="widget-content">
                <div className="contact-list">
                  <div className="inner">
                    <div className="list-info">1901 Thorn ridge Cir. Shiloh, Hawaii 81063</div>
                    <div className="list-info">(000) 000-0000</div>
                    <div className="list-info">info@yourwebsite.com</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-column col-lg-3 col-sm-6">
            <div className="footer-widget widget-social wow fadeInLeft" data-wow-delay="300ms">
              <h4 className="widget-title">Follow Us</h4>
              <div className="widget-content">
                <ul className="social-icon">
                  <li><Link to="#"><i className="fab fa-facebook-f"></i></Link></li>
                  <li><Link to="#"><i className="fa-brands fa-instagram"></i></Link></li>
                  <li><Link to="#"><i className="fa-brands fa-linkedin"></i></Link></li>
                  <li><Link to="#"><i className="fa-brands fa-whatsapp"></i></Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <!--  Footer Bottom --> */}
    <div className="footer-bottom">
      <div className="auto-container">
        <div className="inner-container">
          <div className="copyright-text">© 2026 <span>ThemeMascot</span> Agency</div>
          <ul className="footer-nav">
            <li><Link to="/page-about">Privacy & Cookie Policy</Link></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
  );
};

export default Footer;