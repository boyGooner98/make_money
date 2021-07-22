import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getNews } from '../actions/news';

export const useActions = () => {
	const dispatch = useDispatch();

	return bindActionCreators(getNews, dispatch);
};
