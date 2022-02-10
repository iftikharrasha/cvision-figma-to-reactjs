import React from 'react';
import Header from '../../Components/Header/Header';
import Hero from '../../Components/Hero/Hero';
import Features from '../../Components/Features/Features';
import About from '../../Components/About/About';
import Product from '../../Components/Product/Product';
import Team from '../../Components/Team/Team';
import Sponsors from '../../Components/Sponsors/Sponsors';
import Contact from '../../Components/Contact/Contact';

const Home = () => {
    return (
        <>
            <Header/>
            <Hero/>
            <Features/>
            <About/>
            <Product/>
            <Team/>
            <Sponsors/>
            <Contact/>
        </>
    );
};

export default Home;