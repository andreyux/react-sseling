import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxPromise from 'redux-promise';
import App from './components/App';
import reducers from './reducers';

const store = createStore(reducers, applyMiddleware(ReduxPromise), 
	window.devToolsExtension ? window.devToolsExtension() : undefined
);

render(
  <Provider store={store}>
    <App />
  </Provider>,document.getElementById('root')
 )