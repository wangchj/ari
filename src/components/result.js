import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheckCircle, faTimesCircle} from '@fortawesome/free-solid-svg-icons';
import Problem from '../problem';

let container = {
  fontFamily: 'BalsamiqSans',
  fontSize: '3em',
};

export default props => {
  let isCorrect = Problem.isCorrect(props.problem);

  let iconColor = {
    color: isCorrect ? 'green' : '#C0392B'
  };

  let icon = isCorrect ? faCheckCircle : faTimesCircle;

  let text = isCorrect ?
    <span>Correct!</span> :
    <span>The correct answer is <b>{Problem.eval(props.problem)}</b></span>;

  return (
    <div style={container}>
      <FontAwesomeIcon icon={icon} style={iconColor}/> {text}
    </div>
  )
}