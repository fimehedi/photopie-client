import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetails = () => {

    const { id } = useParams();
    const [service, setService] = useState({});
    useEffect(() => {
        fetch('https://photo-pie.herokuapp.com/service/' + id)
            .then(res => res.json())
            .then(data => {
                setService(data);
            });
    }, [id]);


    return (
        <section className="container mx-auto px-6 my-6 rounded" style={{ minHeight: 500 }}>
            <div className="bg-gray-100 p-6">
                <div className="flex-column md:flex">
                    <div className="max-width flex-1">
                        <img src={service.imgUrl} alt="" className="rounded w-full" />
                    </div>
                    <div className="px-6 py-4 flex-1" >
                        <h2 className="font-family-bebas tracking-widest uppercase text-2xl">{service.title}</h2>
                        <h4 className=" text-lg text-gray-700 font-family-bebas tracking-widest">Cost: ${service.serviceCost}</h4>
                        <p className="text-justify text-gray-600 py-6">{service.description}</p>
                        <Link to={`/checkout/${id}`} className="uppercase inline-block text-sm px-8 py-3 mt-5 leading-none border rounded text-white  bg-gray-700 border-white">Booking Now</Link>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default ServiceDetails;