import c1 from './c1.json';
import c1a1 from './c1a1.json';
import c1a2 from './c1a2.json';
import c1a3 from './c1a3.json';

export default function(type){
	var data;
	if(type==='person'){
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
	}else if(type==='company'){
		data = {
			"data":[
				{
			      "id": "#25:2471",
			      "type": "company",
			      "attributes": {
			        "companyId": 1,
			        "image" : "../public/images/hubSpotLogo.jpg",
			        "name": "HubSpot inc.",
			        "location": "Cambridge, MA, US",
			        "advocates": 10
			      }
			    },
			    {
					"id": "#25:4482",
					"type": "company",
					"attributes": {
						"companyId": 2,
						"image" : "../public/images/hubitLogo.jpg",
						"name": "HubIt Corp.",
						"location": "Toronto, ON, Canada"
					}
				}
	    	],
	    	"includes": []
		}
	}
	return data;
}

//PUBLIC PROFILE THAT HAS ADVOCATES CONNECTED TO THEM
export function userProfile(){
	var data = c1a1;
	return data;
} 

export function companyProfile(){

	var profile1 = userProfile();
	var data = {
			"type" : "company",
			"image" : "../public/images/hubSpotLogo.jpg",
			"name" : "HubSpot Inc.",
			"location" : "Cambridge, MA, US",
			"website" : "www.hubspot.com",
			"facebook" : "https://www.facebook.com/hubspot",
			"twitter" : "https://twitter.com/HubSpot",
			"linkedin" : "https://www.linkedin.com/company/hubspot",
			"network" : [c1a1, c1a2, c1a3]
		};
	return data;
} 
