import React, { Component } from 'react';
import Tabs from './Tabs';
import PersonConnections from './PersonConnections';

var advocate1 = {
		"image" : "../public/images/johnMiller.jpg",
		"advocate" : true,
		"advocateVIP" : true,
		"firstName" : "John",
		"middleName" : "",
		"lastName" : "Miller",
		"title" : "CMO",
		"company" : "IBM",
		"location" : "Palo Alto, CA, US",
		"advovatesFor" : ["Influitive","IBM"]
	}

var advocate2 = {
		"image" : "../public/images/emptyAvatar.jpg",
		"advocate" : true,
		"firstName" : "Tao",
		"middleName" : "",
		"lastName" : "Hu",
		"title" : "Marketing Manager",
		"company" : "HP",
		"location" : "San Francisco, CA, US",
		"advovatesFor" : ["Influitive","IBM"]
	}
var advocate3 = {
		"image" : "../public/images/emptyAvatar.jpg",
		
		"firstName" : "Sarah",
		"middleName" : "",
		"lastName" : "Dunn",
		"title" : "PR",
		"company" : "Shared Spaces",
		"location" : "Toronto, ON, Canada",
		"advovatesFor" : ["Influitive","IBM"]
	}

class CompanyProfile extends Component {
	render() {
		return (
			<div>
				<Tabs tab1='Profile Info' tab2='Connections' />
				<PersonConnections {...advocate1} />
				<PersonConnections {...advocate2} />
				<PersonConnections {...advocate3} />
			</div>
		);
	}
}

export default CompanyProfile;