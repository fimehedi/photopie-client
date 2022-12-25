import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddService from '../components/dashboard/AddService';
import AdminList from '../components/dashboard/AdminList';
import Bookings from '../components/dashboard/Bookings';
import MakeAdmin from '../components/dashboard/MakeAdmin';
import ServicesTable from '../components/dashboard/ServicesTable';
import ClientLayout from '../layout/ClientLayout';
import DashboardLayout from '../layout/DashboardLayout';
import CheckoutPage from '../pages/client/CheckoutPage';
import Home from '../pages/client/Home';
import NotFoundPage from '../pages/client/NotFoundPage';
import OrdersPage from '../pages/client/OrdersPage';
import ServiceDetailsPage from '../pages/client/ServiceDetailsPage';
import ServicesPage from '../pages/client/ServicesPage';
import Authentication from '../pages/shared/Authentication';
import RequireAuth from './RequireAuth';

const AppRouter = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<ClientLayout />}>
					<Route path="/" element={<Home />} />
					<Route path="services/" element={<ServicesPage />} />
					<Route path="service/:id/" element={<ServiceDetailsPage />} />
					<Route path="checkout/:id/" element={<CheckoutPage />} />
					<Route path="checkout/:id/" element={<CheckoutPage />} />
					<Route
						path="orders/"
						element={
							<RequireAuth redirectTo="/login">
								<OrdersPage />
							</RequireAuth>
						}
					/>

					<Route
						exact
						path="signup/"
						element={<Authentication isSignup={true} />}
					/>
					<Route
						exact
						path="login/"
						element={<Authentication isSignup={false} />}
					/>
					<Route
						path="*"
						element={<NotFoundPage code={404} msg={'Sorry! Page Not Found!'} />}
					/>
				</Route>

				<Route
					path="/dashboard/"
					element={
						<RequireAuth redirectTo="/" onlyForAdmin={true}>
							<DashboardLayout />
						</RequireAuth>
					}
				>
					<Route path="bookings/" element={<Bookings />} />
					<Route path="services/" element={<ServicesTable />} />
					<Route path="add-service/" element={<AddService />} />
					<Route exact path="make-admin/" element={<MakeAdmin />} />
					<Route path="admin-list/" element={<AdminList />} />
					<Route
						path="/dashboard/*"
						element={
							<div className="grid place-items-center h-96 text-gray-500 dark:text-gray-300 text-xl border-4 border-gray-300 border-dashed uppercase">
								404 Page not found
							</div>
						}
					/>
				</Route>
			</Routes>
		</Router>
	);
};

export default AppRouter;
