import { combineReducers } from 'redux';
import searchResults from './reducer_searchResults';
import viewProfile from './reducer_viewProfile';

const rootReducer = combineReducers({
	sidebar:searchResults,
	profile:viewProfile
});

export default rootReducer;
