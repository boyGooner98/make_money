import {news,Actions} from '../actions';
import {ActionType} from '../actions/actionType/actionsType';

interface News {
	money:news[],
	latestMakeMoney: news[];
	latestSaveMoney: news[];
	latestInvestMoney: news[];
	latestDebt: news[];
	loading: boolean;
	error: string | null;
}

const initialState = {
	money:[],
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
       const data = actions.payload;
			 console.log(data);
		return {
				...state,
				money:data.money,
				latestMakeMoney: data.make_money,
				latestInvestMoney: data.invest_money,
				latestDebt: data.debt,
				latestSaveMoney: data.save_money,
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
