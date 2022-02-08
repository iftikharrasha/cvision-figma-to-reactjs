import React from 'react';
import Header from '../../Components/Header/Header';
import Hero from '../../Components/Hero/Hero';
import Features from '../../Components/Features/Features';
import About from '../../Components/About/About';
import Product from '../../Components/Product/Product';

const Home = () => {
    return (
        <>
            <Header/>
            <Hero/>
            <Features/>
            <About/>
            <Product/>
        </>
    );
};

export default Home;