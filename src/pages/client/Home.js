import React from 'react';
import Banner from '../../components/home/Banner';
import Photographer from '../../components/home/Photographer';
import Services from '../../components/shared/Services';

const Home = () => {
	return (
		<main>
			<Banner />
			<Services seeMore={true} />
			<Photographer />
		</main>
	);
};

export default Home;
