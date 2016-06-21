export function reducer_emailModal(state=null, action){
	switch(action.type){
		case "EMAIL_MODAL":
			return action.payload;
	}
	return state;
}

export function reducer_emailSend(state=null, action){
	switch(action.type){
		case "SEND_EMAIL":
			return action.payload;
	}
	return state;
}