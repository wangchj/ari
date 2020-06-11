import React from 'react';
import Result from './result';
import StyleSheet from 'scss/screens/run/ver';

/**
 * Gets the length of the longest element in vals.
 *
 * @param {array} vals The array from which to get the max length.
 * @return {integer} The max length.
 */
function getMaxLength(vals) {
  return vals.reduce((a, v) => Math.max(a, ('' + v).length), 0);
}

/**
 * A component that displays a problem in stacked format.
 *
 * @param {object} props The props for rendering.
 * @return The component render result.
 */
function Ver(props) {
  let problem = props.problem;
  let vals = problem.vals;
  let length = getMaxLength(vals);

  let numberWidthStyle = {width: (length === 1 ? 2 : length) + 'em'};

  return (
    <div className="ver">
      <div className="stripe stripe-blue">
        <span className="number" style={numberWidthStyle}>{vals[0]}</span>
      </div>
      <div className="stripe stripe-green">
        <span className="number" style={numberWidthStyle}>
          <span>{problem.op}</span>
          {vals[1]}
        </span>
      </div>
      <div className="stripe stripe-yellow">
        <div className="input" style={numberWidthStyle}>
          {problem.input || <span>&nbsp;</span>}
        </div>
      </div>
      {
        problem.done ? <Result problem={problem}/>: null
      }
    </div>
  )
}

export default Ver;