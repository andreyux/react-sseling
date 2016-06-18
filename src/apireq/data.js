export default function(type){
	var data;
	if(type='profile'){
		data = {
				  "links": {},
				  "data": [
				    {
				      "id": "#25:1554",
				      "type": "profile",
				      "attributes": {
				        "userId": -5773089,
				        "name": "Nicole Collet",
				        "title": "Director, Field Strategy and Change Management",
				        "company": "Microsoft"
				      }
				    },
				    {
				      "id": "#25:1712",
				      "type": "profile",
				      "attributes": {
				        "userId": -1424653,
				        "name": "Lara Martini",
				        "title": "Regional Commercial Markets Strategy Group Lead",
				        "company": "Microsoft"
				      }
				    },
				    {
				      "id": "#25:1889",
				      "type": "profile",
				      "attributes": {
				        "userId": -5970314,
				        "name": "Martin Kostal",
				        "title": "Director of Engineering",
				        "company": "Microsoft"
				      }
				    },
				    {
				      "id": "#25:1905",
				      "type": "profile",
				      "attributes": {
				        "userId": -1925255,
				        "name": "Jeff Watkins",
				        "title": "Area Sales Rep - NY Metro and Northeast",
				        "company": "Microsoft"
				      }
				    },
				    {
				      "id": "#25:2471",
				      "type": "profile",
				      "attributes": {
				        "userId": -5968074,
				        "name": "Jamie Tozzi",
				        "title": "General Manager, Dynamics East Region",
				        "company": "Microsoft"
				      }
				    },
				    {
				      "id": "#25:4482",
				      "type": "profile",
				      "attributes": {
				        "userId": -627240,
				        "name": "Sheila Brasca",
				        "title": "Services Solution Specialist - Mission Critical",
				        "company": "Microsoft"
				      }
				    }
				  ],
				  "includes": []
		}
	}else{
		data = {
			"none":"none"
		}
	}
	return data;
}

export function userProfile(id){
	
	var data = {
		  "rid": "#25:1554",
		  "createdDate": 1451347200000,
		  "lastUpdated": 1451260800000,
		  "userId": -5773089,
		  "triggerfoxId": 5773089,
		  "accountPersonId": 0,
		  "triggerfoxCharId": "zBHDCw8z3I",
		  "uuid": "",
		  "email": "ncollet@microsoft.com",
		  "firstName": "Nicole",
		  "middleName": "",
		  "lastName": "Collet",
		  "gender": "OTHER",
		  "age": 0,
		  "birthdayDay": 0,
		  "birthdayMonth": 0,
		  "birthdayYear": 0,
		  "relationshipStatusType": "UNKNOWN",
		  "bio": "",
		  "headline": "Director, Field Strategy and Change Management at Microsoft",
		  "currentTitle": "Director, Field Strategy and Change Management",
		  "currentOrg": "Microsoft"
		};
	return data;
} 
