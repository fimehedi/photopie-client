import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../App';
import BookingRow from './BookingRow';

const Bookings = () => {
	const { loggedInUser } = useContext(userContext);

	const [loading, setLoading] = useState(true);
	const [bookings, setBookings] = useState([]);

	useEffect(() => {
		fetch(process.env.REACT_APP_API_ROOT + 'bookings')
			.then((res) => res.json())
			.then((data) => {
				setBookings(data);
				setLoading(false);
			});
	}, [loggedInUser.email]);

	return (
		<div className="bg-white rounded">
			<div className="container mx-auto py-6 p-2 sm:p-6 font-mono">
				<div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
					<div className="w-full overflow-x-auto">
						<table className="w-full">
							<thead>
								<tr className="text-md text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
									<th className="px-4 py-3">Service Name</th>
									<th className="px-4 py-3">Service Cost</th>
									<th className="px-4 py-3">Customer Email</th>
									<th className="px-4 py-3">Booking Date</th>
									<th className="px-4 py-3 text-right">Status</th>
								</tr>
							</thead>
							<tbody className="bg-white">
								{bookings.map((booking) => (
									<BookingRow key={booking._id} booking={booking} />
								))}
							</tbody>
						</table>
						{!bookings.length && (
							<p className="p-4 text-center text-gray-400">
								{loading ? 'Loading...' : 'No data found!'}
							</p>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Bookings;
