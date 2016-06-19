import React, { Component } from 'react';

class Tabs extends Component {
	render() {
		return (
			<div>
				<div className='tabsHolder'>
					<div onClick={this.tab1} className='tab'>{this.props.tab1}</div>
					<div onClick={this.tab2} className='tab activeTab'>{this.props.tab2}</div>
					<div className='clearfix'></div>
				</div>
			</div>
		);
	}
}

export default Tabs;
