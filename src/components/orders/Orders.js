import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../App';

const Orders = () => {

    const { loggedInUser } = useContext(userContext);

    const [loading, setLoading] = useState(true);
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        fetch('https://photo-pie.herokuapp.com/bookings?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => {
                setBookings(data);
                setLoading(false);
            });
    }, [loggedInUser.email]);

    return (
        <section style={{ minHeight: 500 }}>
            <div className="container mx-auto p-6 font-mono">
                <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
                    <div className="w-full overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                                    <th className="px-4 py-3">Service Name</th>
                                    <th className="px-4 py-3">Service Cost</th>
                                    <th className="px-4 py-3">Booking Date</th>
                                    <th className="px-4 py-3 text-right">Status</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white">
                                {
                                    bookings.map(booking => <tr className="text-gray-700">
                                        <td className="px-4 py-3 border">
                                            <p className="text-black">{booking.service.title}</p>
                                        </td>
                                        <td className="px-4 py-3 text-ms border">${booking.service.serviceCost}</td>
                                        <td className="px-4 py-3 text-sm border">{booking.date}</td>
                                        <td className="px-4 py-3 text-xs border text-right">
                                            <span className={`px-2 py-1 font-semibold leading-tight rounded-sm capitalize
                                             ${booking.status === 'pending' && 'text-red-700 bg-red-100'}
                                             ${booking.status === 'onGoing' && 'text-yellow-700 bg-yellow-100'}
                                             ${booking.status === 'done' && 'text-green-700 bg-green-100'}
                                            `}
                                            >
                                                {booking.status} </span>
                                        </td>
                                    </tr>)
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Orders;