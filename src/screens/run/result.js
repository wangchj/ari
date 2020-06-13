import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheckCircle, faTimesCircle} from '@fortawesome/free-solid-svg-icons';
import Problem from 'business/problem';
import StyleSheet from 'scss/screens/run/result';
import CommonStyle from 'scss/common';

export default props => {
  let isCorrect = Problem.isCorrect(props.problem);

  let iconColor = isCorrect ? 'green' : 'red';

  let icon = isCorrect ? faCheckCircle : faTimesCircle;

  let text = isCorrect ?
    <span>Correct!</span> :
    <span>The answer is <b>{Problem.eval(props.problem)}</b></span>;

  return (
    <div className="result">
      <FontAwesomeIcon icon={icon} className={iconColor}/> {text}
    </div>
  )
}