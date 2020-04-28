import React from 'react';
import { connect } from 'react-redux';
import MainMenu from './main-menu';
import Options from './options';
import Run from './run';

const Router = props => {
  if (props.op) {
    if (props.run)
      return <Run/>
    else
      return <Options/>
  }
  else
    return <MainMenu/>
}

export default connect(state => state)(Router)