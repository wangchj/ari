import React from 'react';
import {connect} from 'react-redux';
import Problem from './problem';
import Summary from './summary';
import Nav from './nav';

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
      <Nav/>
      <div className="container">
        <Content {...props}/>
      </div>
    </div>
  )
}

let RunRx = connect(
  state => state,
  dispatch => ({
    onKeyDown: event => {
      event.persist();
      dispatch({type: 'KEYDOWN', event: event})
    }
  })
)(Run);

export default RunRx;