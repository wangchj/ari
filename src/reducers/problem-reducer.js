function inputReducer(input, problem, action) {
  if (problem.done || action.type !== 'KEYDOWN')
    return input;

  let key = action.event.key;

  if (key >= 0 && key <= 9) {
    return input === undefined ? key : input + key;
  }
  else if (key === 'Backspace') {
    return input === undefined || input === '' ? input :
      input.substr(0, input.length - 1);
  }

  return input;
}

function doneReducer(done, input, action) {
  return action.event.key === 'Enter' && input !== undefined && input !== '' ?
    true : done;
}

function problemReducer(problem, action) {
  return {
    ...problem,
    input: inputReducer(problem.input, problem, action),
    done: doneReducer(problem.done, problem.input, action),
  };
}

export default problemReducer;