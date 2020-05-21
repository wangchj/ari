import Problem from './problem';

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

function optionsReducer(options, action) {
  let res = {...options};
  res[action.field] = action.value;
  return res;
}

function problemReducer(problem, action) {
  switch(action.type) {
    case 'KEYDOWN':
      if (problem.done)
        return problem;

      let key = action.event.key;

      let input = problem.input;

      if (key >= 0 && key <= 9) {
        if (input === undefined)
          return {...problem, input: key};
        else
          return {...problem, input: input + key};
      }
      else if (key === 'Backspace') {
        if (input === '')
          return {...problem};
        else
          return {...problem, input: input.substr(0, input.length - 1)};
      }
  }

  return problem;
}

function runReducer(state, action) {
  switch(action.type) {
    case 'START':
      return {problem: Problem.make(state.op, state.options)}
    case 'KEYDOWN':
      let run = state.run;
      let problem = run.problem;
      let key = action.event.key;

      if (problem) {
        if (key === 'Enter') {
          if (problem.done) {
            let res = {...run};

            if (!res.problems)
              res.problems = [];

            res.problems.push(problem);

            if (res.problems.length === 20)
              delete res.problem;
            else
              res.problem = Problem.make(state.op, state.options);

            return res;
          }
          else {
            if (!!problem.input)
              return {... run, problem: {...problem, done: true}};
          }
        }
        else {
          return {...run, problem: problemReducer(problem, action)};
        }
      }
  }

  return state.run;
}

// let s = {
//   op: '+',
//   options: {
//     level: 'EASY',
//     format: 'VERTICAL'
//   },
//   run: {
//     problem: {op: '+', vals: [2, 7]}
//   }
// };

function reducer(state, action) {
  switch (action.type) {
    case 'KEYDOWN':
      if (state.run)
        return {...state, run: runReducer(state, action)};
      else
        return state;
    case 'SELECT_OP':
      return defaultState[action.op];
    case 'OPTION_SELECT':
      return {...state, options: optionsReducer(state.options, action)};
    case 'BACK_TO_MENU':
      var res = {...state};
      delete res.op;
      delete res.options;
      return res;
    case 'START':
      return {...state, run: runReducer(state, action)};
    case 'RUN_EXIT':
      var res = {...state};
      delete res.run;
      return res;
  }

  return state;
}

export default reducer;