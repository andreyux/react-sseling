import axios from 'axios';
import request from 'superagent';

export function sendEmail(to){
	
curl \
-H "Content-Type: application/json" \
-H "Authorization: <REPLACE_WITH_YOUR_API_KEY>" \
-X POST -d '{"options":{"open_tracking":true,"click_tracking":true},"metadata":{"some_useful_metadata":"testing_sparkpost"},"substitution_data":{"signature":"<REPLACE_WITH_YOUR_FIRST_AND_LAST_NAME>"},"recipients":[{"address":{"email":"<REPLACE_WITH_YOUR_EMAIL_ADDRESS>"},"tags":["learning"],"substitution_data":{"customer_type":"Platinum","first_name":"<REPLACE_WITH_YOUR_FIRST_NAME>"}}],"content":{"from":{"name":"Awesome Company","email":"testing@<REPLACE_WITH_YOUR_SENDING_DOMAIN>"},"subject":"My first SparkPost Transmission","text":"Hi {{first_name}}\r\nYou have just sent your first email through SparkPost!\r\nCongratulations,\r\n{{signature}}","html":"<strong>Hi {{first_name}},</strong><p>You have just sent your first email through SparkPost!</p><p>Congratulations!</p>{{signature}}"}}' \
https://api.sparkpost.com/api/v1/transmissions

	
	var req = data(type);
	return {
		type: SEARCH_RESULTS,
		payload: req.data
	}
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