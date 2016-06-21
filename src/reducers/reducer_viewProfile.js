export function viewProfile(state=null, action){
	switch(action.type){
		case "SHOW_PERSON":
			return action.payload;
		case "SHOW_COMPANY":
			return action.payload;
	}

	return state;
}

export function userProfileTab(state=null, action=1){
	switch(action.type){
		case "SHOW_TAB":
			return action.payload;
	}
	return state;
}