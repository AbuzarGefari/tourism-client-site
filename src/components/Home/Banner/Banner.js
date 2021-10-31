import React from 'react';
import './Banner.css';


const Banner = () => {
    const bannerSectionStyle = {
     
        backgroundSize : 'cover'
    }
    return (
        <div style={bannerSectionStyle} className=" min-h-screen flex items-center justify-center bg">
             <div className="container mx-auto px-3 lg:flex items-center justify-between">
                <div >
                    <h1 style={{fontFamily: `cursive`}} className="text-4xl md:text-6xl lg:text-8xl font-bold text-white text:text-center	">Booking Tour Package</h1>
                    <p style={{fontFamily: `Consolas`}} className="text-4xl mt-10 text-white">Welcome to visit our website</p>
                </div>
                
             </div>
        </div>
    );
};

export default Banner;