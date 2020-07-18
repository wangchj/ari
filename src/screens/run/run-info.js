import React from 'react';
import {connect} from 'react-redux';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheckCircle, faTimesCircle} from '@fortawesome/free-solid-svg-icons';
import Solver from 'business/solver';
import StyleSheet from 'scss/screens/run/run-info';
import CommonStyle from 'scss/common';

function RunInfo(props) {
  let problems = props.run.problems;
  let completedCount = problems ? problems.length : 0;
  let rightCount = problems ? problems.reduce(
    (a, p) => Solver.isCorrect(p) ? a + 1 : a, 0) : 0;
  let wrongCount = problems ? problems.reduce(
    (a, p) => Solver.isCorrect(p) ? a : a + 1, 0) : 0;

  return (
    <div id="run-info">
      <div>
        <span className="exit" onClick={props.onExitClick}>×</span>
      </div>
      <div className="stats">
        <div>{completedCount  + 1} of 20</div>
        <div>
          <FontAwesomeIcon icon={faCheckCircle} className="green"/> {rightCount}
        </div>
        <div>
          <FontAwesomeIcon icon={faTimesCircle} className="red"/> {wrongCount}
        </div>
      </div>
    </div>
  );
}

let RunInfoRx = connect(
  state => ({run: state.run}),
  dispatch => ({onExitClick: () => dispatch({type: 'RUN_EXIT'})})
)(RunInfo);

export default RunInfoRx;