import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Authentication from '../pages/Authentication';
import CheckoutPage from '../pages/CheckoutPage';
import Dashboard from '../pages/Dashboard';
import Home from '../pages/Home';
import NotFoundPage from '../pages/NotFoundPage';
import OrdersPage from '../pages/OrdersPage';
import ServiceDetailsPage from '../pages/ServiceDetailsPage';
import ServicesPage from '../pages/ServicesPage';
import PrivateRoute from './PrivateRoute';

const AddRouter = ({ children }) => {

    return (
        <Router>
            {children}
            <Switch>
                <Route exact path='/' >
                    <Home />
                </Route>
                <Route path='/services'>
                    <ServicesPage />
                </Route>
                <Route path='/service/:id'>
                    <ServiceDetailsPage />
                </Route>

                <PrivateRoute exact path='/checkout/:id'>
                    <CheckoutPage />
                </PrivateRoute>

                <PrivateRoute exact path='/orders'>
                    <OrdersPage />
                </PrivateRoute>

                <PrivateRoute isOnlyAdmin={true} path='/dashboard' >
                    <Dashboard />
                </PrivateRoute>

                <Route exact path='/signup'>
                    <Authentication isSignup={true} />
                </Route>
                <Route exact path='/login'>
                    <Authentication isSignup={false} />
                </Route>

                <Route path='*'>
                    <NotFoundPage code={404} msg={'Sorry! Page Not Found!'} />
                </Route>
            </Switch>
        </Router>
    );
};

export default AddRouter;