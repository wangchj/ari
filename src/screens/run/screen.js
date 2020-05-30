import React from 'react';
import {connect} from 'react-redux';
import Problem from './problem';
import Summary from 'screens/summary/screen';
import RunInfo from './run-info';

function Content(props) {
  let run = props.run;
  let options = props.options;

  if (run.problem) {
    return <Problem problem={run.problem} options={options} onKeyDown={props.onKeyDown}/>
  }
  else if (run.problems) {
    return <Summary/>
  }
  else {
    return <div>Something went wrong. No problem to display</div>
  }
}

function Run(props) {
  return (
    <div id="run">
      {props.run.problem ? <RunInfo/> : null}
      <Content {...props}/>
    </div>
  )
}

let RunRx = connect(
  state => state,
  dispatch => ({
    onKeyDown: event => {
      event.persist();
      dispatch({type: 'KEYDOWN', event: event, dispatch: dispatch})
    }
  })
)(Run);

export default RunRx;