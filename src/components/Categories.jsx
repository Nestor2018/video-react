import React from 'react';

const Categories = ({ children, title }) => (
	<div className="Categories">
		<h3 className="categories__title">{title}</h3>
		{children}
	</div>
);

export default Categories;
