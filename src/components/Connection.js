import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { emailModal } from '../actions/index';
import { profile } from '../actions/profile';
import _ from "lodash";

class Connection extends Component {
	
	render() {
		if(this.props.advocate){
			var advocate = <div className='advocateBadge'><i className="fa fa-star" aria-hidden="true"></i></div>;
		}
		if(this.props.advocateVIP){
			var advocateVIP = <div className='advocateBadgeVIP'>VIP</div>;
			var requestIntro = <div onClick={()=>this.props.emailModal(true)} className='requestIntroduction'><i className="fa fa-envelope" aria-hidden="true"></i> Request and introduction to Nicole Collet</div>;
		}
		if(this.props.network){
			var advocatesConnected = (
				<div className='advocatesHolder'>
					<div className='advocatesNumber'>{Object.keys(this.props.network).length}</div>
					<div className='advocatesHeads'>
						{
							_.map(this.props.network, (advocate, key) => {
								if(advocate.advocate==true){
									return <img key={key} src={advocate.image} className='advocateHead' />
								}
							})
						}
					</div>
					<div className='clearfix'></div>
					<div className='advocatesLabels'>Advocate Connections</div>
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
		sidebarResults: state.sidebar
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Connection);
