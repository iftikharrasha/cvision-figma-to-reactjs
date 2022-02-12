import React from 'react';
import Lottie from 'react-lottie';
import arc from '../../Images/arc.svg';
import animationData from '../../Images/loader.json';

const Loader = () => {
    const defaultOptions = {
		loop: true,
		autoplay: true, 
		animationData: animationData,
		rendererSettings: {
		  preserveAspectRatio: 'xMidYMid slice'
		}
	};

    return (
        <>
            <div class="preloader">
                <Lottie options={defaultOptions}
                    height={300}
                    width={300}/>
                <img src={arc} alt="arc" className="arc"/>
            </div>
        </>
    );
};

export default Loader;