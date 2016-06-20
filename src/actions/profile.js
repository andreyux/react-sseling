import axios from 'axios';
import request from 'superagent';
import {userProfile} from '../apireq/data';
import {companyProfile} from '../apireq/data';

const USER = 'admin';
const PASS = '$56hLbM6723!';

export const SHOW_PERSON = "SHOW_PERSON";
export const SHOW_COMPANY = "SHOW_COMPANY";

export function profile(type, id){
	
	switch(type){
		case 'person':
			var req = userProfile(id);
			return {
				type: SHOW_PERSON,
				payload: req
			};
		case 'company':
			var req = companyProfile(id);
			return {
				type: SHOW_COMPANY,
				payload: req
			};
	}
	

	//console.log(req);
	
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
	// 	auth:{
	// 		username: USER,
	// 		password: PASS
	// 	},
	// 	headers: {
	// 		'Cache-Control': 'no-cache',
	// 		'Content-Type': 'application/json',
	// 	}
	// });
	// console.log(req);
	
}