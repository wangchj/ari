export default (options, action) => {

  switch (action.type) {
    case 'SELECT_OP':
      break;

    case 'OPTION_SELECT':
      let res = {...options};
      res[action.field] = action.value;
      return res;
  }

  return options;
}