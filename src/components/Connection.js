import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { profile } from '../actions/profile';
import _ from "lodash";

class Connection extends Component {
	render() {
		console.log(this.props);
		if(this.props.advocate){
			var advocate = <div className='advocateBadge'><i className="fa fa-star" aria-hidden="true"></i></div>;
		}
		if(this.props.advocateVIP){
			var advocateVIP = <div className='advocateBadgeVIP'>VIP</div>;
			var requestIntro = <div className='requestIntroduction'><i className="fa fa-envelope" aria-hidden="true"></i> Request and introduction to Nicole Collet</div>;
		}
		if(this.props.network){
			var advocatesConnected = (
				<div className='advocatesHolder'>
					<div className='advocatesNumber'>{Object.keys(this.props.network).length}</div>
					<div className='advocatesHeads'>
						{
							_.map(this.props.network, (advocate) => {
								if(advocate.advocate==true){
									return <img src={advocate.image} className='advocateHead' />
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
			<div className='connectionHolder' onClick={()=>this.props.viewProfile('person',1)}>
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
					{advocatesConnected}
					<div className='clearfix'></div>
					{requestIntro}
			</div>
		);
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({viewProfile:profile}, dispatch);
}
function mapStateToProps(state){
	return {
		sidebarResults: state.sidebar
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Connection);
