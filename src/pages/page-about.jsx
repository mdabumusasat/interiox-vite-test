import React from "react";
import Layout from '../layouts/Layout';
import PageTitle from "../section/PageTitle";
import About from "../section/Home1/About";
import Marquee from "../section/about/Marquee";
import Video from "../section/Home1/Video";
import Teams from "../section/Home1/Teams";

function AboutUs() {

    return (
        <>
        <div className="page-wrapper">
            <Layout>
                <PageTitle pageName="About Us" />
                <About />
                <Marquee />
                <Video />
                <Teams />
            </Layout>
        </div>
        </>
    )
}
export default AboutUs