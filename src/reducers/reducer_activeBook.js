export default function(state=null, action){
	switch(action.type){
		case "PREVIEW_BOOK":
			return action.payload;
	}

	return state;
}