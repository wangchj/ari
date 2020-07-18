import React from 'react';
import {connect} from 'react-redux';
import Solver from 'business/solver';
import Button from 'widgets/button';

import ScreenStyle from 'scss/screens/result/screen';
import RunInfoStyle from 'scss/screens/run/run-info';

function Pill(props) {
  let p = props.prob;
  let r = Solver.isCorrect(p);
  let a = Solver.eval(p);

  return (
    <div className="pill">
      <div className="k">{p.vals[0]} {p.op} {p.vals[1]}</div>
      <div className={'v ' + (r ? 'v-green' : 'v-red')}>
        {r ? p.input : <span><s>{p.input}</s> ({a})</span>}
      </div>
    </div>
  )
}

function Screen(props) {
  let probs = props.run.problems;
  let total = probs.length;
  let right = probs.reduce((a, v) => Solver.isCorrect(v) ? a + 1 : a, 0);

  return (
    <div className="report-screen">
      <div id="run-info">
        <div>
          <span className="exit" onClick={props.onDoneClick}>×</span>
        </div>
      </div>
      <div className="title">Run result</div>
      <div className="stats-area">
        <div className="stats">
          <div className="stat">
            <div className="name">Correct</div>
            <div className="value">{right}</div>
          </div>
          <div className="stat">
            <div className="name">Incorrect</div>
            <div className="value">{total - right}</div>
          </div>
          <div className="stat">
            <div className="name">Total</div>
            <div className="value">{total}</div>
          </div>
        </div>
      </div>

      <div className="problems">
        <div className="pills">
          {
            probs.map((p, i) => <Pill key={i} prob={p}/>)
          }
        </div>
      </div>
    </div>
  )
}

export default connect(
  state => ({run: state.run}),
  dispatch => ({onDoneClick: () => dispatch({type: 'RUN_EXIT'})})
)(Screen);