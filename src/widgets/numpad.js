import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBackspace} from '@fortawesome/free-solid-svg-icons';
import {connect} from 'react-redux';
import 'scss/widgets/numpad';

function Numpad({onClick}) {
  return (
    <div className="numpad" onTouchStart={()=>{}}>
      <div className="rows">
        <div className="row">
          <button className="key" onClick={() => onClick("1")}>
            1
          </button>

          <button className="key" onClick={() => onClick("2")}>
            2
          </button>

          <button className="key" onClick={() => onClick("3")}>
            3
          </button>
        </div>
        <div className="row">
          <button className="key" onClick={() => onClick("4")}>
            4
          </button>

          <button className="key" onClick={() => onClick("5")}>
            5
          </button>

          <button className="key" onClick={() => onClick("6")}>
            6
          </button>
        </div>
        <div className="row">
          <button className="key" onClick={() => onClick("7")}>
            7
          </button>

          <button className="key" onClick={() => onClick("8")}>
            8
          </button>

          <button className="key" onClick={() => onClick("9")}>
            9
          </button>
        </div>
        <div className="row">
          <button className="key" onClick={() => onClick("Backspace")}>
            <FontAwesomeIcon icon={faBackspace}/>
          </button>

          <button className="key" onClick={() => onClick("0")}>
            0
          </button>

          <button className="key" onClick={() => onClick("Enter")}>
            Enter
          </button>
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