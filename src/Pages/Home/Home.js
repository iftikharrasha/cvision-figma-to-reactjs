import React, { useEffect } from 'react';
import Header from '../../Components/Header/Header';
import Hero from '../../Components/Hero/Hero';
import Features from '../../Components/Features/Features';
import About from '../../Components/About/About';
import Product from '../../Components/Product/Product';
import Team from '../../Components/Team/Team';
import Sponsors from '../../Components/Sponsors/Sponsors';
import Contact from '../../Components/Contact/Contact';
import Footer from '../../Components/Footer/Footer';
import {Helmet} from "react-helmet";
import Loader from '../../Components/Loader/Loader';

const Home = () => {

    useEffect(() => {
        const preloader = document.querySelector('.preloader');
        const main = document.querySelector('.main')
        setTimeout(() => {
            main.classList.add('view-content');
            preloader.classList.add('hide-preloader');
        }, 4000);
    }, []);

    return (
        <>
            <Helmet>
                <meta name="description" content="Meet newest camera-based solution with advanced driver monitoring system. Try semi-automatic driving experience, staying aware of any road & in-cabin changes."/>
                <meta name="keywords" content="driver attention monitoring, driver behavior monitoring system, emergency vehicle tracking, camera with artificial intelligence, driver fatigue monitoring system, camera-based driver monitoring systems"/>
                <title>ADAS/DMS CVISION – More than Ordinary AI DVRs</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/3.4.2/css/swiper.min.css"/>
            </Helmet>

            <Loader/>

            <main className="main">
                <Header/>
                <Hero/>
                <Features/>
                <About/>
                <Product/>
                <Team/>
                <Sponsors/>
                <Contact/>
                <Footer/>
            </main>
        </>
    );
};

export default Home;