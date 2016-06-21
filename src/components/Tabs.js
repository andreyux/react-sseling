import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Network from './Network'

import { action_userProfileTab } from '../actions/profile';

class Tabs extends Component {
	render() {
		//console.log(this.props.selectedProfile.type);
		if(this.props.selectedProfile.type==='person'){
			if(!this.props.selectedTab){
				this.props.action_userProfileTab(1);
			}
			else if(this.props.selectedTab==2){
				var bottomProfile = <Network {...this.props.network} />;
				var tabsGroup = (
						<div>
							<div onClick={()=>this.props.action_userProfileTab(1)} className='tab'>{this.props.tab1}</div>
							<div onClick={()=>this.props.action_userProfileTab(2)} className='tab activeTab'>{this.props.tab2}</div>
							<div onClick={this.tab3} className='tab'>{this.props.tab3}</div>
						</div>
				);
			}else if(this.props.selectedTab==1){
				var bottomProfile = <img className='userProfileTab' src='../public/images/userInfo.jpg' />;
				var tabsGroup = (
						<div>
							<div onClick={()=>this.props.action_userProfileTab(1)} className='tab activeTab'>{this.props.tab1}</div>
							<div onClick={()=>this.props.action_userProfileTab(2)} className='tab'>{this.props.tab2}</div>
							<div onClick={this.tab3} className='tab'>{this.props.tab3}</div>
						</div>
					);
			}
		}else if(this.props.selectedProfile.type==='company'){
			this.props.action_userProfileTab(2);
			var tabsGroup = (
				<div>
					<div onClick={()=>this.props.action_userProfileTab(1)} className='tab'>{this.props.tab1}</div>
					<div onClick={()=>this.props.action_userProfileTab(2)} className='tab activeTab'>{this.props.tab2}</div>
					<div onClick={this.tab3} className='tab'>{this.props.tab3}</div>
				</div>
			);
		}

		return (
			<div>
				<div className='tabsHolder'>
					{tabsGroup}
					<div className='clearfix'></div>
				</div>
				{bottomProfile}
			</div>
		);
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({action_userProfileTab:action_userProfileTab}, dispatch);
}
function mapStateToProps(state){
	return {
		selectedTab: state.userProfileTab,
		selectedProfile: state.profile
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Tabs);
