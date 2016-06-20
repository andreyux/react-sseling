import { combineReducers } from 'redux';
import searchResults from './reducer_searchResults';
import viewProfile from './reducer_viewProfile';
import emailModal from './reducer_emailModal';

const rootReducer = combineReducers({
	sidebar:searchResults,
	profile:viewProfile,
	emailModal:emailModal
});

export default rootReducer;
