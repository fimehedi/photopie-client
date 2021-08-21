import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = ({ code, msg }) => {
    return (
        <div className="bg-gray-100 justify-center" style={{ minHeight: 500 }}>
            <center className="m-auto pt-10">
                <div className=" tracking-widest"><br />
                    <span className="text-gray-500 text-6xl block"><span>{code}</span></span><br />
                    <span className="text-gray-500 text-xl block">{msg}</span>
                </div>
            </center>
            <center className="py-6">
                <Link to="/" className="text-gray-500 font-mono text-xl bg-gray-200 p-3 rounded-md hover:shadow-md">Go back </Link>
            </center>
        </div>
    );
};

export default NotFound;;;