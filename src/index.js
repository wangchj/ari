import ReactDOM from 'react-dom';
import React from 'react';
import App from './components/app';

const wrapper = document.getElementById("react");
wrapper ? ReactDOM.render(<App />, wrapper) : false;