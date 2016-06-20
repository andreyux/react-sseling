import React, { Component } from 'react';
import _ from "lodash";

import Connection from './Connection';

class Network extends Component {
	render() {
		return (
			<div>
				{
					_.map(this.props, (connection, key) => {
						return <Connection key={key} {...connection} />
					})
				}
			</div>
		);
	}
}

export default Network;