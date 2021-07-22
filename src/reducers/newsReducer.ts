import {news,Actions} from '../actions';
import {ActionType} from '../actions/actionType/actionsType';

interface News {
	latestMakeMoney: news[];
	latestSaveMoney: news[];
	latestInvestMoney: news[];
	latestDebt: news[];
	loading: boolean;
	error: string | null;
}

const initialState = {
	latestMakeMoney: [],
	latestSaveMoney: [],
	latestInvestMoney: [],
	latestDebt: [],
	loading: true,
	error: null,
};



const reducer = (state: News = initialState, actions: Actions): News => {

	switch (actions.type) {
		case ActionType.SEARCH_NEWS:
			return {
				...state,
				loading: true,
				error: null,
			};
		case ActionType.GET_LATEST_NEWS:
			return {
				...state,
				latestMakeMoney: actions.payload.make_money,
				latestInvestMoney: actions.payload.invest_money,
				latestDebt: actions.payload.debt,
				latestSaveMoney: actions.payload.save_money,
				loading: false,
			};
		case ActionType.CLEAR_NEWS:
			return {
				...state,
				latestMakeMoney: [],
				latestInvestMoney: [],
				latestDebt: [],
				latestSaveMoney: [],
				loading: false,
			};
		default:
			return state;
	}
};

export default reducer;
