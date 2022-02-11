import React from 'react';
import {Helmet} from "react-helmet";
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <>
        <Helmet>
            <title>Cvision Automotive | 404 Not Found</title>
        </Helmet>
        <section className="notFound">
            <div className="notfound-text">
                <h2>404</h2>
                <div className="bar">
                    <h3>This page could not be found</h3>
                </div>
            </div>
            <Link to="/" data-aos="fade" data-aos-delay="600" data-aos-duration="1000">
                <button>Go Back</button>
            </Link>
        </section>
        </>
    );
};

export default NotFound;