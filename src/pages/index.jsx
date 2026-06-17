import React from "react";
import Layout from '../layouts/Layout';
import Banner from "../section/Home1/Banner";
import About from "../section/Home1/About";
import Project from "../section/Home1/Project";
import Service from "../section/Home1/Service";
import Video from "../section/Home1/Video";
import Feature from "../section/Home1/Feature";
import Testimonial from "../section/Home1/Testimonial";
import Teams from "../section/Home1/Teams";
import Contact from "../section/Home1/Contact";
import News from "../section/Home1/News";

function Home1() {
    return (
        <>
        <div className="page-wrapper">
            <Layout>
                <Banner />
                <About />
                <Project />
                <Service />
                <Video />
                <Feature />
                <Testimonial />
                <Teams />
                <Contact />
                <News />
            </Layout>
        </div>
        </>
    );
}
export default Home1;