import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AddService from './AddService';
import AdminList from './AdminList';
import Bookings from './Bookings';
import MakeAdmin from './MakeAdmin';
import ServicesTable from './ServicesTable';

const DashboardMain = () => {
    return (
        <main className="flex-1 overflow-x-hidden overflow-y-auto">
            <div className="container mx-auto px-1 sm:px-6 py-8 absolute md:relative left-0">
                {/*  */}
                <Switch>
                    <Route exact path="/dashboard/">
                        <Bookings />
                    </Route>
                    <Route exact path="/dashboard/bookings">
                        <Bookings />
                    </Route>
                    <Route exact path="/dashboard/services">
                        <ServicesTable />
                    </Route>
                    <Route exact path="/dashboard/add-service">
                        <AddService />
                    </Route>
                    <Route exact path="/dashboard/make-admin">
                        <MakeAdmin />
                    </Route>
                    <Route exact path="/dashboard/admin-list">
                        <AdminList />
                    </Route>
                    <Route exact path="/dashboard/*">
                        <div className="grid place-items-center h-96 text-gray-500 dark:text-gray-300 text-xl border-4 border-gray-300 border-dashed uppercase">
                            404 Page not found
                        </div>
                    </Route>
                </Switch>
            </div>
        </main>
    );
};

export default DashboardMain;