import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import Problem from '../problem';

let container = {
  fontFamily: 'BalsamiqSans',
  fontSize: '2em',
};

let icon = {
  color: 'red',
};

export default props => (
  <div style={container}>
    <span style={icon}>
      <FontAwesomeIcon icon={faTimesCircle} />
    </span>&nbsp;
    The correct answer is <b>{Problem.eval(props.problem)}</b>
  </div>
)