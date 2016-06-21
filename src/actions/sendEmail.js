import axios from 'axios';
import request from 'superagent';

export const SEND_EMAIL = "SEND_EMAIL";
export const EMAIL_MODAL = "EMAIL_MODAL";

const API_KEY = '786d2cc39f16a2569cb90b2c84a24dec05418283';

export function sendEmail(toName, toEmail, publicUser){

	//company PUBLIC USER
	//var puName = req.puName;

	//Advocate that is being asked for introduction
	//var aName = req.aName;
	//var aEmail = req.aEmail;



	 request
	   .post('http://127.0.0.1:5000/')
	   .send({
	   			"puName" : publicUser,
	   			"aName" : toName,
	   			"aEmail" : toEmail
   			})
	   .set('Content-Type', 'application/json')
	   .end(function(err, res){
	     if (err || !res.ok) {
	       console.log('Oh no! error');
	     } else {
	       console.log('yay got ' + JSON.stringify(res.body));
	     }
	   });

	return {
		type: SEND_EMAIL,
		payload: true
	}
}

export function emailModal(modalState=false, aName, aEmail, publicUser){
	return {
		type: EMAIL_MODAL,
		payload: {modalState, aName, aEmail, publicUser}
	};
}
