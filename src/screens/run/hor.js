import React, {useState, useEffect} from 'react';
import Result from './result';
import HorStyle from 'scss/screens/run/hor';

const inst = {
  '+': 'Find the sum:',
  '-': 'Find the positive difference:',
  'x': 'Multiply:',
  '/': 'Divide:'
};

let order = {};

function Hor(props) {
  let problem = props.problem;
  let vals = problem.vals;
  let a, b;

  if (problem.op === '-') {
    let key = '' + vals[0] + vals[1];
    if (order[key] === undefined) {
      let o = {};
      o[key] = Math.round(Math.random()) === 1;
      order = o;
    }
    a = order[key] ? vals[0] : vals[1];
    b = order[key] ? vals[1] : vals[0];
  }
  else {
    a = vals[0];
    b = vals[1];
  }

  return (
    <div className="hor">
      <div className="instruction stripe-gray-1">
        <div className="operator">{problem.op}</div>
        <div className="text">{inst[problem.op]}</div>
      </div>
      <div className="operands">
        <div className="stripe stripe-blue">
          <div className="number">{a}</div>
        </div>
        <div className="stripe stripe-green">
          <div className="number">{b}</div>
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