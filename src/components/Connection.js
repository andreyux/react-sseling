import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { emailModal } from '../actions/sendEmail';
import { profile } from '../actions/profile';
import _ from "lodash";

class Connection extends Component {
	
	render() {
		
		if(this.props.advocate){
			var advocate = <div className='advocateBadge'><i className="fa fa-star" aria-hidden="true"></i></div>;
		}
		if(this.props.advocateVIP){
			var advocateVIP = <div className='advocateBadgeVIP'>VIP</div>;
			var requestIntro = <div onClick={()=>this.props.emailModal(true, this.props.firstName, this.props.email, this.props.publicProfile.firstName+" "+this.props.publicProfile.lastName)} className='requestIntroduction'><i className="fa fa-envelope" aria-hidden="true"></i> Request and introduction to {this.props.publicProfile.firstName+" "+this.props.publicProfile.lastName}</div>;
		}
		var numberAdvocates = 0;
		_.map(this.props.network, (advocate, key) => {
			if(advocate.advocateVIP==true){
				numberAdvocates=numberAdvocates+1;
			}
		})

		if(this.props.network && numberAdvocates>0){
			var advocatesConnected = (
				<div className='advocatesHolder'>
					<div className='advocatesNumber'>{numberAdvocates}</div>
					<div className='advocatesHeads'>
						{
							_.map(this.props.network, (advocate, key) => {
								if(advocate.advocateVIP==true){
									return <img key={key} src={advocate.image} className='advocateHead' />
								}
							})
						}
					</div>
					<div className='clearfix'></div>
					<div className='advocatesLabels'>VIP advocate connections</div>
				</div>
			);
		}	

		return (
			<div className='connectionHolder'>
					<div className='avatarHolder'  onClick={()=>this.props.viewProfile('person',1)}>
						<img src={this.props.image} className='Avatar70' />
						{advocate}
						{advocateVIP}
					</div>
					<div className='personDetails' onClick={()=>this.props.viewProfile('person',1)}>
						<div className='personName'>{this.props.firstName} {this.props.middleName} {this.props.lastName}</div>
						<div className='personWork'>{this.props.title} at <span className='personCompany'>{this.props.company}</span></div>
						<div className='locationS'>{this.props.location}</div>
					</div>
					{advocatesConnected}
					<div className='clearfix'></div>
					{requestIntro}
			</div>
		);
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({viewProfile:profile, emailModal:emailModal}, dispatch);
}
function mapStateToProps(state){
	return {
		sidebarResults: state.sidebar,
		publicProfile: state.profile
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Connection);
