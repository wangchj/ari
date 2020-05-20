import React from 'react';

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

function getTableWidth(vals) {
  return vals.reduce((a, v, i) =>
    Math.max(a, ('' + v).length + (i === vals.length - 1 ? 2 : 0)), 0);
}

function getTableMatrix(vals) {
  let w = getTableWidth(vals);
  let h = vals.length;
}

function Table(props) {
  let prob = props.problem;
  let vals = prob.vals;
  let w = getTableWidth(vals);
  let h = vals.length;
  let rows = vals.map(val => )
}

function Ver(props) {
  let problem = props.problem;
  let vals = problem.vals;
  let lines = format(vals, problem.op);

  let s1 = {textAlign: 'right'};
  let probStyle = {fontSize: '8em', lineHeight: '1em', 
    marginBottom: '0.5rem', 'fontFamily': 'BalsamiqSans',
  };
  let lineStyle = {width: '100%', height: '1pt', backgroundColor: '#444',
    marginBottom: '0.5rem'
  };
  let inputStyle = {fontSize:'8em', lineHeight: '1em', height: '1em',
    'fontFamily': 'BalsamiqSans',
  };
  let imageStyle = {position: 'absolute', width: '100%', opacity: '70%'};

  return (
    <div className="card">
      <div className="card-header">Add the following numbers
      </div>
      <div className="card-body" style={{display: 'flex', justifyContent: 'center'}}>
        <table>
          {
            vals.map(val => )
          }
        </table>
      </div>
    </div>
  )
}

export default Ver;