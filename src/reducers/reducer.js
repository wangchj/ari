import opReducer from 'reducers/op-reducer';
import settingsReducer from 'reducers/settings-reducer';
import runReducer from 'reducers/run-reducer';

let defaultState = {
  '+': {
    op: '+',
    settings: {
      level: 1,
      format: 'STACK'
    }
  },
  '-': {
    op: '-',
    settings: {
      level: 1,
      format: 'STACK'
    }
  },
  'x': {
    op: 'x',
    settings: {
      level: 1,
      format: 'STACK'
    }
  },
  '/': {
    op: '/',
    settings: {
      level: 1,
      format: 'STACK'
    }
  },
};

function reducer(state = defaultState['+'], action) {
  return {
    op: opReducer(state.op, action),
    settings: settingsReducer(state.settings, action),
    run: runReducer(state.run, state.op, state.settings, action)
  };
}

export default reducer;