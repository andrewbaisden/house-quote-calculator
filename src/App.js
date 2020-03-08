import React, { Fragment, useEffect, useRef, useState } from 'react';
import Purchase from './components/Purchase';
import Sale from './components/Sale';
import PurchaseAndSell from './components/PurchaseAndSell';
import Remortgage from './components/Remortgage';
import YourQuote from './components/YourQuote';

function App() {
	const [people, setPeople] = useState("");
	const [propertyWorth, setPropertyWorth] = useState('');
	const [propertyType, setPropertyType] = useState("");
	const [mortgage, setMortgage] = useState("");
	const [gifted, setGifted] = useState("");
	const [gifting, setGifting] = useState("");
	const [buyer, setBuyer] = useState("");
	const [investment, setInvestment] = useState("");

	const purchaseData = {
		type: 'Purchase',
		people: people,
		propertyWorth: propertyWorth,
		propertyType: propertyType,
		mortgage: mortgage,
		gifted: gifted,
		gifting: gifting,
		buyer: buyer,
		investment: investment
	};

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

		console.log('Purchase Data', purchaseData);
	}, [people, propertyWorth, propertyType, mortgage, gifting, gifting, buyer, investment, purchaseData]);
	const numberOfPeopleHandler = value => {
		setPeople(value);
	};

	const propertyTypeHandler = value => {
		setPropertyType(value);
	};

	const propertyMortgageHandler = value => {
		setMortgage(value);
	};

	const propertyGiftedHandler = value => {
		setGifted(value);
	};

	const propertyGiftingHandler = value => {
		setGifting(value);
	};

	const propertyBuyerHandler = value => {
		setBuyer(value);
	};

	const propertyInvestmentHandler = value => {
		setInvestment(value);
	};


	const purchaseComponent = useRef();
	const sellComponent = useRef();
	const purchaseAndSellComponent = useRef();
	const remortgageComponent = useRef();
	const yourQuoteComponent = useRef();
	const generalComponent = useRef();
	const calcQuoteComponent = useRef();
	const newQuoteComponent = useRef();

	const btnMenu = buttonClass => {
		const btnMenu = Array.from(document.querySelectorAll(buttonClass));
		// console.log(btnMenu);

		btnMenu.forEach(btns => {
			btns.addEventListener('click', e => {
				// console.log(e.target);
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
	
	
	const purchase = () => {
		purchaseComponent.current.classList.remove('hide');
		purchaseComponent.current.classList.add('show');
		sellComponent.current.classList.add('hide');
		purchaseAndSellComponent.current.classList.add('hide');
		remortgageComponent.current.classList.add('hide');
	};
	const sell = () => {
		sellComponent.current.classList.remove('hide');
		sellComponent.current.classList.add('show');
		purchaseComponent.current.classList.add('hide');
		purchaseAndSellComponent.current.classList.add('hide');
		remortgageComponent.current.classList.add('hide');
	};
	const purchaseAndSell = () => {
		purchaseAndSellComponent.current.classList.remove('hide');
		purchaseAndSellComponent.current.classList.add('show');
		purchaseComponent.current.classList.add('hide');
		sellComponent.current.classList.add('hide');
		remortgageComponent.current.classList.add('hide');
	};
	const remortgage = () => {
		remortgageComponent.current.classList.remove('hide');
		remortgageComponent.current.classList.add('show');
		purchaseComponent.current.classList.add('hide');
		sellComponent.current.classList.add('hide');
		purchaseAndSellComponent.current.classList.add('hide');
	};
	const calcQuote = () => {
		generalComponent.current.classList.add('hide');
		purchaseComponent.current.classList.add('hide');
		sellComponent.current.classList.add('hide');
		purchaseAndSellComponent.current.classList.add('hide');
		remortgageComponent.current.classList.add('hide');
		yourQuoteComponent.current.classList.remove('hide');
		yourQuoteComponent.current.classList.add('show');
		calcQuoteComponent.current.classList.add('hide');
		newQuoteComponent.current.classList.remove('hide');
		newQuoteComponent.current.classList.add('show');
	};
	const newQuote = () => {
		generalComponent.current.classList.remove('hide');
		generalComponent.current.classList.add('show');
		yourQuoteComponent.current.classList.remove('show');
		yourQuoteComponent.current.classList.add('hide');
		calcQuoteComponent.current.classList.remove('hide');
		calcQuoteComponent.current.classList.add('show');
		newQuoteComponent.current.classList.remove('show');
		newQuoteComponent.current.classList.add('hide');

		resetState();
	};

	const resetState = () => {
		setPeople("")
		setPropertyWorth("")
		setPropertyType("")
		setMortgage("")
		setGifted("")
		setGifting("")
		setBuyer("")
		setInvestment("")
	}

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
				<div className="rounded bg-white p-8 shadow-xl" ref={generalComponent}>
					<h1 className="mb-4 text-4xl">General</h1>
					<div className="mb-4">
						<div>
							<button
								className="btn-menu-purchase-people transition duration-500 ease-in-out bg-teal-600 hover:bg-teal-700 text-white text-white text-center w-10 p-2 rounded shadow-md mr-4 uppercase"
								onClick={() => numberOfPeopleHandler("1")}
							>
								1
							</button>
							<button
								className="btn-menu-purchase-people transition duration-500 ease-in-out bg-teal-600 hover:bg-teal-700 text-white text-center w-10 p-2 rounded shadow-md mr-4 uppercase"
								onClick={() => numberOfPeopleHandler("2")}
							>
								2
							</button>
							<button
								className="btn-menu-purchase-people transition duration-500 ease-in-out bg-teal-600 hover:bg-teal-700 text-white text-center w-10 p-2 rounded shadow-md mr-4 uppercase"
								onClick={() => numberOfPeopleHandler("3")}
							>
								3
							</button>
							<button
								className="btn-menu-purchase-people transition duration-500 ease-in-out bg-teal-600 hover:bg-teal-700 text-white text-center w-10 p-2 rounded shadow-md uppercase"
								onClick={() => numberOfPeopleHandler("4")}
							>
								4
							</button>
							<span className="ml-4">people would like to</span>
						</div>
					</div>
					<div>
						<button
							className="btn-menu-purchase-type transition duration-500 ease-in-out bg-teal-600 hover:bg-teal-700 text-white text-center w-8 p-2 rounded shadow-md mr-4 w-auto uppercase mb-4"
							onClick={purchase}
						>
							Purchase
						</button>
						<button
							className="btn-menu-purchase-type transition duration-500 ease-in-out bg-teal-600 hover:bg-teal-700 text-white text-center w-8 p-2 rounded shadow-md mr-4 w-auto uppercase mb-4"
							onClick={sell}
						>
							Sell
						</button>
						<button
							className="btn-menu-purchase-type transition duration-500 ease-in-out bg-teal-600 hover:bg-teal-700 text-white text-center w-8 p-2 rounded shadow-md mr-4 w-auto uppercase mb-4"
							onClick={purchaseAndSell}
						>
							Purchase and Sell
						</button>
						<button
							className="btn-menu-purchase-type transition duration-500 ease-in-out bg-teal-600 hover:bg-teal-700 text-white text-center w-8 p-2 rounded shadow-md mr-4 w-auto uppercase mb-4"
							onClick={remortgage}
						>
							Remortgage
						</button>
					</div>
				</div>
				<div ref={purchaseComponent} className="hide">
					<Purchase
						propertyWorth={propertyWorth}
						setPropertyWorth={setPropertyWorth}
						propertyTypeHandler={propertyTypeHandler}
						propertyMortgageHandler={propertyMortgageHandler}
						propertyGiftedHandler={propertyGiftedHandler}
						propertyGiftingHandler={propertyGiftingHandler}
						propertyBuyerHandler={propertyBuyerHandler}
						propertyInvestmentHandler={propertyInvestmentHandler}
					/>
				</div>
				<div ref={sellComponent} className="hide">
					<Sale />
				</div>
				<div ref={purchaseAndSellComponent} className="hide">
					<PurchaseAndSell />
				</div>
				<div ref={remortgageComponent} className="hide">
					<Remortgage />
				</div>
				<div ref={yourQuoteComponent} className="hide">
					<YourQuote 
					type={purchaseData.type} 
					people={purchaseData.people} 
					propertyWorth={purchaseData.propertyWorth} 
					propertyType={purchaseData.propertyType} 
					mortgage={purchaseData.mortgage} 
					gifted={purchaseData.gifted} 
					gifting={purchaseData.gifting} 
					buyer={purchaseData.buyer} 
					investment={purchaseData.investment} 
					/>
				</div>

				<div>
					<div ref={calcQuoteComponent}>
						<button
							className="transition duration-500 ease-in-out bg-teal-600 hover:bg-teal-700 text-white text-center w-8 p-2 rounded shadow-md mr-4 w-auto uppercase"
							onClick={calcQuote}
						>
							Calculate Now
						</button>
					</div>

					<div>
						<div ref={newQuoteComponent} className="hide">
							<button
								className="transition duration-500 ease-in-out bg-teal-600 hover:bg-teal-700 text-white text-center w-8 p-2 rounded shadow-md mr-4 w-auto uppercase"
								onClick={newQuote}
							>
								New Quote
							</button>
						</div>
					</div>
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
