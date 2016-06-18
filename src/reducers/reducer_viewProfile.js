export default function(state=null, action){
	switch(action.type){
		case "SHOW_PERSON":
			return action.payload;
		case "SHOW_COMPANY":
			return action.payload;
	}

	return state;
}