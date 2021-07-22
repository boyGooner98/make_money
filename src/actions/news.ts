import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionType } from './actionType/actionsType';
import { Actions, Payload, news } from './index';

//Getting the latest news for all the pages



export const getNews = () => async (dispatch: Dispatch<Actions>) => {
	try {
		const uri_make_money =
			'https://newsapi.org/v2/everything?q=make%20money&from=2021-07-21&sortBy=latest&apiKey=4241ade4ca534f1285ee43dc167c9af1';
		let response = await axios.get(uri_make_money);
		const make_money = response.data.articles.map((article: any) => {
			const News = {
				author: article.author,
				title: article.title,
				description: article.description,
				image: article.urlToImage,
			};
			return News;
		});
   console.log(make_money);
		const uri_save_money =
			'https://newsapi.org/v2/everything?q=save%20money&from=2021-07-21&sortBy=latest&apiKey=4241ade4ca534f1285ee43dc167c9af1';

		response = await axios.get(uri_save_money);
		const save_money = response.data.articles.map((article: any) => {
			const News= {
				author: article.author,
				title: article.title,
				description: article.description,
				image: article.urlToImage,
			};
			return News;
		});

		const uri_invest_money =
			'https://newsapi.org/v2/everything?q=invest%20money&from=2021-07-21&sortBy=latest&apiKey=4241ade4ca534f1285ee43dc167c9af1';

		response = await axios.get(uri_invest_money);
		const invest_money = response.data.articles.map((article: any) => {
			const News= {
				author: article.author,
				title: article.title,
				description: article.description,
				image: article.urlToImage,
			};
			return News;
		});
		const uri_debt =
			'https://newsapi.org/v2/everything?q=save%20money&from=2021-07-21&sortBy=latest&apiKey=4241ade4ca534f1285ee43dc167c9af1';

		response = await axios.get(uri_debt);
		const debt = response.data.articles.map((article: any) => {
			const News = {
				author: article.author,
				title: article.title,
				description: article.description,
				image: article.urlToImage,
			};
			return News;
		});

		dispatch({
			type: ActionType.GET_LATEST_NEWS,
			payload: {
				make_money,
				save_money,
				debt,
				invest_money,
			},
		});
	} catch (err) {
		console.log(err.message);
	}
};




//Clearing the news of everything