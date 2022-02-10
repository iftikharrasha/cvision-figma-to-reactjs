import React from 'react';
import facebook from '../../Images/facebook.svg';
import twitter from '../../Images/twitter.svg';
import linkedin from '../../Images/linkedin.svg';
import instagram from '../../Images/instagram.svg';
import girl01 from '../../Images/girl01.webp';
import girl02 from '../../Images/girl02.webp';
import girl03 from '../../Images/girl03.webp';
import guy01 from '../../Images/guy01.webp';
import guy02 from '../../Images/guy02.webp';
import guy03 from '../../Images/guy03.webp';
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";

const Team = () => {
    const people = [
        {
            id: 1,
            url: girl01,
            title:"Name of Girl01"
        },
        {
            id: 2,
            url: girl02,
            title:"Name of Girl02"
        },
        {
            id: 3,
            url: girl03,
            title:"Name of Girl03"
        },
        {
            id: 4,
            url: guy01,
            title:"Name of guy01"
        },
        {
            id: 5,
            url: guy02,
            title:"Name of guy02"
        },
        {
            id: 6,
            url: guy03,
            title:"Name of guy03"
        },
    ]

    const options = {
        settings: {
          autoplaySpeed: 1500,
          transitionSpeed: 900,
          showDownloadButton: false,
        },
        buttons: {
            showAutoplayButton: true,
            showCloseButton: true,
            showDownloadButton: false,
            showFullscreenButton: false,
            showNextButton: true,
            showPrevButton: true,
          }
    };

    return (
        <>
            <section className="team" id="team">
                <div className="container">
                    <div className="team-contents">
                        <div className="team-left">
                            <SimpleReactLightbox>
                                <SRLWrapper options={options}>
                                    {
                                        people.map((item) => (
                                            <div className="team-img" key={item.id} data-aos="fade-zoom-in" data-aos-delay={item.id*100} data-aos-duration="1000" data-aos-offset="0">
                                                <img src={item.url} alt={item.title}/>
                                            </div>
                                        ))
                                    }
                                </SRLWrapper>
                            </SimpleReactLightbox>
                        </div>
                        <div className="team-right">
                            <h6 data-aos="fade-zoom-in" data-aos-delay="800" data-aos-duration="1000">The Team</h6>
                            <h2 data-aos="fade-zoom-in" data-aos-delay="1000" data-aos-duration="1000">People Who Want To <br /> Change Everything</h2>
                            <p data-aos="fade-zoom-in" data-aos-delay="1200" data-aos-duration="1000">“We want to provide a safe ride for everyone, regardless of their vehicle type & model. Our solution doesn't have sophisticated requirements for installation but offers many useful & practical features, suitable both for independent car owners and fleet management needs.” (с)...
                                <br /><br />
                                CVISION project was created by a team of highly qualified experts in AI image processing and advanced driver monitoring systems. These people united on the way to the main goal – to make the modern road environment safer and more predictable for everyone. That is why they decided to bring together their experience, knowledge, and skills to research, implementation & customization AI algorithms for embedded semi-automative driving systems.
                            </p>
                            <div className="social-icons">
                                <ul>
                                    <li data-aos="fade-zoom-in" data-aos-easing="fade-up" data-aos-delay="1400" data-aos-duration="1000"><a href="#" target="_blank" rel="noopener noreferrer"><img src={facebook} alt={facebook}/></a></li>
                                    <li data-aos="fade-zoom-in" data-aos-easing="fade-up" data-aos-delay="1600" data-aos-duration="1000"><a href="#" target="_blank" rel="noopener noreferrer"><img src={twitter} alt={twitter}/></a></li>
                                    <li data-aos="fade-zoom-in" data-aos-easing="fade-up" data-aos-delay="1800" data-aos-duration="1000"><a href="#" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt={linkedin}/></a></li>
                                    <li data-aos="fade-zoom-in" data-aos-easing="fade-up" data-aos-delay="2000" data-aos-duration="1000"><a href="#" target="_blank" rel="noopener noreferrer"><img src={instagram} alt={instagram}/></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Team;