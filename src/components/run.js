import React from 'react';
import {connect} from 'react-redux';
import Problem from './problem';
import Summary from './summary';

function Run(props) {
  let run = props.run;
  let options = props.options;

  if (run.problem) {
    return <Problem problem={run.problem} options={options}/>
  }
  else if (run.problems) {
    return <Summary/>
  }
  else {
    return <div>Something went wrong. No problem to display</div>
  }
}

let RunRx = connect(state => state)(Run);

export default RunRx;