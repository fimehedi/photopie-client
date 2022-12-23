import axios from 'axios';
import React, { useState } from 'react';

const AddService = () => {
	const [service, setService] = useState({
		title: '',
		description: '',
		serviceCost: 0,
		imgUrl: '',
	});

	const [status, setStatus] = useState('');
	const [loading, setLoading] = useState(false);

	const handleImgUpload = (event) => {
		const ImgData = new FormData();
		ImgData.set('key', '28b4e2b5c4640e2f955812ecdc64c65a');
		ImgData.append('image', event.target.files[0]);
		setStatus('Uploading...');
		axios
			.post('https://api.imgbb.com/1/upload', ImgData)
			.then(function (res) {
				const newService = { ...service };
				newService.imgUrl = res.data.data.display_url;
				setService(newService);
				setStatus('Uploaded');
			})
			.catch(function (error) {
				alert(error);
			});
	};

	const handleOnChange = (e) => {
		const newService = { ...service };
		newService[e.target.name] = e.target.value;
		setService(newService);
	};

	const handleOnSubmit = (e) => {
		if (
			service.title &&
			service.description &&
			service.serviceCost &&
			service.imgUrl
		) {
			setLoading(true);
			fetch(process.env.REACT_APP_API_ROOT + 'add-service', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(service),
			})
				.then((res) => res.json())
				.then((data) => {
					if (data.isAdded) {
						setService({
							title: '',
							description: '',
							serviceCost: '',
							imgUrl: '',
						});
						e.target.reset();
						setStatus('');
						alert('Successfully Added!');
					} else {
						alert('Something went wrong!');
					}
					setLoading(false);
				});
		} else {
			if (status === 'Uploading...') {
				alert('Wait for uploading cover!');
			} else {
				alert('All fields are required!');
			}
		}

		e.preventDefault();
	};

	return (
		<div className="bg-white rounded">
			<form onSubmit={handleOnSubmit} className="p-6">
				<label className="font-semibold text-sm text-gray-600 pb-1 block">
					Title
				</label>
				<input
					onChange={handleOnChange}
					name="title"
					type="text"
					className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
					placeholder="Service Title"
				/>

				<label className="font-semibold text-sm text-gray-600 pb-1 block">
					Cost
				</label>
				<input
					onChange={handleOnChange}
					name="serviceCost"
					type="number"
					className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
					placeholder="Service Cost"
				/>

				<label className="font-semibold text-sm text-gray-600 pb-1 block">
					Description
				</label>
				<textarea
					onChange={handleOnChange}
					name="description"
					className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
					placeholder="Service Description"
					rows="10"
				></textarea>

				<label className="font-semibold text-sm text-gray-600 pb-1 block">
					Photo <small>{status}</small>
				</label>
				<input
					onChange={handleImgUpload}
					name="serviceCover"
					type="file"
					className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
					placeholder="Customer Address"
				/>

				<button
					type="submit"
					className="transition duration-200 border border-black rounded w-full p-1.5 hover:text-white hover:bg-gray-800"
				>
					<span className="inline-block mr-2">
						{loading ? 'Processing...' : 'Add Service'}
					</span>
				</button>
			</form>
		</div>
	);
};

export default AddService;
