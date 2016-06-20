import React, { Component } from 'react';
import { connect } from 'react-redux';
import PersonProfile from './PersonProfile';
import CompanyProfile from './CompanyProfile';

class MainContentArea extends Component {

	searchType(type){
		if(this.props.profile.type==='person'){
			return (
				<PersonProfile {...this.props.profile} />
			);
		}else{
			return(
				<CompanyProfile  {...this.props.profile} />
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
