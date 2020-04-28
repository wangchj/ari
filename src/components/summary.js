import React from 'react';
import {connect} from 'react-redux';
import Prob from '../problem';

function Summary(props) {
  let probs = props.run.problems;
  let total = probs.length;
  let right = probs.reduce((a, v) => Prob.isCorrect(v) ? a + 1 : a, 0);
  let p     = Math.round(right / total * 100);

  return (
    <div>
      <h1>Summary</h1>
      <table className="table table-borderless">
        <tbody>
          <tr><th>Total</th><td>{total}</td></tr>
          <tr><th>Right</th><td>{right}</td></tr>
          <tr><th>Wrong</th><td>{total - right}</td></tr>
          <tr><th>Accuracy</th><td>{p}%</td></tr>
        </tbody>
      </table>
      <button className="btn btn-primary" style={{width: '100%'}}
        onClick={()=>props.onDoneClick()}>Done</button>
    </div>
  )
}

let SummaryRx = connect(
  state => ({run: state.run}),
  dispatch => ({onDoneClick: () => dispatch({type: 'RUN_EXIT'})})
)(Summary);

export default SummaryRx;