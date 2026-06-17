import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import NavLinks from '../NavLinks';
import MobileMenu from '../MobileMenu';
import MainLogo from "../../assets/images/logo-4.png";
import StickyLogo from "../../assets/images/logo-2.png";
import MobileLogo from "../../assets/images/logo-2.png";

const Header2 = ({ handleOpen, handleRemove, searchToggle, handleToggle, scroll }) => {
    return (
        <>
        <header className={`main-header header-style-three home-style2 ${scroll ? "fixed-header" : ""} ${searchToggle ? "moblie-search-active" : ""}`}>
            <div className="auto-container">
                {/* <!-- Main box --> */}
                <div className="main-box">
                    <div className="logo-box">
                    <div className="logo"><Link to="/"><img src={MainLogo} alt="" title="Interiox"/></Link></div>
                    </div>

                    {/* <!--Nav Box--> */}
                    <div className="nav-outer">
                    <nav className="nav main-menu">
                        <NavLinks />
                    </nav>
                    {/* <!-- Main Menu End--> */}

                    {/* <!-- Mobile Nav toggler --> */}
                    <div className="mobile-nav-toggler" onClick={handleOpen}><span className="icon lnr-icon-bars"></span></div>
                    </div>
                </div>

                {/* <!-- Mobile Menu  --> */}
                <div className="mobile-menu">
                <div className="menu-backdrop" onClick={handleRemove}/>
                <nav className="menu-box">
                    <div className="upper-box">
                    <div className="nav-logo"><Link to="/"><img src={MobileLogo} alt=""/></Link></div>
                    <div className="close-btn" onClick={handleRemove}><i className="icon fa fa-times"></i></div>
                    </div>
                    <ul className="navigation clearfix">
                    <MobileMenu/>
                    </ul>
                    <ul className="contact-list-one">
                    <li>
                        {/* <!-- Contact Info Box --> */}
                        <div className="contact-info-box">
                        <i className="icon lnr-icon-phone-handset"></i>
                        <span className="title">Call Now</span>
                        <Link to="#">+92 (8800) - 98670</Link>
                        </div>
                    </li>
                    <li>
                        {/* <!-- Contact Info Box --> */}
                        <div className="contact-info-box">
                        <span className="icon lnr-icon-envelope1"></span>
                        <span className="title">Send Email</span>
                        <Link to="#">help@company.com</Link>
                        </div>
                    </li>
                    <li>
                        {/* <!-- Contact Info Box --> */}
                        <div className="contact-info-box">
                        <span className="icon lnr-icon-clock"></span>
                        <span className="title">Send Email</span>
                        Mon - Sat 8:00 - 6:30, Sunday - CLOSED
                        </div>
                    </li>
                    </ul>
                    <ul className="social-links">
                    <li><Link to="#"><i className="fab fa-x-twitter"></i></Link></li>
                    <li><Link to="#"><i className="fab fa-facebook-f"></i></Link></li>
                    <li><Link to="#"><i className="fab fa-pinterest"></i></Link></li>
                    <li><Link to="#"><i className="fab fa-instagram"></i></Link></li>
                    </ul>
                </nav>
                </div>

                {/* <!-- Header Search --> */}
                <div className="search-popup">
                <span className="search-back-drop" onClick={handleToggle}/>
                <button className="close-search" onClick={handleToggle}><span className="fa fa-times"></span></button>
                <div className="search-inner">
                    <form method="post" action="/">
                    <div className="form-group">
                        <input type="search" name="search-field" placeholder="Search..." />
                        <button type="submit"><i className="fa fa-search"></i></button>
                    </div>
                    </form>
                </div>
                </div>
                {/* <!-- End Header Search --> */}

                {/* <!-- Sticky Header  --> */}
                <div className={`sticky-header ${scroll ? "fixed-header animated slideInDown" : ""}`}>
                <div className="auto-container">
                    <div className="inner-container">
                    <div className="logo">
                        <Link to="/"><img src={StickyLogo} alt=""/></Link>
                    </div>
                    <div className="nav-outer">
                        <nav className="main-menu">
                        <div className="navbar-collapse show collapse clearfix">
                            <ul className="navigation clearfix">
                            <NavLinks />
                            </ul>
                        </div>
                        </nav>
                        <div className="mobile-nav-toggler" onClick={handleOpen}><span className="icon lnr-icon-bars"></span></div>
                    </div>
                    </div>
                </div>
                </div>

            </div>
        </header>
        </>
    );
};

export default Header2;