import axios from 'axios';
import request from 'superagent';
import {userProfile} from '../apireq/data';
import {companyProfile} from '../apireq/data';

export const SHOW_PERSON = "SHOW_PERSON";
export const SHOW_COMPANY = "SHOW_COMPANY";
export const SHOW_TAB = "SHOW_TAB";

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
}

export function action_userProfileTab(tab=2){
	return {
		type: SHOW_TAB,
		payload: tab
	};
}