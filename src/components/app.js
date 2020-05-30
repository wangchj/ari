import React from 'react';
import {connect} from 'react-redux';
import Main from './main';
import Run from './run';
import StyleSheet from 'scss/app.scss';

function App(props) {
  return props.run ? <Run/> : <Main/>
}

export default connect(state => state)(App);