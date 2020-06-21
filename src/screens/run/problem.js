import React from 'react';
import Ver from './ver';
import Hor from './hor';
import Numpad from 'widgets/numpad';

import ProblemStyle from 'scss/screens/run/problem';

function Problem(props) {
  let content = props.settings.format === 'STACK' ?
    <Ver problem={props.problem}/> :
    <Hor problem={props.problem}/>;
  return (
    <div>
      {content}
      <Numpad/>
    </div>
  )
}

export default Problem;