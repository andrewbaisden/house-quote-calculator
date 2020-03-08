import React, { Fragment } from 'react';

const YourQuote = ({type, people, propertyWorth, propertyType, mortgage, location}) => {
	return (
		<Fragment>
			<div className="rounded bg-white p-8 shadow-xl mb-4">
				<h1 className="mb-4 text-4xl">Your Quote</h1>
				<div>
	<h2 className="text-2xl">{type}</h2>
	<p>Number of People: {people}</p>
	<p>Property Worth: £{propertyWorth}</p>
	<p>Property Type: {propertyType}</p>
	<p>Is there a Mortgage?: {mortgage}</p>
	<p>Location: {location}</p>
				</div>
			</div>
		</Fragment>
	);
};

export default YourQuote;
