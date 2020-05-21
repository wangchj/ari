import React from 'react';
import Prob from '../problem';
import redX from '../images/red_x.png';
import greenCheck from '../images/green_check.png';
import Ver from './ver';
import style from '../css/style.css';


function Hor(props) {
  let problem = props.problem;
  let vals = problem.vals;
  let op = problem.op === '/' ? '÷' : problem.op;
  let s1 = {textAlign: 'center'};
  let probStyle = {fontSize:'4rem', lineHeight:'4rem',  marginBottom: '0.5rem'};
  let lineStyle = {width: '100%', height: '1pt', backgroundColor: '#444',
    marginBottom: '0.5rem'
  };
  let inputStyle = {fontSize:'4rem', lineHeight: '4rem', height: '4rem'};
  let imageStyle = {position: 'absolute', width: '100%', opacity: '70%'};

  return (
    <div style={{position: 'relative'}}>
      {
        problem.done ? (Prob.isCorrect(problem) ?
          <img src={greenCheck} style={imageStyle}/> :
          <img src={redX} style={imageStyle}/>
        ) : null
      }
      <div style={s1}>
        <pre style={probStyle}>{vals[0]} {op} {vals[1]}</pre>
        <div style={lineStyle}/>
        <div style={inputStyle}><pre>{problem.input}</pre></div>
      </div>
    </div>
  )
}

function Problem(props) {
  let content = props.options.format === 'VERTICAL' ?
    <Ver problem={props.problem} onKeyDown={props.onKeyDown}/> :
    <Hor problem={props.problem}/>;
  return <div>{content}</div>
}

export default Problem;