export default (op, action) => {
  switch (action.type) {
    case 'SELECT_OP':
      return action.op;
  }

  return op;
}