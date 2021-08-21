import React from 'react';
import GridSection from '../shared/GridSection';
import Service from '../shared/Service';

const Blogs = () => {
    return (
        <GridSection
            title='Blog'
            subTitle="I'M SEARCHING BEAUTY"
            summary="Nulla mattis aliquet lorem in fringilla. Proin mollis lorem ligula, id feugiat diam."
            link="/blog"
        >
            {/* <Service /> */}
        </GridSection>
    );
};

export default Blogs;