import ReactDOM from 'react-dom';
import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from 'reducers/reducer';
import App from './app';

// Create the redux store
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ &&
                                   window.__REDUX_DEVTOOLS_EXTENSION__());

const wrapper = document.getElementById("react");
ReactDOM.render(<Provider store={store}><App /></Provider>, wrapper);