import React from 'react';
import Prob from '../problem';
import redX from '../images/red_x.png';
import greenCheck from '../images/green_check.png';

/**
 * Gets the length of the longest element in vals.
 *
 * @param {array} vals The array from which to get the max length.
 * @return {integer} The max length.
 */
function getMaxLength(vals) {
  let res;
  vals.forEach(val => {
    let s = '' + val;
    res = res === undefined ? s.length : Math.max(res, s.length);
  });
  return res;
}

/**
 * Prepend spaces to each values so that they line up when displayed.
 *
 * @param {array} vals The array of values to be formatted.
 * @param {string} op The operation string.
 * @return {array} A new array of strings that are the formatted value.
 */
function format(vals, op) {
  let max = getMaxLength(vals);
  let res = [];
  
  op  = op === '/' ? '÷' : op;

  vals.forEach((val, i) => {
    let len = ('' + val).length;
    let d   = max - len;
    let r   = ((i === vals.length - 1) ? op + (' '.repeat(d + 1)) + val :
                                              (' '.repeat(d + 2)) + val);
    res.push(r);
  });

  return res;
}

function Ver(props) {
  let problem = props.problem;
  let vals = problem.vals;
  let lines = format(vals, problem.op);

  let s1 = {textAlign: 'right'};
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
        <pre style={probStyle}>{lines[0]}<br/>{lines[1]}</pre>
        <div style={lineStyle}/>
        <div style={inputStyle}><pre>{problem.input}</pre></div>
      </div>
    </div>
  )
}

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
  if (props.options.format === 'VERTICAL')
    return <Ver problem={props.problem}/>
  else
    return <Hor problem={props.problem}/>

  return <div>Add {JSON.stringify(props)}</div>
}

export default Problem;