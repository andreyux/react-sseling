import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { profile } from '../actions/profile';

class Company extends Component {
	render() {
		if(this.props.attributes.advocates){
			var advocates = <div className='personAdvocates'>{this.props.attributes.advocates} VIP advocates connections</div>;
		}
		return (
			<div className='queryResult' onClick={()=>this.props.viewProfile('company',this.props.attributes.userId)}>
				<img src={this.props.attributes.image} className='Avatar50' />
				<div className='personDetails'>
					<div className='personName'>{this.props.attributes.name}</div>
					<div className='personWork'>{this.props.attributes.location}</div>
					{advocates}
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

export default connect(mapStateToProps, mapDispatchToProps)(Company);