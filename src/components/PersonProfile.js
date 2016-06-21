import React, { Component } from 'react';
import Tabs from './Tabs';


class PersonProfile extends Component {
	render() {
		if(!this.props.image){
			var image = '../public/images/emptyAvatar.jpg';
		}else{
			var image = this.props.image;
		}
		return (
			<div className='mainProfile'>
				<div className='mainProfileTop'>
					<div className='mainProfileTopLeft'>
						<img src={image} className='Avatar70' />
						<div className='mainProfileDetails'>
							<div className='mainProfileFirstLine'>{this.props.firstName} {this.props.middleName} {this.props.lastName}</div>
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
				<Tabs network={this.props.network} tab1='Profile Info' tab2='Connections'></Tabs>
			</div>
		);
	}
}

export default PersonProfile;