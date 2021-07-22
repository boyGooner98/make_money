import { ActionType } from './actionType/actionsType';

export type news = {
	news:{
	author: string;
	title: string;
	description: string;
	image: string;
	}
};

export interface Payload {
	make_money: news[];
	save_money: news[];
	debt: news[];
	invest_money: news[];
}

interface SEARCH_NEWS {
	type: ActionType.SEARCH_NEWS;
}

interface GET_LATEST_NEWS {
	type: ActionType.GET_LATEST_NEWS;
	payload: Payload;
}

interface CLEAR_NEWS {
	type: ActionType.CLEAR_NEWS;
}

export type Actions = SEARCH_NEWS | GET_LATEST_NEWS | CLEAR_NEWS;
