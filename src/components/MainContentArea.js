import React, { Component } from 'react';
import { connect } from 'react-redux';
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
			console.log(this.props.profile);
			return (
				<PersonProfile {...this.props.profile} />
			);
		}else{
			return(
				<CompanyProfile  {...company} />
			);
		}
	}

	render() {
		if(!this.props.profile){
			return <div className='selectProfile'>Please select a profile.</div>;
		}

		return (
			<div className='mainContentArea'>
				{this.searchType('person')}
			</div>
		);
	}
}


function mapStateToProps(state){
	return {
		profile: state.profile
	};
}

export default connect(mapStateToProps)(MainContentArea);
