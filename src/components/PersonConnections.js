import React, { Component } from 'react';

class PersonConnections extends Component {
	render() {

		if(this.props.advocate){
			var advocate = <div className='advocateBadge'><i className="fa fa-star" aria-hidden="true"></i></div>;
		}
		if(this.props.advocateVIP){
			var advocateVIP = <div className='advocateBadgeVIP'>VIP</div>;
			var requestIntro = <div className='requestIntroduction'><i className="fa fa-envelope" aria-hidden="true"></i> Request and introduction to Nicole Collet</div>;
		}

		return (
			<div className='connectionHolder'>
					<div className='avatarHolder'>
						<img src={this.props.image} className='Avatar70' />
						{advocate}
						{advocateVIP}
					</div>
					<div className='personDetails'>
						<div className='personName'>{this.props.firstName} {this.props.middleName} {this.props.lastName}</div>
						<div className='personWork'>{this.props.title} at <span className='personCompany'>{this.props.company}</span></div>
						<div className='locationS'>{this.props.location}</div>
					</div>
					<div className='clearfix'></div>
					{requestIntro}
			</div>
		);
	}
}

export default PersonConnections;
