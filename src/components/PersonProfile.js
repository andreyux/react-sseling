import React, { Component } from 'react';

class PersonProfile extends Component {
	render() {
		return (

			<div className='mainProfile'>
				<div className='mainProfileTop'>
					<div className='mainProfileTopLeft'>
						<img src={this.props.avatar} className='Avatar70' />
						<div className='mainProfileDetails'>
							<div className='mainProfileFirstLine'>{this.props.name}</div>
							<div className='mainProfileSecondLine'>{this.props.title} at <span className='personCompany'>{this.props.company}</span></div>
							<div href='#' target='_blank' className='mainProfileThirdLine'>{this.props.location}</div>
						</div>
					</div>
					<div className='mainProfileTopRight'>
						<a href='#' target='_blank' className='mainProfileTopRightSocialBtn'><i className="liColor fa fa-linkedin" aria-hidden="true"></i></a>
						<a href='#' target='_blank' className='mainProfileTopRightSocialBtn'><i className="twColor fa fa-twitter" aria-hidden="true"></i></a>
						<a href='#' target='_blank' className='mainProfileTopRightSocialBtn'><i className="fbColor fa fa-facebook" aria-hidden="true"></i></a>
					</div>
				</div>
				<div className='clearfix'></div>
				<div className='mainProfileBottom'>
					WASDEEEE
				</div>
			</div>
		);
	}
}

export default PersonProfile;