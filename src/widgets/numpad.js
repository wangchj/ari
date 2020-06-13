import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBackspace} from '@fortawesome/free-solid-svg-icons';
import {connect} from 'react-redux';
import NumpadStyle from 'scss/widgets/numpad';

function Numpad(props) {
  return (
    <div className="numpad" onTouchStart={()=>{}}>
      <div className="rows">
        <div className="row">
          <div className="key" onClick={(e) => props.onClick("1")}>
            <div className="text">1</div>
          </div>
          <div className="key" onClick={() => props.onClick("2")}>
            <div className="text">2</div>
          </div>
          <div className="key" onClick={() => props.onClick("3")}>
            <div className="text">3</div>
          </div>
        </div>
        <div className="row">
          <div className="key" onClick={() => props.onClick("4")}>
            <div className="text">4</div>
          </div>
          <div className="key" onClick={() => props.onClick("5")}>
            <div className="text">5</div>
          </div>
          <div className="key" onClick={() => props.onClick("6")}>
            <div className="text">6</div>
          </div>
        </div>
        <div className="row">
          <div className="key" onClick={() => props.onClick("7")}>
            <div className="text">7</div>
          </div>
          <div className="key" onClick={() => props.onClick("8")}>
            <div className="text">8</div>
          </div>
          <div className="key" onClick={() => props.onClick("9")}>
            <div className="text">9</div>
          </div>
        </div>
        <div className="row">
          <div className="key" onClick={() => props.onClick("Backspace")}>
            <div className="text"><FontAwesomeIcon icon={faBackspace}/></div>
          </div>
          <div className="key" onClick={() => props.onClick("0")}>
            <div className="text">0</div>
          </div>
          <div className="key" onClick={() => props.onClick("Enter")}>
            <div className="text">Enter</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default connect(
  null,
  dispatch => ({
    onClick: key => dispatch({
      type: 'KEYDOWN',
      event: {key: key},
      dispatch: dispatch
    })
  })
)(Numpad);