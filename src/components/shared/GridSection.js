import React from 'react';
import { Link } from 'react-router-dom';

const GridSection = ({ title, subTitle, summary, link, children, seeMore }) => {
    return (
        <section className="container mx-auto py-6 px-6 md:py-10" style={{ minHeight: 500 }}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="py-5">
                    <p className="uppercase tracking-widest text-xs text-gray-400">{title}</p>
                    <h2 className="uppercase font-family-bebas tracking-widest text-3xl py-5 text-gray-800">{subTitle}</h2>
                    <p className="text-justify text-gray-500">{summary}</p>
                    {
                        seeMore && <Link to={link} className="inline-block text-lg px-5 py-2 mt-5 leading-none border rounded text-black border-black">See More</Link>
                    }
                </div>
                {
                    children
                }
            </div>
        </section>
    );
};

export default GridSection;