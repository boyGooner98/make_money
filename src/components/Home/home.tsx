import { useEffect } from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/use_typed_selector';

const Home = () => {
	useEffect(() => {
		//dispatch an action
		console.log('dispatching an action');
		getNews();
	});

	const getNews = useActions();
	const state = useTypedSelector((state) => state.news);
	const { loading, error, latestMakeMoney } = state;
  
  


	return <div>{latestMakeMoney}</div>;
};

export default Home;
