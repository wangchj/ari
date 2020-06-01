import React from 'react';
import {connect} from 'react-redux';
import Operations from 'business/operations';
import Levels from 'business/levels';
import Formats from 'business/formats';
import RadioButtons from 'widgets/radio-buttons';
import Button from 'widgets/button';
import StyleSheet from 'scss/screens/main/screen';


let activeStyle = {
  backgroundColor: '#2E86C1',
  color: '#FFF',
};

let Screen = props => {
  let level  = props.options.level;
  let format = props.options.format;

  return (
    <div id="main-screen">
      <div id="title">Ari Math</div>
      <div id="options">
        <div id="ops">
          <RadioButtons options={Operations} activeId={props.op}
            onClick={props.onOpClick}/>
        </div>
        <div>
          <table cellSpacing="0">
            <tbody>
              <tr>
                <td className="title">Level</td>
                <td className="config">
                  <RadioButtons options={Levels} activeId={level}
                    activeStyle={activeStyle} size="s"
                    onClick={v => props.onOptionClick('level', v)} />
                </td>
              </tr>
              <tr>
                <td className="title">Format</td>
                <td className="config">
                  <RadioButtons options={Formats} activeId={format}
                  activeStyle={activeStyle} size="s"
                  onClick={v => props.onOptionClick('format', v)} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div id="finalize">
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