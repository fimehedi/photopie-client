import React from 'react';
import { Outlet } from 'react-router-dom';

const DashboardMain = () => {
	return (
		<main className="flex-1 overflow-x-hidden overflow-y-auto">
			<div className="container mx-auto px-1 sm:px-6 py-8 absolute md:relative left-0">
				<Outlet />
			</div>
		</main>
	);
};

export default DashboardMain;
