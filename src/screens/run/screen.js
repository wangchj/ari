import React from 'react';
import {connect} from 'react-redux';
import Problem from './problem';
import Summary from 'screens/summary/screen';
import RunInfo from './run-info';

function Content(props) {
  let run = props.run;
  let options = props.options;

  if (run.problem) {
    return <Problem problem={run.problem} options={options}/>
  }
  else if (run.problems) {
    return <Summary/>
  }
  else {
    return <div>Something went wrong. No problem to display</div>
  }
}

/**
 * The main entry component of a run, which consists of a series of problems.
 */
class Screen extends React.Component {

  /**
   * Handles the event when this component mounts.
   */
  componentDidMount() {
    document.addEventListener('keydown', this.props.onKeyDown);
  }

  /**
   * Handles the event when this component unmount.
   */
  componentWillUnmount() {
    document.removeEventListener('keydown', this.props.onKeyDown);
  }

  /**
   * Renders the component.
   */
  render() {
    let props = this.props;

    return (
      <div id="run">
        {props.run.problem ? <RunInfo/> : null}
        <Content {...props}/>
      </div>
    )
  }
}

let ScreenRx = connect(
  state => state,
  dispatch => ({
    onKeyDown: event => {
      dispatch({type: 'KEYDOWN', event: event, dispatch: dispatch})
    }
  })
)(Screen);

export default ScreenRx;