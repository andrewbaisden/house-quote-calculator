import React, { Fragment } from 'react';

const PurchaseAndSell = ({
	propertyWorthPurchaseAndSell,
	setPropertyWorthPurchaseAndSell,
	setPropertyTypePurchaseAndSell,
	setMortgagePurchaseAndSell,
	setLocationPurchaseAndSell,
	propertyWorthPurchaseAndSellPurchase,
	setPropertyWorthPurchaseAndSellPurchase,
	setPropertyTypePurchaseAndSellPurchase,
	setMortgagePurchaseAndSellPurchase,
	setGiftedPurchaseAndSellPurchase,
	setGiftingPurchaseAndSellPurchase,
	setBuyerPurchaseAndSellPurchase,
	setInvestmentPurchaseAndSellPurchase
}) => {
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
						onChange={e => setPropertyWorthPurchaseAndSell(e.target.value)}
						value={propertyWorthPurchaseAndSell}
					/>
				</div>
				<div>
					<span className="mr-4">The property is a</span>
					<button
						className="btn-menu-sale-property transition duration-500 ease-in-out bg-teal-600 hover:bg-teal-700 text-white text-center w-8 p-2 rounded shadow-md mr-4 w-auto uppercase mb-4"
						onClick={() => setPropertyTypePurchaseAndSell('Freehold')}
					>
						Freehold
					</button>
					<button
						className="btn-menu-sale-property transition duration-500 ease-in-out bg-teal-600 hover:bg-teal-700 text-white text-center w-8 p-2 rounded shadow-md mr-4 w-auto uppercase mb-4"
						onClick={() => setPropertyTypePurchaseAndSell('Leashold')}
					>
						Leasehold
					</button>
					<span className="ml-4">.</span>
				</div>
				<div>
					<span className="mr-4">There</span>
					<button
						className="btn-menu-sale-mortgage transition duration-500 ease-in-out bg-teal-600 hover:bg-teal-700 text-white text-center w-8 p-2 rounded shadow-md mr-4 w-auto uppercase mb-4"
						onClick={() => setMortgagePurchaseAndSell('Yes')}
					>
						Will
					</button>
					<button
						className="btn-menu-sale-mortgage transition duration-500 ease-in-out bg-teal-600 hover:bg-teal-700 text-white text-center w-8 p-2 rounded shadow-md mr-4 w-auto uppercase mb-4"
						onClick={() => setMortgagePurchaseAndSell('No')}
					>
						Wll Not
					</button>
					<span className="ml-4">be a mortgage on this property.</span>
				</div>
				<div>
					<span className="mr-4">The property is located in</span>
					<button
						className="btn-menu-sale-country transition duration-500 ease-in-out bg-teal-600 hover:bg-teal-700 text-white text-center w-8 p-2 rounded shadow-md mr-4 w-auto uppercase mb-4"
						onClick={() => setLocationPurchaseAndSell('England')}
					>
						England
					</button>
					<button
						className="btn-menu-sale-country transition duration-500 ease-in-out bg-teal-600 hover:bg-teal-700 text-white text-center w-8 p-2 rounded shadow-md mr-4 w-auto uppercase mb-4"
						onClick={() => setLocationPurchaseAndSell('Wales')}
					>
						Wales
					</button>
				</div>
			</div>
			<div className="rounded bg-white p-8 shadow-xl">
				<h1 className="mb-4 text-4xl">Your Purchase</h1>
				<div className="mb-4">
					<p>The property is worth £</p>
					<input
						type="text"
						name="property"
						className="w-full border-b-2 mt-4"
						onChange={e => setPropertyWorthPurchaseAndSellPurchase(e.target.value)}
						value={propertyWorthPurchaseAndSellPurchase}
					/>
				</div>
				<div>
					<span className="mr-4">The property is a</span>
					<button
						className="btn-menu-purchase-property transition duration-500 ease-in-out bg-teal-600 hover:bg-teal-700 text-white text-center w-8 p-2 rounded shadow-md mr-4 w-auto uppercase mb-4"
						onClick={() => setPropertyTypePurchaseAndSellPurchase('Freehold')}
					>
						Freehold
					</button>
					<button
						className="btn-menu-purchase-property transition duration-500 ease-in-out bg-teal-600 hover:bg-teal-700 text-white text-center w-8 p-2 rounded shadow-md mr-4 w-auto uppercase mb-4"
						onClick={() => setPropertyTypePurchaseAndSellPurchase('Leasehold')}
					>
						Leasehold
					</button>
					<span className="ml-4">.</span>
				</div>
				<div>
					<span className="mr-4">There</span>
					<button
						className="btn-menu-purchase-mortgage transition duration-500 ease-in-out bg-teal-600 hover:bg-teal-700 text-white text-center w-8 p-2 rounded shadow-md mr-4 w-auto uppercase mb-4"
						onClick={() => setMortgagePurchaseAndSellPurchase('Yes')}
					>
						Will
					</button>
					<button
						className="btn-menu-purchase-mortgage transition duration-500 ease-in-out bg-teal-600 hover:bg-teal-700 text-white text-center w-8 p-2 rounded shadow-md mr-4 w-auto uppercase mb-4"
						onClick={() => setMortgagePurchaseAndSellPurchase('No')}
					>
						Wll Not
					</button>
					<span className="ml-4">be a mortgage on this property.</span>
				</div>
				<div>
					<span className="mr-4">There</span>
					<button
						className="btn-menu-purchase-gifted transition duration-500 ease-in-out bg-teal-600 hover:bg-teal-700 text-white text-center w-8 p-2 rounded shadow-md mr-4 w-auto uppercase mb-4"
						onClick={() => setGiftedPurchaseAndSellPurchase('Yes')}
					>
						Will
					</button>
					<button
						className="btn-menu-purchase-gifted transition duration-500 ease-in-out bg-teal-600 hover:bg-teal-700 text-white text-center w-8 p-2 rounded shadow-md mr-4 w-auto uppercase mb-4"
						onClick={() => setGiftedPurchaseAndSellPurchase('No')}
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
							onClick={() => setGiftingPurchaseAndSellPurchase('1')}
						>
							1
						</button>
						<button
							className="btn-menu-purchase-gifting transition duration-500 ease-in-out bg-teal-600 hover:bg-teal-700 text-white text-center w-10 p-2 rounded shadow-md mr-4 uppercase"
							onClick={() => setGiftingPurchaseAndSellPurchase('2')}
						>
							2
						</button>
						<button
							className="btn-menu-purchase-gifting transition duration-500 ease-in-out bg-teal-600 hover:bg-teal-700 text-white text-center w-10 p-2 rounded shadow-md mr-4 uppercase"
							onClick={() => setGiftingPurchaseAndSellPurchase('3')}
						>
							3
						</button>
						<button
							className="btn-menu-purchase-gifting transition duration-500 ease-in-out bg-teal-600 hover:bg-teal-700 text-white text-center w-10 p-2 rounded shadow-md uppercase"
							onClick={() => setGiftingPurchaseAndSellPurchase('4')}
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
						onClick={() => setBuyerPurchaseAndSellPurchase('Yes')}
					>
						Am
					</button>
					<button
						className="btn-menu-purchase-buyer transition duration-500 ease-in-out bg-teal-600 hover:bg-teal-700 text-white text-center w-8 p-2 rounded shadow-md mr-4 w-auto uppercase mb-4"
						onClick={() => setBuyerPurchaseAndSellPurchase('No')}
					>
						Am Not
					</button>
					<span className="ml-4">a first time buyer.</span>
				</div>
				<div>
					<span className="mr-4">The property </span>
					<button
						className="btn-menu-purchase-investment transition duration-500 ease-in-out bg-teal-600 hover:bg-teal-700 text-white text-center w-8 p-2 rounded shadow-md mr-4 w-auto uppercase mb-4"
						onClick={() => setInvestmentPurchaseAndSellPurchase('Yes')}
					>
						Is
					</button>
					<button
						className="btn-menu-purchase-investment transition duration-500 ease-in-out bg-teal-600 hover:bg-teal-700 text-white text-center w-8 p-2 rounded shadow-md mr-4 w-auto uppercase mb-4"
						onClick={() => setInvestmentPurchaseAndSellPurchase('No')}
					>
						Is Not
					</button>
					<span className="ml-4">a second investment property purchase.</span>
				</div>
			</div>
		</Fragment>
	);
};

export default PurchaseAndSell;
