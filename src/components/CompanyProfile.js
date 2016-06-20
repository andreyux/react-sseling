import React, { Component } from 'react';
import Tabs from './Tabs';
import Network from './Network'

class CompanyProfile extends Component {
	showNetwork(){
		return <Network {...this.props.network}/>
	}
	render() {
		return (
			<div className='mainProfile'>
				<div className='mainProfileTop'>
					<div className='mainProfileTopLeft'>
						<img src={this.props.image} className='Avatar70' />
						<div className='mainProfileDetails'>
							<div className='mainProfileFirstLine'>{this.props.name}</div>
							<div className='mainProfileSecondLine'>{this.props.location}</div>
							<a href='#' target='_blank' className='mainProfileThirdLine'>{this.props.website}</a>
						</div>
					</div>
					<div className='mainProfileTopRight'>
						<a href={this.props.linkedin} target='_blank' className='mainProfileTopRightSocialBtn'><i className="liColor fa fa-linkedin" aria-hidden="true"></i></a>
						<a href={this.props.twitter} target='_blank' className='mainProfileTopRightSocialBtn'><i className="twColor fa fa-twitter" aria-hidden="true"></i></a>
						<a href={this.props.facebook} target='_blank' className='mainProfileTopRightSocialBtn'><i className="fbColor fa fa-facebook" aria-hidden="true"></i></a>
					</div>
				</div>
				<div className='clearfix'></div>
				<Tabs tab1='Company Overview' tab2='People' tab3='Company News' />
				{this.showNetwork()}
			</div>
		);
	}
}

export default CompanyProfile;