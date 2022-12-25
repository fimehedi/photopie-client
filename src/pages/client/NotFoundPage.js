import React from 'react';
import NotFound from '../../components/shared/NotFound';

const NotFoundPage = ({ code, msg }) => {
	return (
		<main>
			<NotFound code={code} msg={msg} />
		</main>
	);
};

export default NotFoundPage;
