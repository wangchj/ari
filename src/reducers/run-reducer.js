import problemReducer from './problem-reducer';
import Problem from 'business/problem';

// The amount of time (in ms) to wait before moving to the next problem.
let delay = 300;

// setTimeout object for delay when moving to the next problem.
let timeout;

/**
 * A run reducer that advances to a new problem or to the end of run if the
 * number of problems reaches the limit.
 *
 * @param {object} run The run state object to advance.
 * @param {string} op The operation, e.g, +, -, x, or /
 * @param {object} options The options state object.
 * @return {object} The next run state object.
 */
function advance(run, op, options) {
  let res = {...run};

  if (!res.problems)
    res.problems = [];

  res.problems.push(run.problem);

  if (res.problems.length === 20)
    delete res.problem;
  else
    res.problem = Problem.make(op, options);

  return res;
}

function onKeyDown(run, op, options, action) {
  if (run.problem.done) {
    clearTimeout(timeout);
    return advance(run, op, options);
  }

  let res = {
    problem: problemReducer(run.problem, action),
    problems: run.problems
  };

  if (res.problem.done && Problem.isCorrect(res.problem))
    timeout = setTimeout(() => action.dispatch({type: 'ADVANCE'}), delay);

  return res;
}

export default (run, op, options, action) => {

  switch (action.type) {
    case 'START':
      return {problem: Problem.make(op, options)};

    case 'RUN_EXIT':
      return;

    case 'KEYDOWN':
      return onKeyDown(run, op, options, action);

    case 'ADVANCE':
      return advance(run, op, options);
  }

  return run;
}