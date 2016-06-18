import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { searchResults } from '../actions/';

class SearchBar extends Component {
	render() {
		return (
			<div id='searchHolder'>
				<input id='SearchInput' onClick={()=>this.props.searchResults('Microsoft')} placeholder='Search' />
			</div>
		);
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({searchResults:searchResults}, dispatch);
}

function mapStateToProps(state){
	return {
		books: state.books
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
