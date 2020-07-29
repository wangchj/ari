import React from 'react';
import Ver from './ver';
import Hor from './hor';
import Spe from './spe';
import Numpad from 'widgets/numpad';

import ProblemStyle from 'scss/screens/run/problem';

/**
 * Gets display format view element.
 *
 * @param {string} format A format value defined in Format.
 * @preturn {object} The view React element.
 */
function getView(props) {
  switch (props.settings.format) {
    case 'STACK':
      return <Ver problem={props.problem}/>
    case 'SCORE':
      return <Hor problem={props.problem}/>
    case 'SPEECH':
      return <Spe problem={props.problem}/>
  }
}

/**
 * The component that displays a problem.
 *
 * @param {object} props The component props.
 * @return {object} The render result.
 */
function Problem(props) {
  let content = getView(props);

  return (
    <div>
      {content}
      <Numpad/>
    </div>
  )
}

export default Problem;