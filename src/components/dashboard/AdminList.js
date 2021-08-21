import React, { useEffect, useState } from 'react';

const AdminList = () => {

    const [loading, setLoading] = useState(true);
    const [admins, setAdmins] = useState([]);
    useEffect(() => {
        fetch('https://photo-pie.herokuapp.com/all-admins')
            .then(res => res.json())
            .then(data => {
                setAdmins(data);
                setLoading(false);
            });
    }, []);

    const handleDelete = id => {
        fetch('https://photo-pie.herokuapp.com/remove-admin/' + id, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.isDeleted) {
                    const restAdmins = admins.filter(service => service._id !== id);
                    setAdmins(restAdmins);
                }
                else {
                    alert('Something went wrong!');
                }
            });

    };

    return (
        <div className="bg-white rounded">
            <div className="container mx-auto py-6 p-2 sm:p-6 font-mono">
                <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
                    <div className="w-full overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                                    <th className="px-4 py-3">Admin Email</th>
                                    <th className="px-4 py-3 text-right">Action</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white">
                                {
                                    admins.map(admin => <tr key={admin._id} className="text-gray-700">
                                        <td className="px-4 py-3 border">
                                            <p className="text-black">{admin.email}</p>
                                        </td>
                                        <td className="px-4 py-3 text-xs border text-right">
                                            <button onClick={() => handleDelete(admin._id)} className="inline-block text-sm px-4 py-2 leading-none border rounded text-white bg-red-600">Remove</button>
                                        </td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminList;