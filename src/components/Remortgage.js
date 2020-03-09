import React, { Fragment } from 'react';

const Remortgage = ({
	propertyWorthRemortgage,
	setPropertyWorthRemortgage,
	setPropertyTypeRemortgage,
	setMortgageRemortgage,
	setOwnershipRemortgage,
	setSharedOwnershipRemortgage,
	setLocationRemortgage
}) => {
	return (
		<Fragment>
			<div className="rounded bg-white p-8 shadow-xl">
				<h1 className="mb-4 text-4xl">Your Remortage</h1>
				<div className="mb-4">
					<p>The property is worth £</p>
					<input
						type="text"
						name="property"
						className="w-full border-b-2 mt-4"
						onChange={e => setPropertyWorthRemortgage(e.target.value)}
						value={propertyWorthRemortgage}
					/>
				</div>
				<div>
					<span className="mr-4">The property is a</span>
					<button
						className="btn-menu-remortgage-property transition duration-500 ease-in-out bg-teal-600 hover:bg-teal-700 text-white text-center w-8 p-2 rounded shadow-md mr-4 w-auto uppercase mb-4"
						onClick={() => setPropertyTypeRemortgage('Freehold')}
					>
						Freehold
					</button>
					<button
						className="btn-menu-remortgage-property transition duration-500 ease-in-out bg-teal-600 hover:bg-teal-700 text-white text-center w-8 p-2 rounded shadow-md mr-4 w-auto uppercase mb-4"
						onClick={() => setPropertyTypeRemortgage('Leasehold')}
					>
						Leasehold
					</button>
					<span className="ml-4">.</span>
				</div>
				<div>
					<span className="mr-4">There</span>
					<button
						className="btn-menu-remortgage-mortgage transition duration-500 ease-in-out bg-teal-600 hover:bg-teal-700 text-white text-center w-8 p-2 rounded shadow-md mr-4 w-auto uppercase mb-4"
						onClick={() => setMortgageRemortgage('Yes')}
					>
						Is
					</button>
					<button
						className="btn-menu-remortgage-mortgage transition duration-500 ease-in-out bg-teal-600 hover:bg-teal-700 text-white text-center w-8 p-2 rounded shadow-md mr-4 w-auto uppercase mb-4"
						onClick={() => setMortgageRemortgage('No')}
					>
						Is Not
					</button>
					<span className="ml-4">an existing mortgage on this property.</span>
				</div>
				<div>
					<span className="mr-4">There</span>
					<button
						className="btn-menu-remortgage-transfer-ownership transition duration-500 ease-in-out bg-teal-600 hover:bg-teal-700 text-white text-center w-8 p-2 rounded shadow-md mr-4 w-auto uppercase mb-4"
						onClick={() => setOwnershipRemortgage('Yes')}
					>
						Will
					</button>
					<button
						className="btn-menu-remortgage-transfer-ownership transition duration-500 ease-in-out bg-teal-600 hover:bg-teal-700 text-white text-center w-8 p-2 rounded shadow-md mr-4 w-auto uppercase mb-4"
						onClick={() => setOwnershipRemortgage('No')}
					>
						Will Not
					</button>
					<span className="ml-4">be a transfer of ownership.</span>
				</div>
				<div>
					<span className="mr-4">There</span>
					<button
						className="btn-menu-remortgage-shared-ownership transition duration-500 ease-in-out bg-teal-600 hover:bg-teal-700 text-white text-center w-8 p-2 rounded shadow-md mr-4 w-auto uppercase mb-4"
						onClick={() => setSharedOwnershipRemortgage('Yes')}
					>
						Is
					</button>
					<button
						className="btn-menu-remortgage-shared-ownership transition duration-500 ease-in-out bg-teal-600 hover:bg-teal-700 text-white text-center w-8 p-2 rounded shadow-md mr-4 w-auto uppercase mb-4"
						onClick={() => setSharedOwnershipRemortgage('No')}
					>
						Is Not
					</button>
					<span className="ml-4">a shared ownership on this property.</span>
				</div>
				<div>
					<span className="mr-4">The property is located in</span>
					<button
						className="btn-menu-remortgage-country transition duration-500 ease-in-out bg-teal-600 hover:bg-teal-700 text-white text-center w-8 p-2 rounded shadow-md mr-4 w-auto uppercase mb-4"
						onClick={() => setLocationRemortgage('England')}
					>
						England
					</button>
					<button
						className="btn-menu-remortgage-country transition duration-500 ease-in-out bg-teal-600 hover:bg-teal-700 text-white text-center w-8 p-2 rounded shadow-md mr-4 w-auto uppercase mb-4"
						onClick={() => setLocationRemortgage('Wales')}
					>
						Wales
					</button>
				</div>
			</div>
		</Fragment>
	);
};

export default Remortgage;
