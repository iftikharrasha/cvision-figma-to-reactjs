import React from 'react';
import globoconnect from '../../Images/globoconnect-logo.webp';
import ambarella from '../../Images/ambarella-logo.webp';
import cipia from '../../Images/cipia-logo.webp';
import jabil from '../../Images/jabil-logo.webp';
import seat from '../../Images/seat-logo.webp';
import SwiperCore, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

SwiperCore.use([Pagination]);

const Sponsors = () => {
    
    const partners = [
        {
            id: 1,
            url: globoconnect,
            title:"Globoconnect"
        },
        {
            id: 2,
            url: cipia,
            title:"Cipia"
        },
        {
            id: 3,
            url: ambarella,
            title:"Ambarella"
        },
        {
            id: 4,
            url: jabil,
            title:"Jabil"
        },
        {
            id: 5,
            url: seat,
            title:"Seat"
        },
        {
            id: 6,
            url: globoconnect,
            title:"Globoconnect-2"
        },
        {
            id: 7,
            url: cipia,
            title:"Cipia-2"
        },
    ]

    return (
        <>
            <section className="sponsors" id="sponsors">
                <div className="container">
                    <div className="sponsors-contents">
                        <h6>Our Sponsors & Partners</h6>
                        <h2>Your Safety Comes First</h2>
                        <p>And we can be proud that our partners and sponsors think the same, providing comprehensive support for the development of the CVISION project and improving the technological solutions used for camera-based driver monitoring systems.</p>

                        <div className="sponsors-slider">
                            <Swiper
                                grabCursor={true}
                                slidesPerView={5}
                                spaceBetween={10}
                                pagination={{
                                    clickable: true,
                                    dynamicBullets: true
                                }}
                                modules={[Pagination]}
                                className="mySwiper"
                                breakpoints={{
                                    320: {
                                      slidesPerView: 3,
                                    },
                                    400: {
                                      slidesPerView: 3,
                                    },
                                    640: {
                                      slidesPerView: 5
                                    },
                                }}
                            >
                                {
                                    partners.map((item) => (
                                        <SwiperSlide key={item.id}>
                                            <div className="single-item">
                                                <img src={item.url} alt={item.title} />
                                            </div>
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Sponsors;