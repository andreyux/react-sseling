export default function(state=null, action){
	switch(action.type){
		case "EMAIL_MODAL":
			return action.payload;
	}
	return state;
}