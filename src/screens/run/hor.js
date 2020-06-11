import React from 'react';
import Result from './result';
import HorStyle from 'scss/screens/run/hor';

const inst = {
  '+': 'Find the sum:',
  '-': 'Find the positive difference:',
  'x': 'Multiply:',
  '/': 'Divide:'
};

function Hor(props) {
  let problem = props.problem;
  let vals = problem.vals;

  return (
    <div className="hor">
      <div className="instruction stripe-gray-1">
        <div className="operator">{problem.op}</div>
        <div className="text">{inst[problem.op]}</div>
      </div>
      <div className="operands">
        <div className="stripe stripe-blue">
          <div className="number">{vals[0]}</div>
        </div>
        <div className="stripe stripe-green">
          <div className="number">{vals[1]}</div>
        </div>
      </div>
      <div className="stripe stripe-yellow number">
        {problem.input || <span>&nbsp;</span>}
      </div>
      {
        problem.done ? <Result problem={problem}/>: null
      }
    </div>
  )
}

export default Hor;