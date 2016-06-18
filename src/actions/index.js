import axios from 'axios';
import request from 'superagent';

const USER = 'admin';
const PASS = 'secret';

export const SEARCH_RESULTS = "SEARCH_RESULTS";

export function searchResults(query){
	
	const req = request
	   .post('http://rhino.synapse.staging.c66.me/persons/find')
	   .send({
			"params": [
		    {
		      "param": "currentOrg",
		      "value": 'Microsoft',
		      "searchType": "SEARCH_EQUALS"
		    }
		  ]
		})
	    .withCredentials()
	    .set("Authorization", 'Basic YWRtaW46c2VjcmV0')
   		.set('Content-Type', 'text/plain')
	    .end(function(err, res){
			if (err || !res.ok) {
				alert('Oh no! error');
			} else {
				alert('yay got ' + JSON.stringify(res.body));
			}
	   	});


	// const req = axios({
	//  	method: 'POST', 
	// 	baseURL: 'http://rhino.synapse.staging.c66.me/',
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
	// 	headers: {
	// 		"Authorization": "Basic YWRtaW46c2VjcmV0",
	// 		'Cache-Control': 'no-cache',
	// 		'Content-Type': 'application/json'
	// 	}
	// });

	return {
		type: SEARCH_RESULTS,
		payload: req
	};
}