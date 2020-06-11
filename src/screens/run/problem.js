import React from 'react';
import Ver from './ver';
import Hor from './hor';
import ProblemStyle from 'scss/screens/run/problem';

function Problem(props) {
  let content = props.options.format === 'VERTICAL' ?
    <Ver problem={props.problem}/> :
    <Hor problem={props.problem}/>;
  return <div>{content}</div>
}

export default Problem;