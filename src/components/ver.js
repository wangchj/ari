import React from 'react';
import Prob from '../problem';
import Result from './result';

/**
 * Gets the length of the longest element in vals.
 *
 * @param {array} vals The array from which to get the max length.
 * @return {integer} The max length.
 */
function getMaxLength(vals) {
  return vals.reduce((a, v) => Math.max(a, ('' + v).length), 0);
}

class Ver extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    document.getElementById('problemInput').focus();
  }

  onInputBlur() {
    document.getElementById('problemInput').focus();
  }

  render() {
    let props = this.props;
    let problem = props.problem;
    let vals = problem.vals;
    let length = getMaxLength(vals);

    let stripe = {
      display: 'flex',
      flexDirection: 'row',         // Row should be the default
      justifyContent: 'center',     // Horizontal aligment
      alignItems: 'center',         // Vertical alignment
    };

    let stripe1 = {...stripe, backgroundColor: '#D6EAF8'};

    let stripe2 = {...stripe, backgroundColor: '#D0ECE7'};

    let stripe3 = {...stripe, backgroundColor: '#FCF3CF'};

    let stripe4 = {...stripe, marginTop: '20px'};

    let numberWidth = (length === 1 ? 2 : length) + 'em';

    let number = {
      fontFamily: 'BalsamiqSans',
      fontSize:'10em',
      paddingTop: '0.06em',
      paddingBottom: '0.06em',
      width: numberWidth,
      textAlign: 'right',
    };

    let operator = {
      marginRight: 30,
    };

    let line = {
      height: '0.1em',
      backgroundColor: '#566573',
    };

    let input = {
      fontFamily: 'BalsamiqSans',
      fontSize: '10em',
      padding: 0,
      margin: 0,
      width: numberWidth,
      textAlign: 'right',
      backgroundColor: 'transparent',
      border: '1px dashed rgba(0, 0, 0, 0.5)',
      borderRadius: '5px',
    };

    return (
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <div style={stripe1}>
          <span style={number}>{vals[0]}</span>
        </div>
        <div style={stripe2}>
          <span style={number}>
            <span style={operator}>{problem.op}</span>
            {vals[1]}
          </span>
        </div>
        <div style={stripe3}>
          <input id="problemInput" className="abc" style={input}
            autoComplete="off"
            value={problem.input || ''}
            onChange={()=>{}}
            onKeyDown={this.props.onKeyDown}
            onBlur={() => this.onInputBlur()}/>
        </div>
        {
          problem.done ?
            <div style={stripe4}><Result problem={problem}/></div>: null
        }
      </div>
    )
  }
}

export default Ver;