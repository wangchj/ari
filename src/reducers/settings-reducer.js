export default (settings, action) => {

  switch (action.type) {
    case 'SELECT_OP':
      break;

    case 'OPTION_SELECT':
      let res = {...settings};
      res[action.field] = action.value;
      return res;
  }

  return settings;
}