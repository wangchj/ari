import React from 'react';
import {connect} from 'react-redux';
import {OperationsEnum, Settings} from 'business/meta';
import RadioButtons from 'widgets/radio-buttons';
import Button from 'widgets/button';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
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

      <div className="space"></div>

      <div className="footer">
        <div className="content">
          <div className="words">Give us feedback</div>
          <div className="twitter">
            <a target="_blank" href="https://twitter.com/intent/tweet?screen_name=AriMathApp&ref_src=twsrc%5Etfw">
              <FontAwesomeIcon icon={faTwitter}/>
            </a>
          </div>
          <div className="fb">
            <a target="_blank" href="https://www.facebook.com/Ari-Math-109135457534100/">
              <FontAwesomeIcon icon={faFacebook}/>
            </a>
          </div>
        </div>
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