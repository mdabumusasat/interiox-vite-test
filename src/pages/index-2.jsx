import React from "react";
import Layout from '../layouts/Layout';
import Banner from "../section/Home2/Banner";
import Feature from "../section/Home2/Feature";
import About from "../section/Home2/About";
import Service from "../section/Home2/Service";
import Project from "../section/Home2/Project";
import Video from "../section/Home2/Video";
import Funfact from "../section/Home2/Funfact";
import Testimonial from "../section/Home2/Testimonial";
import CallToAction from "../section/Home2/CallToAction";
import Contact from "../section/Home2/Contact";
import News from "../section/Home2/News";

function Home2() {
    return (
        <>
        <div className="page-wrapper">
            <Layout HeaderStyle="two">
                <Banner />
                <Feature />
                <About />
                <Service />
                <Project />
                <Video />
                <Funfact />
                <Testimonial />
                <CallToAction />
                <Contact />
                <News />
            </Layout>
        </div>
        </>
    );
}
export default Home2