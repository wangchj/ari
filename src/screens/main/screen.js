import React from 'react';
import {connect} from 'react-redux';
import {OperationsEnum, Settings} from 'business/meta';
import RadioButtons from 'widgets/radio-buttons';
import Button from 'widgets/button';
import StyleSheet from 'scss/screens/main/screen';

let Screen = props => {
  let meta = Settings[props.op];

  return (
    <div id="main-screen">
      <div id="title">Ari Math</div>
      <div id="settings">
        <div id="ops">
          <RadioButtons options={OperationsEnum} activeId={props.op} size="menu"
            variant="purple" onClick={props.onOpClick}/>
        </div>
        <div>
          <table cellSpacing="0">
            <tbody>
              {
                Object.keys(meta).map(pname =>
                  <tr key={pname}>
                    <td className="title">{meta[pname].label}</td>
                    <td className="config">
                      <RadioButtons options={meta[pname].enum}
                        activeId={props.settings[pname]}
                        onClick={v => props.onOptionClick(pname, v)} />
                    </td>
                  </tr>
                )
              }
            </tbody>
          </table>
        </div>
      </div>
      <div id="finalize">
        <Button label="Start!" size="l" variant="dark"
          onClick={props.onStartClick}/>
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