import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service: { _id, title, imgUrl, serviceCost } }) => {


    const serviceStyle = {
        backgroundImage: `url(${imgUrl})`,
        minHeight: '240px',

    };
    return (
        <div className="service bg-center bg-cover bg-no-repeat rounded hover:text-gray-800" style={serviceStyle}>
            <div className="flex justify-center items-center h-full" style={{ background: 'rgba(0, 0, 0, 0.4)' }}>
                <div className="z-500 text-center">
                    <h2 className="uppercase text-white text-2xl font-family-bebas tracking-widest">{title}</h2>
                    <h4 className="text-gray-100 text-xl text-center font-family-bebas tracking-widest">${serviceCost}</h4>
                    <div className="button-group">
                        <Link to={`/service/${_id}`} className="uppercase inline-block text-sm px-5 py-2 mt-5 mr-4 leading-none border rounded text-white border-white">View More</Link>
                        <Link to={`/checkout/${_id}`} className="uppercase inline-block text-sm px-5 py-2 mt-5 leading-none border rounded text-black bg-gray-100 border-white">Booking</Link>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Service;