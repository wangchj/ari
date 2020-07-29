import React from 'react';
import Result from './result';
import Solver from 'business/solver';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faVolumeOff, faVolumeUp} from '@fortawesome/free-solid-svg-icons';
import style1 from 'scss/screens/run/ver';
import style2 from 'scss/screens/run/spe';

/**
 * A component that displays a problem in speech format.
 *
 * @param {object} props The props for rendering.
 * @return The component render result.
 */
class Spe extends React.Component {
  /**
   * Constructs an instance of this compoent.
   *
   * @param {object} props The component props.
   */
  constructor(props) {
    super(props);
    this.state = {isSaying: false};
  }

  /**
   * Handles the component mount lifecycle event.
   */
  componentDidMount() {
    this.say();
  }

  /**
   * Translates a problem into text for speech synthesis.
   *
   * @param {object} p The problem object.
   * @return {string} The speech text.
   */
  getScript(p) {
    switch (p.op) {
      case '+':
        return `${p.vals[0]} + ${p.vals[1]}`;
      case '-':
        return `${p.vals[0]} minus ${p.vals[1]}`;
      case 'x':
        return `${p.vals[0]} times ${p.vals[1]}`;
      case '/':
        return `${p.vals[0]} divided by ${p.vals[1]}`;
    }
  }

  /**
   * Dictates the problem.
   */
  say() {
    let synth = window.speechSynthesis;
    let s = this.getScript(this.props.problem);
    let u = new SpeechSynthesisUtterance(s);

    this.setState({isSaying: true});
    u.onend = () => {
      this.setState({isSaying: false})
    };

    synth.cancel();
    synth.resume();
    synth.speak(u);
  }

  /**
   * Handles the event when the media area is clicked.
   */
  onMediaClick() {
    if (!this.state.isSaying)
      this.say();
  }

  /**
   * Renders the component.
   */
  render() {
    let problem = this.props.problem;
    let vals = problem.vals;
    let iconClass = this.state.isSaying ? 'enabled' : 'disabled';

    return (
      <div className="ver">
        <div className="stripe media-stripe stripe-blue"
          onClick={() => this.onMediaClick()}>
          <div className="content">
            <div className="text">Tap to speak</div>
            <div className="icon">
              <FontAwesomeIcon icon={faVolumeUp} className={iconClass}/>
            </div>
          </div>
        </div>
        <div className="stripe stripe-yellow number">
          {problem.input || <span>&nbsp;</span>}
        </div>
        {
          problem.done ? <Result problem={problem}/>: null
        }
      </div>
    )
  }
}

export default Spe;