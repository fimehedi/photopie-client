import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ classes }) => {
    return (
        <div className={`fixed z-30 inset-y-0 left-0 w-60 transition duration-300 transform bg-white dark:bg-gray-900 overflow-y-auto lg:translate-x-0 lg:static lg:inset-0 ${classes}`} >
            <div className="flex items-center justify-center mt-8">
                <div className="flex items-center">
                    <Link to="/" className="text-gray-800 dark:text-white text-2xl font-semibold uppercase">photopie</Link>
                </div>
            </div>

            <nav className="flex flex-col mt-10 px-4 text-center">
                <Link to="/dashboard/bookings" className="mt-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-100  hover:bg-gray-200 dark:hover:bg-gray-800 rounded">
                    Bookings
                </Link>
                <Link to="/dashboard/services" className="mt-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-800 rounded">
                    Services
                </Link>
                <Link to="/dashboard/add-service" className="mt-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-800 rounded">
                    Add Service
                </Link>
                <Link to="/dashboard/make-admin" className="mt-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-800 rounded">
                    Make Admin
                </Link>
                <Link to="/dashboard/admin-list" className="mt-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-800 rounded">
                    Admin List
                </Link>
                <Link to="/" className="mt-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-800 rounded">
                    Back to home
                </Link>
            </nav>
        </div>

    );
};

export default Sidebar;