import React from 'react';
import {connect} from 'react-redux';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheckCircle, faTimesCircle} from '@fortawesome/free-solid-svg-icons';
import Problem from 'business/problem';

let container = {
  display: 'flex',
  fontFamily: 'BalsamiqSans',
  // fontSize: '2em',
  color: 'rgba(0, 40, 80, 0.7)',
  backgroundColor: 'white',
  padding: '20px',
  alignItems: 'center',
  // marginBottom: '10px',
}

let section = {
  flexGrow: 1,
};

let exit = {
  fontSize: '1.5em',
  cursor: 'pointer',
};

let progress = {
  ...section,
  display: 'flex',
  justifyContent: 'center',
};

let stats = {
  ...section,
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
};

let rightIcon = {
  color: 'green',
};

let wrongIcon = {
  color: '#C0392B',
};

function RunInfo(props) {
  let problems = props.run.problems;
  let completedCount = problems ? problems.length : 0;
  let rightCount = problems ? problems.reduce(
    (a, p) => Problem.isCorrect(p) ? a + 1 : a, 0) : 0;
  let wrongCount = problems ? problems.reduce(
    (a, p) => Problem.isCorrect(p) ? a : a + 1, 0) : 0;

{/*<button style={button}>×</button>*/}

  return (
    <div style={container}>
      <div style={section}>
        <span style={exit} onClick={props.onExitClick}>×</span>
      </div>
      <div style={progress}>{completedCount  + 1} of 20</div>
      <div style={stats}>
        <div style={{marginRight: '1.5em'}}>
          <FontAwesomeIcon icon={faCheckCircle} style={rightIcon}/> {rightCount}
        </div>
        <div>
          <FontAwesomeIcon icon={faTimesCircle} style={wrongIcon}/> {wrongCount}
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