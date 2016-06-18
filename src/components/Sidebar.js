import React, { Component } from 'react';
import Person from './Person';
import Company from './Company';

const person = {
	avatar: 'http://lorempixel.com/50/50/',
	name: 'John Doe',
	title: "Developer",
	company: "HubSpot",
	advocates: 12
}
const company = {
	avatar: '../public/images/hubSpotLogo.jpg',
	name: 'HubSpot Inc.',
	location: 'San Francisco, CA, US',
	advocates: 12
}


class Sidebar extends Component {

	searchType(type){
		if(type==='people'){
			return (
				<div>
					<div className='sidebarHeading'>Public People</div>
					<Person {...person} />
					<Person {...person} />
					<Person {...person} />
					<div className='sidebarHeading'>VIP Hub Advocates</div>
					<Person {...person} />
					<div className='sidebarHeading'>Advocates</div>
					<Person {...person} />
				</div>
			);
		}else{
			return(
				<div>
					<div className='sidebarHeading'>Companies</div>
					<Company {...company} />
				</div>
			);
		}
	}

	render() {
		return (
			<div id='sidebar'>
				{this.searchType('company')}
			</div>
		);
	}
}

export default Sidebar;
