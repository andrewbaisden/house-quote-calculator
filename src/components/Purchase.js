import React, { Fragment } from 'react';

const Purchase = ({
	propertyWorth,
	setPropertyWorth,
	propertyTypeHandler,
	propertyMortgageHandler,
	propertyGiftedHandler,
	propertyGiftingHandler,
	propertyBuyerHandler,
	propertyInvestmentHandler
}) => {
	return (
		<Fragment>
			<div className="rounded bg-white p-8 shadow-xl">
				<h1 className="mb-4 text-4xl">Your Purchase</h1>
				<div className="mb-4">
					<p>The property is worth £</p>
					<input
						type="text"
						name="property"
						className="w-full border-b-2 mt-4"
						onChange={e => setPropertyWorth(e.target.value)}
						value={propertyWorth}
					/>
				</div>
				<div>
					<span className="mr-4">The property is a</span>
					<button
						className="btn-menu-purchase-property transition duration-500 ease-in-out bg-teal-600 hover:bg-teal-700 text-white text-center w-8 p-2 rounded shadow-md mr-4 w-auto uppercase mb-4"
						onClick={() => propertyTypeHandler('Freehold')}
					>
						Freehold
					</button>
					<button
						className="btn-menu-purchase-property transition duration-500 ease-in-out bg-teal-600 hover:bg-teal-700 text-white text-center w-8 p-2 rounded shadow-md mr-4 w-auto uppercase mb-4"
						onClick={() => propertyTypeHandler('Leasehold')}
					>
						Leasehold
					</button>
					<span className="ml-4">.</span>
				</div>
				<div>
					<span className="mr-4">There</span>
					<button
						className="btn-menu-purchase-mortgage transition duration-500 ease-in-out bg-teal-600 hover:bg-teal-700 text-white text-center w-8 p-2 rounded shadow-md mr-4 w-auto uppercase mb-4"
						onClick={() => propertyMortgageHandler('Yes')}
					>
						Will
					</button>
					<button
						className="btn-menu-purchase-mortgage transition duration-500 ease-in-out bg-teal-600 hover:bg-teal-700 text-white text-center w-8 p-2 rounded shadow-md mr-4 w-auto uppercase mb-4"
						onClick={() => propertyMortgageHandler('No')}
					>
						Wll Not
					</button>
					<span className="ml-4">be a mortgage on this property.</span>
				</div>
				<div>
					<span className="mr-4">There</span>
					<button
						className="btn-menu-purchase-gifted transition duration-500 ease-in-out bg-teal-600 hover:bg-teal-700 text-white text-center w-8 p-2 rounded shadow-md mr-4 w-auto uppercase mb-4"
						onClick={() => propertyGiftedHandler('Yes')}
					>
						Will
					</button>
					<button
						className="btn-menu-purchase-gifted transition duration-500 ease-in-out bg-teal-600 hover:bg-teal-700 text-white text-center w-8 p-2 rounded shadow-md mr-4 w-auto uppercase mb-4"
						onClick={() => propertyGiftedHandler('No')}
					>
						Wll Not
					</button>
					<span className="ml-4">be money gifted to this purchase.</span>
				</div>
				<div className="mb-4">
					<div>
						<span className="mr-4">There will be</span>
						<button
							className="btn-menu-purchase-gifting transition duration-500 ease-in-out bg-teal-600 hover:bg-teal-700 text-white text-white text-center w-10 p-2 rounded shadow-md mr-4 uppercase"
							onClick={() => propertyGiftingHandler('1')}
						>
							1
						</button>
						<button
							className="btn-menu-purchase-gifting transition duration-500 ease-in-out bg-teal-600 hover:bg-teal-700 text-white text-center w-10 p-2 rounded shadow-md mr-4 uppercase"
							onClick={() => propertyGiftingHandler('2')}
						>
							2
						</button>
						<button
							className="btn-menu-purchase-gifting transition duration-500 ease-in-out bg-teal-600 hover:bg-teal-700 text-white text-center w-10 p-2 rounded shadow-md mr-4 uppercase"
							onClick={() => propertyGiftingHandler('3')}
						>
							3
						</button>
						<button
							className="btn-menu-purchase-gifting transition duration-500 ease-in-out bg-teal-600 hover:bg-teal-700 text-white text-center w-10 p-2 rounded shadow-md uppercase"
							onClick={() => propertyGiftingHandler('4')}
						>
							4
						</button>
						<span className="ml-4">people gifting to this purchase.</span>
					</div>
				</div>
				<div>
					<span className="mr-4">I</span>
					<button
						className="btn-menu-purchase-buyer transition duration-500 ease-in-out bg-teal-600 hover:bg-teal-700 text-white text-center w-8 p-2 rounded shadow-md mr-4 w-auto uppercase mb-4"
						onClick={() => propertyBuyerHandler('Yes')}
					>
						Am
					</button>
					<button
						className="btn-menu-purchase-buyer transition duration-500 ease-in-out bg-teal-600 hover:bg-teal-700 text-white text-center w-8 p-2 rounded shadow-md mr-4 w-auto uppercase mb-4"
						onClick={() => propertyBuyerHandler('No')}
					>
						Am Not
					</button>
					<span className="ml-4">a first time buyer.</span>
				</div>
				<div>
					<span className="mr-4">The property </span>
					<button
						className="btn-menu-purchase-investment transition duration-500 ease-in-out bg-teal-600 hover:bg-teal-700 text-white text-center w-8 p-2 rounded shadow-md mr-4 w-auto uppercase mb-4"
						onClick={() => propertyInvestmentHandler('Yes')}
					>
						Is
					</button>
					<button
						className="btn-menu-purchase-investment transition duration-500 ease-in-out bg-teal-600 hover:bg-teal-700 text-white text-center w-8 p-2 rounded shadow-md mr-4 w-auto uppercase mb-4"
						onClick={() => propertyInvestmentHandler('No')}
					>
						Is Not
					</button>
					<span className="ml-4">a second investment property purchase.</span>
				</div>
			</div>
		</Fragment>
	);
};

export default Purchase;
