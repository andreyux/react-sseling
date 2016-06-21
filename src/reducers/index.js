import { combineReducers } from 'redux';
import searchResults from './reducer_searchResults';
import { viewProfile } from './reducer_viewProfile';
import { userProfileTab } from './reducer_viewProfile';
import {reducer_emailModal} from './reducer_emailModal';
import {reducer_emailSend} from './reducer_emailModal';


const rootReducer = combineReducers({
	sidebar:searchResults,
	profile:viewProfile,
	userProfileTab:userProfileTab,
	emailModal:reducer_emailModal,
	emailSent:reducer_emailSend
});

export default rootReducer;
