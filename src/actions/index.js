import axios from 'axios';
import request from 'superagent';
import data from '../apireq/data';

export const SEARCH_RESULTS = "SEARCH_RESULTS";
export const EMAIL_MODAL = "EMAIL_MODAL";

export function searchResults(type, query){
	var req = data(type);
	return {
		type: SEARCH_RESULTS,
		payload: req.data
	}
}

export function emailModal(modalState=null){
	return {
		type: EMAIL_MODAL,
		payload: modalState
	};
}




//const USER = 'admin';
//const PASS = '$56hLbM6723!';

// const req = request
//    .post('http://rhino.synapse.staging.c66.me/persons/find')
//    .send({
// 		"params": [
// 	    {
// 	      "param": "currentOrg",
// 	      "value": 'Microsoft',
// 	      "searchType": "SEARCH_EQUALS"
// 	    }
// 	  ]
// 	})
//     .withCredentials()
//     .set("Authorization", 'Basic YWRtaW46c2VjcmV0')
//   		.set('Content-Type', 'text/plain')
//     .end(function(err, res){
// 		if (err || !res.ok) {
// 			alert('Oh no! error');
// 		} else {
// 			alert('yay got ' + JSON.stringify(res.body));
// 		}
//    	});


// var config = {
//   headers: {
//   		'Content-Type': 'application/json',
//   		'Authorization': 'Basic YWRtaW46JDU2aExiTTY3MjMh'
// 	},
// 	auth:{
// 		username: USER,
// 		password: PASS
// 	}
// };

// const req = axios.post('http://rhino.synapse.staging.c66.me/persons/find',{
// 		"params": [
// 	    {
// 	      "param": "currentOrg",
// 	      "value": 'Microsoft',
// 	      "searchType": "SEARCH_EQUALS"
// 	    }
// 	  ]
// 	},config);


// const req = axios({
//  	method: 'POST', 
// 	baseURL: 'http://rhino.synapse.staging.c66.me',
// 	url: '/persons/find',
// 	data: {
// 		"params": [
// 	    {
// 	      "param": "currentOrg",
// 	      "value": 'Microsoft',
// 	      "searchType": "SEARCH_EQUALS"
// 	    }
// 	  ]
// 	},
// 	withCredentials: true,
// 	responseType: 'json', 
// 	headers: {
// 		'Cache-Control': 'no-cache',
// 		'Content-Type': 'application/json',
// 		authorization: 'Basic YWRtaW46JDU2aExiTTY3MjMh'
// 	}
// });