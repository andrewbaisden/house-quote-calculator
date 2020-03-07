import React, { Fragment, useEffect } from 'react';

function App() {
	useEffect(() => {
		btnMenu('.btn-menu-people');
		btnMenu('.btn-menu-house-type');
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
							<button className="btn-menu-people transition duration-500 ease-in-out bg-teal-600 hover:bg-teal-700 text-white text-white text-center w-10 p-2 rounded shadow-md mr-4 uppercase">
								1
							</button>
							<button className="btn-menu-people transition duration-500 ease-in-out bg-teal-600 hover:bg-teal-700 text-white text-center w-10 p-2 rounded shadow-md mr-4 uppercase">
								2
							</button>
							<button className="btn-menu-people transition duration-500 ease-in-out bg-teal-600 hover:bg-teal-700 text-white text-center w-10 p-2 rounded shadow-md mr-4 uppercase">
								3
							</button>
							<button className="btn-menu-people transition duration-500 ease-in-out bg-teal-600 hover:bg-teal-700 text-white text-center w-10 p-2 rounded shadow-md uppercase">
								4
							</button>
							<span className="ml-4">people would like to</span>
						</div>
					</div>
					<div>
						<button className="btn-menu-house-type transition duration-500 ease-in-out bg-teal-600 hover:bg-teal-700 text-white text-center w-8 p-2 rounded shadow-md mr-4 w-auto uppercase mb-4">
							Purchase
						</button>
						<button className="btn-menu-house-type transition duration-500 ease-in-out bg-teal-600 hover:bg-teal-700 text-white text-center w-8 p-2 rounded shadow-md mr-4 w-auto uppercase mb-4">
							Sell
						</button>
						<button className="btn-menu-house-type transition duration-500 ease-in-out bg-teal-600 hover:bg-teal-700 text-white text-center w-8 p-2 rounded shadow-md mr-4 w-auto uppercase mb-4">
							Purchase and Sell
						</button>
						<button className="btn-menu-house-type transition duration-500 ease-in-out bg-teal-600 hover:bg-teal-700 text-white text-center w-8 p-2 rounded shadow-md mr-4 w-auto uppercase mb-4">
							Remortage
						</button>
					</div>
				</div>
				<div>
					<button className="transition duration-500 ease-in-out bg-teal-600 hover:bg-teal-700 text-white text-center w-8 p-2 rounded shadow-md mr-4 w-auto uppercase">
						Calculate Now
					</button>
				</div>
				<div>
					<p className="text-white">
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
