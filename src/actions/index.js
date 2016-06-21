import axios from 'axios';
import request from 'superagent';
import data from '../apireq/data';

export const SEARCH_RESULTS = "SEARCH_RESULTS";

export function searchResults(type, query){
	var req = data(type);
	return {
		type: SEARCH_RESULTS,
		payload: req.data
	}
}
