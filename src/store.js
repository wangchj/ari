import { createStore } from 'redux';

function reducer(state = {}, action) {

  console.log('reducer()', action);

  switch (action.type) {
    case 'MAIN_MENU_SELECT':
      return {mainMenuSelection: action.id};
  }

  return state;
}

const store = createStore(reducer);

export default store;