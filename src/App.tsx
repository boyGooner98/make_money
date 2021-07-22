import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import Navbar from './components/navbar';
import Home from './components/Home/home';
import makeMoneyArchive from './components/MakeMoney/makeMoneyArchive';
import saveMoneyArchive from './components/SaveMoney/saveMoneyArchive';
import investMoneyArchive from './components/InvestMoney/investMoneyArchive';
import debtMoneyArchive from './components/Debt/debtMoneyArchive';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
	return (
		<Provider store={store}>
			<Router>
				<Navbar />
				<Switch>
					<Route path='/' exact component={Home} />
					<Route path='/make_money' exact component={makeMoneyArchive} />
					<Route path='/save_money' exact component={saveMoneyArchive} />
					<Route path='/invest' exact component={investMoneyArchive} />
					<Route path='/debt' exact component={debtMoneyArchive} />
				</Switch>
			</Router>
		</Provider>
	);
};

export default App;

//pure css -- fully equipped with animations and transitions -- just everything so -let's have some fun
//anything else -uhhh -still thinking --- uh - maybe react-bootstrap - nah man bun that shit -- learn something new --tailwind css nahhh fthat somehting else --- uhhh let's go with the pure thing the pure thing which is t
