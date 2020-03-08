import React, { Fragment } from 'react';

const Sale = ({ propertyWorthSell, setPropertyWorthSell, setPropertyTypeSell, setMortgageSell, setLocationSell }) => {
	return (
		<Fragment>
			<div className="rounded bg-white p-8 shadow-xl mb-4">
				<h1 className="mb-4 text-4xl">Your Sale</h1>
				<div className="mb-4">
					<p>The property is worth £</p>
					<input
						type="text"
						name="propertySell"
						className="w-full border-b-2 mt-4"
						onChange={e => setPropertyWorthSell(e.target.value)}
						value={propertyWorthSell}
					/>
				</div>
				<div>
					<span className="mr-4">The property is a</span>
					<button className="btn-menu-sale-property transition duration-500 ease-in-out bg-teal-600 hover:bg-teal-700 text-white text-center w-8 p-2 rounded shadow-md mr-4 w-auto uppercase mb-4" onClick={() => setPropertyTypeSell("Freehold")}>
						Freehold
					</button>
					<button className="btn-menu-sale-property transition duration-500 ease-in-out bg-teal-600 hover:bg-teal-700 text-white text-center w-8 p-2 rounded shadow-md mr-4 w-auto uppercase mb-4" onClick={() => setPropertyTypeSell("Leashold")}>
						Leasehold
					</button>
					<span className="ml-4">.</span>
				</div>
				<div>
					<span className="mr-4">There</span>
					<button className="btn-menu-sale-mortgage transition duration-500 ease-in-out bg-teal-600 hover:bg-teal-700 text-white text-center w-8 p-2 rounded shadow-md mr-4 w-auto uppercase mb-4" onClick={() => setMortgageSell("Yes")}>
						Will
					</button>
					<button className="btn-menu-sale-mortgage transition duration-500 ease-in-out bg-teal-600 hover:bg-teal-700 text-white text-center w-8 p-2 rounded shadow-md mr-4 w-auto uppercase mb-4" onClick={() => setMortgageSell("No")}>
						Wll Not
					</button>
					<span className="ml-4">be a mortgage on this property.</span>
				</div>
				<div>
					<span className="mr-4">The property is located in</span>
					<button className="btn-menu-sale-country transition duration-500 ease-in-out bg-teal-600 hover:bg-teal-700 text-white text-center w-8 p-2 rounded shadow-md mr-4 w-auto uppercase mb-4" onClick={() => setLocationSell("England")}>
						England
					</button>
					<button className="btn-menu-sale-country transition duration-500 ease-in-out bg-teal-600 hover:bg-teal-700 text-white text-center w-8 p-2 rounded shadow-md mr-4 w-auto uppercase mb-4" onClick={() => setLocationSell("Wales")}>
						Wales
					</button>
				</div>
			</div>
		</Fragment>
	);
};

export default Sale;
