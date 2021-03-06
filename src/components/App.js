import React, { Component } from 'react';

//import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
//import { searchResults } from '../actions/';


// import BooksList from '../containers/BookList';
// import BookPreview from '../containers/BookPreview';
import SearchBar from './SearchBar';
import Sidebar from './Sidebar';
import MainContentArea from './MainContentArea';

import Mod from './Mod';


class App extends Component {
	render() {
		if(!this.props.sidebarResults){
			return (
				<div id='appContainer'>
					<Mod />
					<SearchBar />
					<div className='splashScreen'>
						<img className="splashScreenImg" src='../public/images/splashScreen.jpg' />
					</div>
					<div className='clearfix'></div>
				</div>
			);
		}else{
			return (
				<div id='appContainer'>
					<Mod />
					<SearchBar />
					<div className='clearfix'></div>
					<Sidebar />
					<MainContentArea />
					<div className='clearfix'></div>
				</div>
			);
		}
		
	}
}

function mapStateToProps(state){
	return {
		sidebarResults: state.sidebar
	};
}

export default connect(mapStateToProps)(App);