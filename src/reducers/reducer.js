import opReducer from 'reducers/op-reducer';
import optionsReducer from 'reducers/options-reducer';
import runReducer from 'reducers/run-reducer';
import Problem from 'business/problem';

let defaultState = {
  '+': {
    op: '+',
    options: {
      level: 'EASY',
      format: 'VERTICAL'
    }
  },
  '-': {
    op: '-',
    options: {
      level: 'EASY',
      format: 'VERTICAL'
    }
  },
  'x': {
    op: 'x',
    options: {
      level: 'EASY',
      format: 'VERTICAL'
    }
  },
  '/': {
    op: '/',
    options: {
      level: 'EASY',
      format: 'VERTICAL'
    }
  },
};

function reducer(state = defaultState['+'], action) {

  return {
    op: opReducer(state.op, action),
    options: optionsReducer(state.options, action),
    run: runReducer(state.run, state.op, state.options, action)
  };

  return state;
}

export default reducer;