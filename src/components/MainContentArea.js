import React, { Component } from 'react';
import PersonProfile from './PersonProfile';
import CompanyProfile from './CompanyProfile';

const person = {
	avatar: '../public/images/johnMiller.jpg',
	name:'John Miller',
	title:'CMO',
	company:'HubSpot Inc.',
	location: 'San Francisco, CA, US'
}

const company = {
	avatar: '../public/images/hubSpotLogo.jpg',
	name:'HubSpot Inc.',
	location: 'San Francisco, CA, US',
	website: 'www.hubspot.com'
}


class MainContentArea extends Component {

	searchType(type){
		if(type==='person'){
			return (
				<PersonProfile {...person} />
			);
		}else{
			return(
				<CompanyProfile  {...company} />
			);
		}
	}

	render() {
		return (
			<div className='mainContentArea'>
				{this.searchType('company')}
			</div>
		);
	}
}

export default MainContentArea;
