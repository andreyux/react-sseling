import { combineReducers } from 'redux';
import searchResults from './reducer_searchResults';

const rootReducer = combineReducers({
	sidebar:searchResults
});

export default rootReducer;
