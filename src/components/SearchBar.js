import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { searchResults } from '../actions/';

class SearchBar extends Component {
	render() {
		return (
			<div id='searchHolder'>
				<input id='SearchInput' placeholder='Search' />
				<div className='searchTypeHolder'>
					<div className='searchType' onClick={()=>this.props.searchResults('company','Microsoft')}><i className="fa fa-briefcase" aria-hidden="true"></i></div>
					<div className='searchType' onClick={()=>this.props.searchResults('person','Microsoft')}><i className="fa fa-users" aria-hidden="true"></i></div>
				</div>
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
