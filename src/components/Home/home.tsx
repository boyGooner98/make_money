import { useEffect } from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/use_typed_selector';
import Spinner from '../../miscellaneous/spinner';
import Trending from './trending';
import '../../app.css';
// import { news } from '../../actions';

const Home = () => {
	useEffect(() => {
		//dispatch an action
		getNews();
	}, []);

	const getNews = useActions();
	const state = useTypedSelector((state) => state.news);
	const { loading, money } = state;
	const mainArticle = money[4];

	return (
		<div>
		
			{loading && <Spinner />}
			{!loading && (
				<div className='home_main_image'>
					<img
						className='main_image'
						src={mainArticle.image}
						alt='main-img'
					/>
					<div className='main_text'>
						<h1>{mainArticle.title}</h1>
					</div>
				</div>
			)}
			<Trending data={money}/>
		</div>
	);
};

export default Home;
