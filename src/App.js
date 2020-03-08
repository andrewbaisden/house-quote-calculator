import React, { Fragment, useEffect } from 'react';

function App() {
	useEffect(() => {
		// Your Purchase menu buttons
		btnMenu('.btn-menu-purchase-people');
		btnMenu('.btn-menu-purchase-type');
		btnMenu('.btn-menu-purchase-property');
		btnMenu('.btn-menu-purchase-mortgage');
		btnMenu('.btn-menu-purchase-gifted');
		btnMenu('.btn-menu-purchase-gifting');
		btnMenu('.btn-menu-purchase-buyer');
		btnMenu('.btn-menu-purchase-investment');

		// Your Sale menu buttons
		btnMenu('.btn-menu-sale-property');
		btnMenu('.btn-menu-sale-mortgage');
		btnMenu('.btn-menu-sale-country');

		// Your Remortgage
		btnMenu('.btn-menu-remortgage-property');
		btnMenu('.btn-menu-remortgage-mortgage');
		btnMenu('.btn-menu-remortgage-transfer-ownership');
		btnMenu('.btn-menu-remortgage-shared-ownership');
		btnMenu('.btn-menu-remortgage-country');
	}, []);
	const btnMenu = buttonClass => {
		const btnMenu = Array.from(document.querySelectorAll(buttonClass));
		console.log(btnMenu);

		btnMenu.forEach(btns => {
			btns.addEventListener('click', e => {
				console.log(e.target);
				handleClick(e.target);
			});
		});

		function handleClick(forHover) {
			btnMenu.forEach(btns => {
				btns.classList.remove('bg-teal-700');
			});
			forHover.classList.add('bg-teal-700');
		}
	};
	return (
		<Fragment>
			<div className="container mx-auto px-4 mt-4 grid gap-4 grid-cols-1">
				<div className="rounded bg-white p-8 shadow-xl">
					<h1 className="mb-4 text-4xl">Our Quote Generator</h1>
					<p>
						Calculate the price for our home move service in a few simple steps. Select the information, which is
						applicable to you.
					</p>
				</div>
				<div className="rounded bg-white p-8 shadow-xl">
					<h1 className="mb-4 text-4xl">General</h1>
					<div className="mb-4">
						<div>
							<button className="btn-menu-purchase-people transition duration-500 ease-in-out bg-teal-600 hover:bg-teal-700 text-white text-white text-center w-10 p-2 rounded shadow-md mr-4 uppercase">
								1
							</button>
							<button className="btn-menu-purchase-people transition duration-500 ease-in-out bg-teal-600 hover:bg-teal-700 text-white text-center w-10 p-2 rounded shadow-md mr-4 uppercase">
								2
							</button>
							<button className="btn-menu-purchase-people transition duration-500 ease-in-out bg-teal-600 hover:bg-teal-700 text-white text-center w-10 p-2 rounded shadow-md mr-4 uppercase">
								3
							</button>
							<button className="btn-menu-purchase-people transition duration-500 ease-in-out bg-teal-600 hover:bg-teal-700 text-white text-center w-10 p-2 rounded shadow-md uppercase">
								4
							</button>
							<span className="ml-4">people would like to</span>
						</div>
					</div>
					<div>
						<button className="btn-menu-purchase-type transition duration-500 ease-in-out bg-teal-600 hover:bg-teal-700 text-white text-center w-8 p-2 rounded shadow-md mr-4 w-auto uppercase mb-4">
							Purchase
						</button>
						<button className="btn-menu-purchase-type transition duration-500 ease-in-out bg-teal-600 hover:bg-teal-700 text-white text-center w-8 p-2 rounded shadow-md mr-4 w-auto uppercase mb-4">
							Sell
						</button>
						<button className="btn-menu-purchase-type transition duration-500 ease-in-out bg-teal-600 hover:bg-teal-700 text-white text-center w-8 p-2 rounded shadow-md mr-4 w-auto uppercase mb-4">
							Purchase and Sell
						</button>
						<button className="btn-menu-purchase-type transition duration-500 ease-in-out bg-teal-600 hover:bg-teal-700 text-white text-center w-8 p-2 rounded shadow-md mr-4 w-auto uppercase mb-4">
							Remortage
						</button>
					</div>
				</div>
				<div className="rounded bg-white p-8 shadow-xl">
					<h1 className="mb-4 text-4xl">Your Purchase</h1>
					<div className="mb-4">
						<p>The property is worth £</p>
						<input type="text" name="property" className="w-full border-b-2 mt-4" />
					</div>
					<div>
						<span className="mr-4">The property is a</span>
						<button className="btn-menu-purchase-property transition duration-500 ease-in-out bg-teal-600 hover:bg-teal-700 text-white text-center w-8 p-2 rounded shadow-md mr-4 w-auto uppercase mb-4">
							Freehold
						</button>
						<button className="btn-menu-purchase-property transition duration-500 ease-in-out bg-teal-600 hover:bg-teal-700 text-white text-center w-8 p-2 rounded shadow-md mr-4 w-auto uppercase mb-4">
							Leasehold
						</button>
						<span className="ml-4">.</span>
					</div>
					<div>
						<span className="mr-4">There</span>
						<button className="btn-menu-purchase-mortgage transition duration-500 ease-in-out bg-teal-600 hover:bg-teal-700 text-white text-center w-8 p-2 rounded shadow-md mr-4 w-auto uppercase mb-4">
							Will
						</button>
						<button className="btn-menu-purchase-mortgage transition duration-500 ease-in-out bg-teal-600 hover:bg-teal-700 text-white text-center w-8 p-2 rounded shadow-md mr-4 w-auto uppercase mb-4">
							Wll Not
						</button>
						<span className="ml-4">be a mortgage on this property.</span>
					</div>
					<div>
						<span className="mr-4">There</span>
						<button className="btn-menu-purchase-gifted transition duration-500 ease-in-out bg-teal-600 hover:bg-teal-700 text-white text-center w-8 p-2 rounded shadow-md mr-4 w-auto uppercase mb-4">
							Will
						</button>
						<button className="btn-menu-purchase-gifted transition duration-500 ease-in-out bg-teal-600 hover:bg-teal-700 text-white text-center w-8 p-2 rounded shadow-md mr-4 w-auto uppercase mb-4">
							Wll Not
						</button>
						<span className="ml-4">be money gifted to this purchase.</span>
					</div>
					<div className="mb-4">
						<div>
							<span className="mr-4">There will be</span>
							<button className="btn-menu-purchase-gifting transition duration-500 ease-in-out bg-teal-600 hover:bg-teal-700 text-white text-white text-center w-10 p-2 rounded shadow-md mr-4 uppercase">
								1
							</button>
							<button className="btn-menu-purchase-gifting transition duration-500 ease-in-out bg-teal-600 hover:bg-teal-700 text-white text-center w-10 p-2 rounded shadow-md mr-4 uppercase">
								2
							</button>
							<button className="btn-menu-purchase-gifting transition duration-500 ease-in-out bg-teal-600 hover:bg-teal-700 text-white text-center w-10 p-2 rounded shadow-md mr-4 uppercase">
								3
							</button>
							<button className="btn-menu-purchase-gifting transition duration-500 ease-in-out bg-teal-600 hover:bg-teal-700 text-white text-center w-10 p-2 rounded shadow-md uppercase">
								4
							</button>
							<span className="ml-4">people gifting to this purchase.</span>
						</div>
					</div>
					<div>
						<span className="mr-4">I</span>
						<button className="btn-menu-purchase-buyer transition duration-500 ease-in-out bg-teal-600 hover:bg-teal-700 text-white text-center w-8 p-2 rounded shadow-md mr-4 w-auto uppercase mb-4">
							Am
						</button>
						<button className="btn-menu-purchase-buyer transition duration-500 ease-in-out bg-teal-600 hover:bg-teal-700 text-white text-center w-8 p-2 rounded shadow-md mr-4 w-auto uppercase mb-4">
							Am Not
						</button>
						<span className="ml-4">a first time buyer.</span>
					</div>
					<div>
						<span className="mr-4">The property </span>
						<button className="btn-menu-purchase-investment transition duration-500 ease-in-out bg-teal-600 hover:bg-teal-700 text-white text-center w-8 p-2 rounded shadow-md mr-4 w-auto uppercase mb-4">
							Is
						</button>
						<button className="btn-menu-purchase-investment transition duration-500 ease-in-out bg-teal-600 hover:bg-teal-700 text-white text-center w-8 p-2 rounded shadow-md mr-4 w-auto uppercase mb-4">
							Is Not
						</button>
						<span className="ml-4">a second investment property purchase.</span>
					</div>
				</div>
				<div className="rounded bg-white p-8 shadow-xl">
					<h1 className="mb-4 text-4xl">Your Sale</h1>
					<div className="mb-4">
						<p>The property is worth £</p>
						<input type="text" name="property" className="w-full border-b-2 mt-4" />
					</div>
					<div>
						<span className="mr-4">The property is a</span>
						<button className="btn-menu-sale-property transition duration-500 ease-in-out bg-teal-600 hover:bg-teal-700 text-white text-center w-8 p-2 rounded shadow-md mr-4 w-auto uppercase mb-4">
							Freehold
						</button>
						<button className="btn-menu-sale-property transition duration-500 ease-in-out bg-teal-600 hover:bg-teal-700 text-white text-center w-8 p-2 rounded shadow-md mr-4 w-auto uppercase mb-4">
							Leasehold
						</button>
						<span className="ml-4">.</span>
					</div>
					<div>
						<span className="mr-4">There</span>
						<button className="btn-menu-sale-mortgage transition duration-500 ease-in-out bg-teal-600 hover:bg-teal-700 text-white text-center w-8 p-2 rounded shadow-md mr-4 w-auto uppercase mb-4">
							Will
						</button>
						<button className="btn-menu-sale-mortgage transition duration-500 ease-in-out bg-teal-600 hover:bg-teal-700 text-white text-center w-8 p-2 rounded shadow-md mr-4 w-auto uppercase mb-4">
							Wll Not
						</button>
						<span className="ml-4">be a mortgage on this property.</span>
					</div>
					<div>
						<span className="mr-4">The property is located in</span>
						<button className="btn-menu-sale-country transition duration-500 ease-in-out bg-teal-600 hover:bg-teal-700 text-white text-center w-8 p-2 rounded shadow-md mr-4 w-auto uppercase mb-4">
							England
						</button>
						<button className="btn-menu-sale-country transition duration-500 ease-in-out bg-teal-600 hover:bg-teal-700 text-white text-center w-8 p-2 rounded shadow-md mr-4 w-auto uppercase mb-4">
							Wales
						</button>
					</div>
				</div>
				<div className="rounded bg-white p-8 shadow-xl">
					<h1 className="mb-4 text-4xl">Your Remortage</h1>
					<div className="mb-4">
						<p>The property is worth £</p>
						<input type="text" name="property" className="w-full border-b-2 mt-4" />
					</div>
					<div>
						<span className="mr-4">The property is a</span>
						<button className="btn-menu-remortgage-property transition duration-500 ease-in-out bg-teal-600 hover:bg-teal-700 text-white text-center w-8 p-2 rounded shadow-md mr-4 w-auto uppercase mb-4">
							Freehold
						</button>
						<button className="btn-menu-remortgage-property transition duration-500 ease-in-out bg-teal-600 hover:bg-teal-700 text-white text-center w-8 p-2 rounded shadow-md mr-4 w-auto uppercase mb-4">
							Leasehold
						</button>
						<span className="ml-4">.</span>
					</div>
					<div>
						<span className="mr-4">There</span>
						<button className="btn-menu-remortgage-mortgage transition duration-500 ease-in-out bg-teal-600 hover:bg-teal-700 text-white text-center w-8 p-2 rounded shadow-md mr-4 w-auto uppercase mb-4">
							Is
						</button>
						<button className="btn-menu-remortgage-mortgage transition duration-500 ease-in-out bg-teal-600 hover:bg-teal-700 text-white text-center w-8 p-2 rounded shadow-md mr-4 w-auto uppercase mb-4">
							Is Not
						</button>
						<span className="ml-4">an existing mortgage on this property.</span>
					</div>
					<div>
						<span className="mr-4">There</span>
						<button className="btn-menu-remortgage-transfer-ownership transition duration-500 ease-in-out bg-teal-600 hover:bg-teal-700 text-white text-center w-8 p-2 rounded shadow-md mr-4 w-auto uppercase mb-4">
							Will
						</button>
						<button className="btn-menu-remortgage-transfer-ownership transition duration-500 ease-in-out bg-teal-600 hover:bg-teal-700 text-white text-center w-8 p-2 rounded shadow-md mr-4 w-auto uppercase mb-4">
							Will Not
						</button>
						<span className="ml-4">be a transfer of ownership.</span>
					</div>
					<div>
						<span className="mr-4">There</span>
						<button className="btn-menu-remortgage-shared-ownership transition duration-500 ease-in-out bg-teal-600 hover:bg-teal-700 text-white text-center w-8 p-2 rounded shadow-md mr-4 w-auto uppercase mb-4">
							Is
						</button>
						<button className="btn-menu-remortgage-shared-ownership transition duration-500 ease-in-out bg-teal-600 hover:bg-teal-700 text-white text-center w-8 p-2 rounded shadow-md mr-4 w-auto uppercase mb-4">
							Is Not
						</button>
						<span className="ml-4">a shared ownership on this property.</span>
					</div>
					<div>
						<span className="mr-4">The property is located in</span>
						<button className="btn-menu-remortgage-country transition duration-500 ease-in-out bg-teal-600 hover:bg-teal-700 text-white text-center w-8 p-2 rounded shadow-md mr-4 w-auto uppercase mb-4">
							England
						</button>
						<button className="btn-menu-remortgage-country transition duration-500 ease-in-out bg-teal-600 hover:bg-teal-700 text-white text-center w-8 p-2 rounded shadow-md mr-4 w-auto uppercase mb-4">
							Wales
						</button>
					</div>
				</div>
				<div>
					<button className="transition duration-500 ease-in-out bg-teal-600 hover:bg-teal-700 text-white text-center w-8 p-2 rounded shadow-md mr-4 w-auto uppercase">
						Calculate Now
					</button>
				</div>
				<div>
					<p className="text-white mb-8">
						*This quote is based on a typical transaction for a registered property and / or the information you have
						supplied. Non standard transactions or other instances may incur additional charges; although they will be
						fixed and are set in the Terms and Conditions for your Legal Service.
					</p>
				</div>
			</div>
		</Fragment>
	);
}

export default App;
