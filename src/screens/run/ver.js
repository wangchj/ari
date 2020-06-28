import React from 'react';
import Result from './result';
import Problem from 'business/problem'
import StyleSheet from 'scss/screens/run/ver';

/**
 * Gets the shared CSS width for operand and input UI elements in em.
 *
 * @param {object} problem The problem model object.
 * @return The width in em
 */
function getNumWidth(problem) {
  // Get the max number of characters from the 2 operands. The length of the
  // second operand is added by 1 to accommodate the operator.
  let a = problem.vals.reduce((a, v, i, s) =>
    Math.max(a, ('' + v).length + (i === s.length - 1 ? 1 : 0)),
    0
  );
  // Get the number of characters from the answer
  let b = ('' + Problem.eval(problem)).length;
  let m = Math.max(a, b);
  return 0.65 * m;
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
  let numberWidthStyle = {width: getNumWidth(problem) + 'em'};

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