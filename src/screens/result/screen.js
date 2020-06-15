import React from 'react';
import {connect} from 'react-redux';
import Prob from 'business/problem';
import Button from 'widgets/button';

import ScreenStyle from 'scss/screens/result/screen';

function Screen(props) {
  let probs = props.run.problems;
  let total = probs.length;
  let right = probs.reduce((a, v) => Prob.isCorrect(v) ? a + 1 : a, 0);
  let p     = Math.round(right / total * 100);

  return (
    <div className="report-screen">
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
      <div className="buttons">
        <Button label="Done!" variant="dark" onClick={props.onDoneClick}/>
      </div>
    </div>
  )
}

export default connect(
  state => ({run: state.run}),
  dispatch => ({onDoneClick: () => dispatch({type: 'RUN_EXIT'})})
)(Screen);