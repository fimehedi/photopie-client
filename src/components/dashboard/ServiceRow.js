import React from 'react';

const ServiceRow = ({ service, handleDelete }) => {
    const { _id, title, serviceCost } = service;
    return (
        <tr className="text-gray-700">
            <td className="px-4 py-3 border">
                <p className="text-black">{title}</p>
            </td>
            <td className="px-4 py-3 text-ms border">${serviceCost}</td>
            <td className="px-4 py-3 text-xs border text-right">
                <button onClick={() => handleDelete(_id)} className="inline-block text-sm px-4 py-2 leading-none border rounded text-white bg-red-600">Remove</button>
            </td>
        </tr>
    );
};

export default ServiceRow;