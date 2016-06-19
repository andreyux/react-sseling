import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { profile } from '../actions/profile';

class Person extends Component {
	render() {
		var avatar;
		if(this.props.avatar){
			avatar = <img src={this.props.avatar} className='Avatar50' />;
		}else{
			avatar = <img src='../public/images/emptyAvatar.jpg' className='Avatar50' />;
		}
		return (
			<div className='queryResult' onClick={()=>this.props.viewProfile('person',this.props.attributes.userId)}>
				{avatar}
				<div className='personDetails'>
					<div className='personName'>{this.props.attributes.name}</div>
					<div className='personWork'>{this.props.attributes.title} at <span className='personCompany'>{this.props.attributes.company}</span></div>
					<div className='personAdvocates'>{this.props.advocates} advocate connections</div>
				</div>
				<div className='clearfix'></div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Person);
