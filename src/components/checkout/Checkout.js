import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { userContext } from '../../App';

const Checkout = () => {
	const { loggedInUser } = useContext(userContext);
	const history = useHistory();

	const { id } = useParams();
	const [service, setService] = useState({});
	useEffect(() => {
		fetch(process.env.REACT_APP_API_ROOT + 'service/' + id)
			.then((res) => res.json())
			.then((data) => {
				setService(data);
			});
	}, [id]);

	const [booking, setBooking] = useState({});
	const [customer, setCustomer] = useState({});
	const [loading, setLoading] = useState(false);

	const handleOnChange = (e) => {
		const newCustomer = { ...customer };
		newCustomer[e.target.name] = e.target.value;
		setCustomer(newCustomer);

		const newBooking = { ...booking };
		newBooking.service = { ...service };
		newBooking.user = loggedInUser.email;
		newBooking.status = 'pending';

		const today = new Date().toDateString().split(' ');
		newBooking.date = `${today[2]} ${today[1]}, ${today[3]}`;

		setBooking(newBooking);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const confirmBooking = { ...booking, ...customer };
		const { service, user, customerEmail, name, phone, address } =
			confirmBooking;

		if (
			service?._id === id &&
			user &&
			customerEmail &&
			name &&
			phone &&
			address
		) {
			setLoading(true);
			fetch(process.env.REACT_APP_API_ROOT + 'add-booking', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(confirmBooking),
			})
				.then((res) => res.json())
				.then((data) => {
					if (data.isAdded) {
						history.push('/orders');
					} else {
						alert('Something went wrong!');
					}
					setLoading(false);
				});
		} else {
			alert('All fields are required!');
		}
	};

	return (
		<section className="container mx-auto p-6" style={{ minHeight: 500 }}>
			{service._id ? (
				<div className="bg-gray-100 p-6">
					<div className="flex-column md:flex gap-10">
						<div className="flex-1">
							<Link to={`/service/${id}`}>
								<img src={service.imgUrl} alt="" className="rounded w-full" />
								<h2 className="font-family-bebas tracking-widest uppercase text-2xl pt-4">
									{service.title}
								</h2>
								<h4 className=" text-lg text-gray-700 font-family-bebas tracking-widest">
									Cost: ${service.serviceCost}
								</h4>
							</Link>
						</div>
						<div className="flex-1">
							<form onSubmit={handleSubmit}>
								<label className="font-semibold text-sm text-gray-600 pb-1 block">
									Name
								</label>
								<input
									onChange={handleOnChange}
									name="name"
									type="text"
									className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
									placeholder="Customer Name"
								/>

								<label className="font-semibold text-sm text-gray-600 pb-1 block">
									E-mail
								</label>
								<input
									onChange={handleOnChange}
									name="customerEmail"
									type="email"
									className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
									placeholder="Customer Email Address"
								/>

								<label className="font-semibold text-sm text-gray-600 pb-1 block">
									Phone
								</label>
								<input
									onChange={handleOnChange}
									name="phone"
									type="text"
									className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
									placeholder="Customer Phone Number"
								/>

								<label className="font-semibold text-sm text-gray-600 pb-1 block">
									Address
								</label>
								<input
									onChange={handleOnChange}
									name="address"
									type="text"
									className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
									placeholder="Customer Address"
								/>

								<button
									type="submit"
									className="transition duration-200 border border-black rounded w-full p-1.5 hover:text-white hover:bg-gray-800"
								>
									<span className="inline-block mr-2">
										{loading ? 'Processing...' : 'Checkout'}
									</span>
								</button>
							</form>
						</div>
					</div>
				</div>
			) : (
				<p className="text-center pt-20 text-gray-400">Loading...</p>
			)}
		</section>
	);
};

export default Checkout;
