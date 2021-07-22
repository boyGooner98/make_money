import { combineReducers } from 'redux';
import NewsReducer from './newsReducer';

const reducers = combineReducers({
	news: NewsReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
