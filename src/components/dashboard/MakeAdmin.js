import React, { useState } from 'react';

const MakeAdmin = () => {
	const [loading, setLoading] = useState(false);

	const [admin, setAdmin] = useState({
		email: '',
	});

	const handleOnChange = (e) => {
		const newAdmin = { ...admin };
		newAdmin.email = e.target.value;
		setAdmin(newAdmin);
	};

	const handleOnSubmit = (e) => {
		if (admin.email) {
			setLoading(true);
			fetch(process.env.REACT_APP_API_ROOT + 'make-admin', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(admin),
			})
				.then((res) => res.json())
				.then((data) => {
					if (data.isAdded) {
						setAdmin({ email: '' });
						alert('Admin Added Successfully!');
						e.target.reset();
					} else if (data.isAdmin) {
						alert('User already in admin panel!');
					} else {
						alert('Something went wrong!');
					}
					setLoading(false);
				});
		} else {
			alert('All fields are required!');
		}

		e.preventDefault();
	};

	return (
		<div className="bg-white rounded">
			<form onSubmit={handleOnSubmit} className="p-6">
				<label className="font-semibold text-sm text-gray-600 pb-1 block">
					Email
				</label>
				<input
					onChange={handleOnChange}
					name="email"
					type="text"
					className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
					placeholder="Service Title"
				/>

				<button
					type="submit"
					className="transition duration-200 border border-black rounded w-full p-1.5 hover:text-white hover:bg-gray-800"
				>
					<span className="inline-block mr-2">
						{loading ? 'Processing...' : 'Make Admin'}
					</span>
				</button>
			</form>
		</div>
	);
};

export default MakeAdmin;
