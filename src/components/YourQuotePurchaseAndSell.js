import React, { Fragment } from 'react';

const YourQuotePurchaseAndSell = ({
	type,
	people,
	propertyWorth,
	propertyType,
	mortgage,
	location,
	propertyWorthPurchase,
	propertyTypePurchase,
	mortgagePurchase,
	gifted,
	gifting,
	buyer,
	investment
}) => {
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
					<p>Property Worth Purchase: {propertyWorthPurchase}</p>
					<p>Property Type Purchase: {propertyTypePurchase}</p>
					<p>Is there a Mortgage?: {mortgagePurchase}</p>
					<p>Is is gifted?: {gifted}</p>
					<p>How many are gifting?: {gifting}</p>
					<p>First time buyer?: {buyer}</p>
					<p>Second Investment?: {investment}</p>
				</div>
			</div>
		</Fragment>
	);
};

export default YourQuotePurchaseAndSell;
