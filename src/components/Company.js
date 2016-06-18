import React, { Component } from 'react';

class Company extends Component {
	render() {
		return (
			<div className='queryResult'>
				<img src={this.props.avatar} className='Avatar50' />
				<div className='personDetails'>
					<div className='personName'>{this.props.name}</div>
					<div className='personWork'>{this.props.location}</div>
					<div className='personAdvocates'>{this.props.advocates} advocate connections</div>
				</div>
				<div className='clearfix'></div>
			</div>
		);
	}
}

export default Company;