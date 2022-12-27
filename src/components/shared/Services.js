import React, { useEffect, useState } from 'react';
import GridSection from './GridSection';
import Service from './Service';

const Services = ({ seeMore }) => {

    const [loading, setLoading] = useState(true);
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch(process.env.REACT_APP_API_ROOT + 'services')
            .then(res => res.json())
            .then(data => {
                if (seeMore) {
                    setServices(data.slice(0, 5));
                }
                else {
                    setServices(data);
                }
                setLoading(false);
            });
    }, [seeMore]);


    return (
        <GridSection
            title="Services"
            subTitle="What can we do for you?"
            summary="Nulla mattis aliquet lorem in fringilla. Proin mollis lorem ligula, id feugiat diam."
            link="/services"
            seeMore={services.length > 0 && seeMore}
        >
            {
                services.map(service => <Service key={service._id} service={service} />)
            }
            {
                !services.length && <p className="text-center pt-20 text-gray-400">{loading ? 'Loading...' : 'No data found'}</p>
            }

        </GridSection>
    );
};

export default Services;