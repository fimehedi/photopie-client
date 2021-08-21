import React from 'react';
import photographerImg from '../../assets/img/photographer.jpg';

const Photographer = () => {

    const photographerStyle = {
        minHeight: 400,
        backgroundImage: `url(${photographerImg})`,
    };

    return (
        <section className="container mx-auto py-4 px-6 md:py-6">
            <div className="flex-column md:flex justify-center md:items-center  bg-gray-100 rounded overflow-hidden">
                <div className="flex-1 overflow-hidden bg-cover bg-center bg-no-repeat" style={photographerStyle}>
                </div>
                <div className="flex-1 p-10">
                    <p className="uppercase tracking-widest text-xs text-gray-400">Photographer</p>
                    <h2 className="uppercase font-family-bebas tracking-widest text-3xl py-5 text-gray-800">Ansel Adams</h2>
                    <p className="text-justify text-gray-500">Ansel Easton Adams was an American landscape photographer and environmentalist known for his black-and-white images of the American West. He helped found Group f/64, an association of photographers advocating "pure" photography which favored sharp focus and the use of the full tonal range of a photograph.</p>
                </div>
            </div>
        </section>
    );
};

export default Photographer;