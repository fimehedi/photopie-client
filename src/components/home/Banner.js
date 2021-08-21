import React from 'react';
import { Link } from 'react-router-dom';
import bannerImg from '../../assets/img/banner.jpg';

const Banner = () => {

    const bannerStyle = {
        height: 500,
        backgroundImage: `url(${bannerImg})`,
        opacity: 0.9
    };

    return (
        <section className="banner bg-center bg-cover bg-no-repeat" style={bannerStyle}>
            <div className="text-white relative z-40 p-28 top-10 sm:top-20 tracking-widest text-center px-5 md:px-28 md:text-left">
                <h2 className="font-family-bebas tracking-widest text-4xl lg:text-6xl">The Foggy morning</h2>
                <p className="text-gray-200 py-5 text-sm md:text-md">Maecenas volutpat consequat orci id consectetur. <br /> Namvulput quam turpis, id tristique nibh ullamcorper dignissim.</p>
                <Link to="/services" className="ransition duration-200 inline-block text-lg px-5 py-3 leading-none border rounded text-white border-white hover:bg-gray-800 hover:text-white hover:border-gray-800">Services</Link>
            </div>
        </section>
    );
};

export default Banner;