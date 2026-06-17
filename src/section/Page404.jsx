import { Link } from "react-router-dom";
import React from 'react';
import ErrorImage01 from "../assets/images/resource/404.png";

const Error = () => {
    return (
        <>
	<section className="">
		<div className="auto-container pt-130 pb-130">
			<div className="row">
				<div className="col-xl-12">
					<div className="error-page__inner">
						<div className="error-page__title-box">
							<img src={ErrorImage01} alt=""/>
							<h3 className="error-page__sub-title text-white">Page not found!</h3>
						</div>
						<p className="error-page__text">Sorry we can't find that page! The page you are looking <br/> for
							was never existed.</p>
						<form className="error-page__form dark-style">
							<div className="error-page__form-input">
								<input type="search" placeholder="Search here"/>
								<button type="submit"><i className="lnr lnr-icon-magnifier"></i></button>
							</div>
						</form>
						<Link to="/" className="theme-btn btn-style-one shop-now"><span className="btn-title">Back to Home</span></Link>
					</div>
				</div>
			</div>
		</div>
	</section>
        </>
    );
};

export default Error;