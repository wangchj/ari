import React from 'react';
import {connect} from 'react-redux';
import Operations from 'models/operations';
import Levels from 'models/levels';
import Formats from 'models/formats';
import RadioButtons from './radio-buttons';
import Button from './button';

let MenuOption = props => {
  let box = {margin: '0.5rem'};
  let btn = {width: 300};

  return (
    <div style={box}>
      <button className="btn btn-primary btn-lg" style={btn}
              onClick={e => props.onOpSelect(props.option.id)}>
        {props.option.label}
      </button>
    </div>
  )
}

let MenuOptionRx = connect(null,
  dispatch => ({onOpSelect: op => dispatch({type: 'SELECT_OP', op: op})})
)(MenuOption)

let container = {
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
};

let title = {
  // width: '100%',
  display: 'flex',
  justifyContent: 'center',
  fontSize: '6em',
  paddingTop: '50px',
  paddingBottom: '50px',
  // border: '1px dashed black',
};

let options = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '#f8f9fa',
  paddingTop: '50px',
  paddingBottom: '50px',
};

let ops = {
  marginBottom: '50px',
};

let activeStyle = {
  backgroundColor: '#2E86C1',
  color: '#FFF',
};

let table = {
  borderRadius: '0.3em',
};

let t1 = {
  paddingRight: '1.2em',
  paddingBottom: '1em',
};
let t2 = {
  paddingRight: '1.2em',
  paddingTop: '1em',
};
let o1 = {
  paddingBottom: '1em',
};
let o2 = {
  paddingTop: '1em',
};

let finalize = {
  paddingTop: '50px',
  display: 'flex',
  justifyContent: 'center',
};
let Screen = props => {
  let level  = props.options.level;
  let format = props.options.format;

  return (
    <div style={container}>
      <div style={title}>Ari Math</div>
      <div style={options}>
        <div style={ops}>
          <RadioButtons options={Operations} activeId={props.op}
            onClick={props.onOpClick}/>
        </div>
        <div>
          <table cellSpacing="0" style={table}>
            <tbody>
              <tr>
                <td style={t1}>Level</td>
                <td style={o1}>
                  <RadioButtons options={Levels} activeId={level}
                    activeStyle={activeStyle} size="s"
                    onClick={v => props.onOptionClick('level', v)} />
                </td>
              </tr>
              <tr>
                <td style={t2}>Format</td>
                <td style={o2}>
                  <RadioButtons options={Formats} activeId={format}
                  activeStyle={activeStyle} size="s"
                  onClick={v => props.onOptionClick('format', v)} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div style={finalize}>
        <Button label="Start!" onClick={props.onStartClick}/>
      </div>
    </div>
  )
}

export default connect(
  state => state,
  dispatch => ({
    onStartClick:  () => dispatch({type: 'START'}),
    onOpClick:     op => dispatch({type: 'SELECT_OP', op: op }),
    onOptionClick: (f, v) => dispatch({type: 'OPTION_SELECT', field: f,
      value: v})
  })
)(Screen);