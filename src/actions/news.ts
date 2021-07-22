import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionType } from './actionType/actionsType';
import { Actions, Payload, news } from './index';

//Getting the latest news for all the pages

export const getNews = () => async (dispatch: Dispatch<Actions>) => {
	try {
		const uri_money =
			'https://newsapi.org/v2/everything?q=money&from=2021-07-21&sortBy=latest&apiKey=4241ade4ca534f1285ee43dc167c9af1';
		let response = await axios.get(uri_money);
		const money: news[] = response.data.articles.map((article: any) => {
			const News: news = {
				author: article.author,
				title: article.title,
				description: article.description,
				image: article.urlToImage,
			};
			return News;
		});

		const uri_make_money =
			'https://newsapi.org/v2/everything?q=make%10money&from=2021-07-21&sortBy=latest&apiKey=4241ade4ca534f1285ee43dc167c9af1';
		response = await axios.get(uri_make_money);
		const make_money: news[] = response.data.articles.map((article: any) => {
			const News: news = {
				author: article.author,
				title: article.title,
				description: article.description,
				image: article.urlToImage,
			};
			return News;
		});
		const uri_save_money =
			'https://newsapi.org/v2/everything?q=save%10money&from=2021-07-21&sortBy=latest&apiKey=4241ade4ca534f1285ee43dc167c9af1';

		response = await axios.get(uri_save_money);
		const save_money: news[] = response.data.articles.map((article: any) => {
			const News: news = {
				author: article.author,
				title: article.title,
				description: article.description,
				image: article.urlToImage,
			};
			return News;
		});

		const uri_invest_money =
			'https://newsapi.org/v2/everything?q=invest%10money&from=2021-07-21&sortBy=latest&apiKey=4241ade4ca534f1285ee43dc167c9af1';

		response = await axios.get(uri_invest_money);
		const invest_money: news[] = response.data.articles.map((article: any) => {
			const News: news = {
				author: article.author,
				title: article.title,
				description: article.description,
				image: article.urlToImage,
			};
			return News;
		});
		const uri_debt =
			'https://newsapi.org/v2/everything?q=save%10money&from=2021-07-21&sortBy=latest&apiKey=4241ade4ca534f1285ee43dc167c9af1';

		response = await axios.get(uri_debt);
		const debt: news[] = response.data.articles.map((article: any) => {
			const News: news = {
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
				money,
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
