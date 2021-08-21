import React, { useEffect, useState } from 'react';
import ServiceRow from './ServiceRow';

const ServicesTable = () => {

    const [loading, setLoading] = useState(true);
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://photo-pie.herokuapp.com/services')
            .then(res => res.json())
            .then(data => {
                setServices(data);
                setLoading(false);
            });
    }, []);

    const handleDelete = id => {
        fetch('https://photo-pie.herokuapp.com/delete-service/' + id, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.isDeleted) {
                    const restServices = services.filter(service => service._id !== id);
                    setServices(restServices);
                }
                else {
                    alert('Something went wrong!');
                }
            });

    };

    return (
        <div className="bg-white rounded">
            <div className="container mx-auto py-6 p-2 sm:p-6 font-mono">
                <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
                    <div className="w-full overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                                    <th className="px-4 py-3">Service Name</th>
                                    <th className="px-4 py-3">Service Cost</th>
                                    <th className="px-4 py-3 text-right">Action</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white">
                                {
                                    services.map(service => <ServiceRow key={service._id} service={service} handleDelete={handleDelete} />)
                                }
                            </tbody>
                        </table>
                        {
                            !services.length && <p className="p-4 text-center">No data found!</p>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesTable;