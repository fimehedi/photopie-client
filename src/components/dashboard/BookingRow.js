import React, { useState } from 'react';

const BookingRow = ({ booking }) => {
	const [status, setStatus] = useState(booking.status);

	const handleStatusChange = (id, status) => {
		fetch(process.env.REACT_APP_API_ROOT + 'change-booking-status/' + id, {
			method: 'PATCH',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ status }),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.isUpdated) {
					setStatus(status);
				}
			});
	};

	return (
		<tr className="text-gray-700">
			<td className="px-4 py-3 border">
				<p className="text-black">{booking.service.title}</p>
			</td>
			<td className="px-4 py-3 text-ms border">
				${booking.service.serviceCost}
			</td>
			<td className="px-4 py-3 text-sm border">{booking.user}</td>
			<td className="px-4 py-3 text-sm border">{booking.date}</td>
			<td className="px-4 py-3 text-xs border text-right">
				<select
					onChange={(e) => handleStatusChange(booking._id, e.target.value)}
					value={status}
					id="statusSelect"
					className={`p-2 text-xs outline-none rounded font-semibold
                        ${status === 'pending' && 'text-red-700 bg-red-100'}
                        ${
													status === 'onGoing' &&
													'text-yellow-700 bg-yellow-100'
												}
                        ${status === 'done' && 'text-green-700 bg-green-100'}
                    `}
				>
					<option value="pending" className="text-base text-red-700 bg-red-100">
						Pending
					</option>
					<option
						value="onGoing"
						className="text-base text-yellow-700 bg-yellow-100"
					>
						On Going
					</option>
					<option
						value="done"
						className="text-base text-green-700 bg-green-100"
					>
						Done
					</option>
				</select>
			</td>
		</tr>
	);
};

export default BookingRow;
