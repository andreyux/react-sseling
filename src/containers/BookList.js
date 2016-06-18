import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectBook } from '../actions/';


class BookList extends Component {

	listBooks(){
		return this.props.books.map((book)=>{
			return (
				<li onClick={()=>this.props.selectBook(book)} key={book.title}>{book.title}</li>
			);
		});
	}

	render() {
		return (
			<div>
				<ul>
					{this.listBooks()}
				</ul>
			</div>
		);
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({selectBook:selectBook}, dispatch);
}

function mapStateToProps(state){
	return {
		books: state.books
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);