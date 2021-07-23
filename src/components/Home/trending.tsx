import React from 'react';
import { news } from '../../actions';
import '../../app.css';

interface TrendingProps {
	data: news[];
}

const Trending: React.FC<TrendingProps> = ({data}) => {
	const articles  = data;
  articles.splice(0,articles.length-10);
	return (
		<div className='trending-main'>
			<h1
				style={{
					textAlign: 'center',
					padding: '1rem',
					fontSize: '4rem',
					fontWeight: 'bolder',
				}}
			>
				Trending Articles
			</h1>
			<div className='trending_grid'>
				{articles &&
					articles.map((article) => {
						return (
							<div className='trending_inner'>
								<img src={article.image} alt='trending-i' />
								<div className='trending_inner_text'>
									<h3>{article.title}</h3>
								</div>
							</div>
						);
					})}
			</div>
		</div>
	);
};

export default Trending;
