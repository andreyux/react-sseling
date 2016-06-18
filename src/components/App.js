import React, { Component } from 'react';
// import BooksList from '../containers/BookList';
// import BookPreview from '../containers/BookPreview';
import SearchBar from './SearchBar';
import Sidebar from './Sidebar';
import MainContentArea from './MainContentArea';


class App extends Component {
	render() {
		return (
			<div id='appContainer'>
				<SearchBar />
				<div className='clearfix'></div>
				<Sidebar />
				<MainContentArea />
				<div className='clearfix'></div>
			</div>
		);
	}
}

export default App;