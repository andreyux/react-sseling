import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { searchResults } from '../actions/';

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
		if(!this.props.sidebarResults){
			return (<div>Missing results!</div>);
		}
		if(type==='profile'){
			return (
				<div>
					<div className='sidebarHeading'>Public People</div>
					{
						this.props.sidebarResults.map((person)=>{
							return <Person key={person.attributes.userId} {...person} />;
						})
					}
					{/*} <Person {...person} />
					// <Person {...person} />
					// <Person {...person} />
					// <div className='sidebarHeading'>VIP Hub Advocates</div>
					// <Person {...person} />
					// <div className='sidebarHeading'>Advocates</div>
					// <Person {...person} />*/}
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
		if(!this.props.sidebarResults){
			return <div>Noting to show!</div>;
		}
		//console.log(this.props.sidebarResults);
		return (
			<div id='sidebar'>
				{this.searchType(this.props.sidebarResults[0].type)}
			</div>
		);
	}
}

// function mapDispatchToProps(dispatch){
// 	return bindActionCreators({searchResults:searchResults}, dispatch);
// }

function mapStateToProps(state){
	return {
		sidebarResults: state.sidebar
	};
}

export default connect(mapStateToProps)(Sidebar); //, mapDispatchToProps

