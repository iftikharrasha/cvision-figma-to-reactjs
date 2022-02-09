import React from 'react';
import people from '../../Images/people.webp';
import facebook from '../../Images/facebook.svg';
import twitter from '../../Images/twitter.svg';
import linkedin from '../../Images/linkedin.svg';
import instagram from '../../Images/instagram.svg';

const Team = () => {
    return (
        <>
            <section className="team" id="team">
                <div className="container">
                    <div className="team-contents">
                        <div className="team-left">
                            <img src={people} alt={people} />
                        </div>
                        <div className="team-right">
                            <h6>The Team</h6>
                            <h2>People Who Want To <br /> Change Everything</h2>
                            <p>“We want to provide a safe ride for everyone, regardless of their vehicle type & model. Our solution doesn't have sophisticated requirements for installation but offers many useful & practical features, suitable both for independent car owners and fleet management needs.” (с)...
                                <br /><br />
                                CVISION project was created by a team of highly qualified experts in AI image processing and advanced driver monitoring systems. These people united on the way to the main goal – to make the modern road environment safer and more predictable for everyone. That is why they decided to bring together their experience, knowledge, and skills to research, implementation & customization AI algorithms for embedded semi-automative driving systems.
                            </p>
                            <div className="social-icons">
                                <ul>
                                    <li><a href="#" target="_blank" rel="noopener noreferrer"><img src={facebook} alt={facebook}/></a></li>
                                    <li><a href="#" target="_blank" rel="noopener noreferrer"><img src={twitter} alt={twitter}/></a></li>
                                    <li><a href="#" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt={linkedin}/></a></li>
                                    <li><a href="#" target="_blank" rel="noopener noreferrer"><img src={instagram} alt={instagram}/></a></li>
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