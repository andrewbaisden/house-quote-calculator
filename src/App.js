import React, { Fragment, useEffect, useRef, useState } from 'react';
import Purchase from './components/Purchase';
import Sale from './components/Sale';
import PurchaseAndSell from './components/PurchaseAndSell';
import Remortgage from './components/Remortgage';
import YourQuote from './components/YourQuote';
import YourQuoteSell from './components/YourQuoteSell';
import YourQuotePurchaseAndSell from './components/YourQuotePurchaseAndSell';
import YourQuoteRemortgage from './components/YourQuoteRemortgage';

function App() {
	// All property type state
	const [people, setPeople] = useState('');

	// Purchase Data State
	const [propertyWorth, setPropertyWorth] = useState('');
	const [propertyType, setPropertyType] = useState('');
	const [mortgage, setMortgage] = useState('');
	const [gifted, setGifted] = useState('');
	const [gifting, setGifting] = useState('');
	const [buyer, setBuyer] = useState('');
	const [investment, setInvestment] = useState('');

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

	// Sell Data State
	const [propertyWorthSell, setPropertyWorthSell] = useState('');
	const [propertyTypeSell, setPropertyTypeSell] = useState('');
	const [mortgageSell, setMortgageSell] = useState('');
	const [locationSell, setLocationSell] = useState('');

	const sellData = {
		type: 'Sell',
		people: people,
		propertyWorth: propertyWorthSell,
		propertyType: propertyTypeSell,
		mortgage: mortgageSell,
		location: locationSell
	};

	// Purchase And Sell Data State
	const [propertyWorthPurchaseAndSell, setPropertyWorthPurchaseAndSell] = useState('');
	const [propertyTypePurchaseAndSell, setPropertyTypePurchaseAndSell] = useState('');
	const [mortgagePurchaseAndSell, setMortgagePurchaseAndSell] = useState('');
	const [locationPurchaseAndSell, setLocationPurchaseAndSell] = useState('');

	const [propertyWorthPurchaseAndSellPurchase, setPropertyWorthPurchaseAndSellPurchase] = useState('');
	const [propertyTypePurchaseAndSellPurchase, setPropertyTypePurchaseAndSellPurchase] = useState('');
	const [mortgagePurchaseAndSellPurchase, setMortgagePurchaseAndSellPurchase] = useState('');
	const [giftedPurchaseAndSellPurchase, setGiftedPurchaseAndSellPurchase] = useState('');
	const [giftingPurchaseAndSellPurchase, setGiftingPurchaseAndSellPurchase] = useState('');
	const [buyerPurchaseAndSellPurchase, setBuyerPurchaseAndSellPurchase] = useState('');
	const [investmentPurchaseAndSellPurchase, setInvestmentPurchaseAndSellPurchase] = useState('');

	const purchaseAndSellData = {
		type: 'Sell',
		people: people,
		propertyWorth: propertyWorthPurchaseAndSell,
		propertyType: propertyTypePurchaseAndSell,
		mortgage: mortgagePurchaseAndSell,
		location: locationPurchaseAndSell,
		propertyWorthPurchase: propertyWorthPurchaseAndSellPurchase,
		propertyTypePurchase: propertyTypePurchaseAndSellPurchase,
		mortgagePurchase: mortgagePurchaseAndSellPurchase,
		gifted: giftedPurchaseAndSellPurchase,
		gifting: giftingPurchaseAndSellPurchase,
		buyer: buyerPurchaseAndSellPurchase,
		investment: investmentPurchaseAndSellPurchase
	};

	// Remortgage Data State
	const [propertyWorthRemortgage, setPropertyWorthRemortgage] = useState('');
	const [propertyTypeRemortgage, setPropertyTypeRemortgage] = useState('');
	const [mortgageRemortgage, setMortgageRemortgage] = useState('');
	const [ownershipRemortgage, setOwnershipRemortgage] = useState('');
	const [sharedOwnershipRemortgage, setSharedOwnershipRemortgage] = useState('');
	const [locationRemortgage, setLocationRemortgage] = useState('');

	const remortgageData = {
		type: 'Remortgage',
		people: people,
		propertyWorth: propertyWorthRemortgage,
		propertyType: propertyTypeRemortgage,
		mortgage: mortgageRemortgage,
		ownership: ownershipRemortgage,
		sharedOwnership: sharedOwnershipRemortgage,
		location: locationRemortgage
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
		console.log('Sell Data', sellData);
		console.log('Purchase And Sell Data', purchaseAndSellData);
		console.log('Remortgage Data', remortgageData);
	}, [
		people,
		propertyWorth,
		propertyType,
		mortgage,
		gifting,
		buyer,
		investment,
		purchaseData,
		sellData,
		purchaseAndSellData,
		remortgageData
	]);
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
	const yourQuoteComponentSell = useRef();
	const yourQuoteComponentPurchaseAndSell = useRef();
	const yourQuoteComponentRemortgage = useRef();
	const generalComponent = useRef();
	const calcQuoteComponent = useRef();
	const calcQuoteComponentSell = useRef();
	const calcQuoteComponentPurchaseAndSell = useRef();
	const calcQuoteComponentRemortgage = useRef();
	const newQuoteComponent = useRef();
	const formError = useRef();

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
		calcQuoteComponentSell.current.classList.add('show');
		calcQuoteComponentSell.current.classList.remove('hide');
		calcQuoteComponent.current.classList.add('hide');
		calcQuoteComponent.current.classList.remove('show');
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
		calcQuoteComponent.current.classList.add('hide');
		calcQuoteComponent.current.classList.remove('show');
		calcQuoteComponentSell.current.classList.add('hide');
		calcQuoteComponentSell.current.classList.remove('show');
		calcQuoteComponentRemortgage.current.classList.remove('hide');
		calcQuoteComponentRemortgage.current.classList.add('show');
	};
	const calcQuote = () => {
		if (
			people === '' ||
			propertyWorth === '' ||
			propertyType === '' ||
			mortgage === '' ||
			gifted === '' ||
			gifting === '' ||
			buyer === '' ||
			investment === ''
		) {
			console.log('Please complete the form so that you can get your quote.');
			submitWarning();
		} else {
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
		}
	};
	const calcQuoteSell = () => {
		if (
			people === '' ||
			propertyWorthSell === '' ||
			propertyTypeSell === '' ||
			mortgageSell === '' ||
			locationSell === ''
		) {
			console.log('Please complete the form so that you can get your quote.');
			submitWarning();
		} else {
			generalComponent.current.classList.add('hide');
			purchaseComponent.current.classList.add('hide');
			sellComponent.current.classList.add('hide');
			purchaseAndSellComponent.current.classList.add('hide');
			remortgageComponent.current.classList.add('hide');
			yourQuoteComponent.current.classList.add('hide');
			yourQuoteComponent.current.classList.remove('show');
			calcQuoteComponent.current.classList.add('hide');
			calcQuoteComponentSell.current.classList.add('hide');
			yourQuoteComponentSell.current.classList.remove('hide');
			yourQuoteComponentSell.current.classList.add('show');
			newQuoteComponent.current.classList.remove('hide');
			newQuoteComponent.current.classList.add('show');
		}
	};
	const calcQuotePurchaseAndSell = () => {
		// if (
		// 	people === '' ||
		// 	propertyWorthSell === '' ||
		// 	propertyTypeSell === '' ||
		// 	mortgageSell === '' ||
		// 	locationSell === ''
		// ) {
		// 	console.log('Please complete the form so that you can get your quote.');
		// 	submitWarning();
		// } else {
		// 	generalComponent.current.classList.add('hide');
		// 	purchaseComponent.current.classList.add('hide');
		// 	sellComponent.current.classList.add('hide');
		// 	purchaseAndSellComponent.current.classList.add('hide');
		// 	remortgageComponent.current.classList.add('hide');
		// 	yourQuoteComponent.current.classList.add('hide');
		// 	yourQuoteComponent.current.classList.remove('show');
		// 	calcQuoteComponent.current.classList.add('hide');
		// 	calcQuoteComponentSell.current.classList.add('hide');
		// 	yourQuoteComponentSell.current.classList.remove('hide');
		// 	yourQuoteComponentSell.current.classList.add('show');
		// 	newQuoteComponent.current.classList.remove('hide');
		// 	newQuoteComponent.current.classList.add('show');
		// }
	};
	const calcQuoteRemortgage = () => {
		if (
			people === '' ||
			propertyWorthRemortgage === '' ||
			propertyTypeRemortgage === '' ||
			mortgageRemortgage === '' ||
			ownershipRemortgage === '' ||
			sharedOwnershipRemortgage === '' ||
			locationRemortgage === ''
		) {
			console.log('Please complete the form so that you can get your quote.');
			submitWarning();
		} else {
			generalComponent.current.classList.add('hide');
			purchaseComponent.current.classList.add('hide');
			sellComponent.current.classList.add('hide');
			purchaseAndSellComponent.current.classList.add('hide');
			remortgageComponent.current.classList.add('hide');
			newQuoteComponent.current.classList.remove('hide');
			newQuoteComponent.current.classList.add('show');
			calcQuoteComponentRemortgage.current.classList.remove('show');
			calcQuoteComponentRemortgage.current.classList.add('hide');
			yourQuoteComponentRemortgage.current.classList.add('show');
			yourQuoteComponentRemortgage.current.classList.remove('hide');
		}
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
		window.location.reload();
	};

	const resetState = () => {
		setPeople('');
		setPropertyWorth('');
		setPropertyType('');
		setMortgage('');
		setGifted('');
		setGifting('');
		setBuyer('');
		setInvestment('');
	};
	const submitWarning = () => {
		formError.current.classList.remove('hide');
		formError.current.classList.add('show');

		setTimeout(() => {
			formError.current.classList.add('hide');
			formError.current.classList.remove('show');
		}, 3000);
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
				<div className="rounded bg-white p-8 shadow-xl" ref={generalComponent}>
					<h1 className="mb-4 text-4xl">General</h1>
					<div className="mb-4">
						<div>
							<button
								className="btn-menu-purchase-people transition duration-500 ease-in-out bg-teal-600 hover:bg-teal-700 text-white text-white text-center w-10 p-2 rounded shadow-md mr-4 uppercase"
								onClick={() => numberOfPeopleHandler('1')}
							>
								1
							</button>
							<button
								className="btn-menu-purchase-people transition duration-500 ease-in-out bg-teal-600 hover:bg-teal-700 text-white text-center w-10 p-2 rounded shadow-md mr-4 uppercase"
								onClick={() => numberOfPeopleHandler('2')}
							>
								2
							</button>
							<button
								className="btn-menu-purchase-people transition duration-500 ease-in-out bg-teal-600 hover:bg-teal-700 text-white text-center w-10 p-2 rounded shadow-md mr-4 uppercase"
								onClick={() => numberOfPeopleHandler('3')}
							>
								3
							</button>
							<button
								className="btn-menu-purchase-people transition duration-500 ease-in-out bg-teal-600 hover:bg-teal-700 text-white text-center w-10 p-2 rounded shadow-md uppercase"
								onClick={() => numberOfPeopleHandler('4')}
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
					<Sale
						propertyWorthSell={propertyWorthSell}
						setPropertyWorthSell={setPropertyWorthSell}
						setPropertyTypeSell={setPropertyTypeSell}
						setMortgageSell={setMortgageSell}
						setLocationSell={setLocationSell}
					/>
				</div>
				<div ref={purchaseAndSellComponent} className="hide">
					<PurchaseAndSell />
				</div>
				<div ref={remortgageComponent} className="hide">
					<Remortgage
						propertyWorthRemortgage={propertyWorthRemortgage}
						setPropertyWorthRemortgage={setPropertyWorthRemortgage}
						setPropertyTypeRemortgage={setPropertyTypeRemortgage}
						setMortgageRemortgage={setMortgageRemortgage}
						setOwnershipRemortgage={setOwnershipRemortgage}
						setSharedOwnershipRemortgage={setSharedOwnershipRemortgage}
						setLocationRemortgage={setLocationRemortgage}
					/>
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
				<div ref={yourQuoteComponentSell} className="hide">
					<YourQuoteSell
						type={sellData.type}
						people={sellData.people}
						propertyWorth={sellData.propertyWorth}
						propertyType={sellData.propertyType}
						mortgage={sellData.mortgage}
						location={sellData.location}
					/>
				</div>
				<div ref={yourQuoteComponentPurchaseAndSell} className="hide">
					<YourQuotePurchaseAndSell
						type={purchaseAndSellData.type}
						people={purchaseAndSellData.people}
						propertyWorth={purchaseAndSellData.propertyWorth}
						propertyType={purchaseAndSellData.propertyType}
						mortgage={purchaseAndSellData.mortgage}
						location={purchaseAndSellData.location}
						propertyWorthPurchase={purchaseAndSellData.propertyWorthPurchase}
						propertyTypePurchase={purchaseAndSellData.propertyTypePurchase}
						mortgagePurchase={purchaseAndSellData.mortgagePurchase}
						gifted={purchaseAndSellData.gifted}
						gifting={purchaseAndSellData.gifting}
						buyer={purchaseAndSellData.buyer}
						investment={purchaseAndSellData.investment}
					/>
				</div>
				<div ref={yourQuoteComponentRemortgage} className="hide">
					<YourQuoteRemortgage
						type={remortgageData.type}
						people={remortgageData.people}
						propertyWorth={remortgageData.propertyWorth}
						propertyType={remortgageData.propertyType}
						mortgage={remortgageData.mortgage}
						sharedOwnership={remortgageData.sharedOwnership}
						ownership={remortgageData.ownership}
						location={remortgageData.location}
					/>
				</div>

				<div>
					<div className="bg-red-600 text-white p-4 text-center mb-4 hide" ref={formError}>
						<p>Please complete the form so that you can get your quote.</p>
					</div>
					<div ref={calcQuoteComponent}>
						<button
							className="transition duration-500 ease-in-out bg-teal-600 hover:bg-teal-700 text-white text-center w-8 p-2 rounded shadow-md mr-4 w-auto uppercase"
							onClick={calcQuote}
						>
							Calculate Now
						</button>
					</div>
					<div ref={calcQuoteComponentSell} className="hide">
						<button
							className="transition duration-500 ease-in-out bg-teal-600 hover:bg-teal-700 text-white text-center w-8 p-2 rounded shadow-md mr-4 w-auto uppercase"
							onClick={calcQuoteSell}
						>
							Calculate Now
						</button>
					</div>
					<div ref={calcQuoteComponentPurchaseAndSell} className="hide">
						<button
							className="transition duration-500 ease-in-out bg-teal-600 hover:bg-teal-700 text-white text-center w-8 p-2 rounded shadow-md mr-4 w-auto uppercase"
							onClick={calcQuotePurchaseAndSell}
						>
							Calculate Now purchase and sell
						</button>
					</div>
					<div ref={calcQuoteComponentRemortgage} className="hide">
						<button
							className="transition duration-500 ease-in-out bg-teal-600 hover:bg-teal-700 text-white text-center w-8 p-2 rounded shadow-md mr-4 w-auto uppercase"
							onClick={calcQuoteRemortgage}
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
