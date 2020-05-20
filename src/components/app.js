import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Router from './router';
import reducer from '../reducer';

const store = createStore(reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const App = props => {
  let boxStyle = {
    display: 'flex',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <Provider store={store}>
      <Router />
    </Provider>
  )
}

// document.addEventListener('keydown', event =>
//   store.dispatch({type: 'KEYDOWN', event: event})
// );

export default App;