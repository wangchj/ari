import React from 'react';
import {connect} from 'react-redux';
import MainScreen from 'screens/main/screen';
import RunScreen from 'screens/run/screen';
import StyleSheet from 'scss/app';

function App(props) {
  return props.run ? <RunScreen/> : <MainScreen/>
}

export default connect(state => state)(App);