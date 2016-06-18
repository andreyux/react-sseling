import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookPreview extends Component {

	render() {

		if(!this.props.bookDetails){
			return <div>Select a book to get started</div>
		}

		return (
			<div>
				<h1>{this.props.bookDetails.title}</h1>
				<div>{this.props.bookDetails.pages}</div>
			</div>
		);
	}
}

function mapStateToProps(state){
	return {
		bookDetails: state.activeBook
	};
}

export default connect(mapStateToProps)(BookPreview);