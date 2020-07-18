import problemReducer from './problem-reducer';
import Ag from 'business/ag';
import Dg from 'business/dg';
import Mg from 'business/mg';
import Sg from 'business/sg';
import Deduper from 'business/deduper';
import Solver from 'business/solver';

// The amount of time (in ms) to wait before moving to the next problem.
let delay = 300;

// setTimeout object for delay when moving to the next problem.
let timeout;

// The problem generator
let g;

/**
 * Initializes the problem genreator.
 *
 * @param {string} op The operation, e.g, +, -, x, or /
 */
function initGenerator(op, settings) {
  switch(op) {
    case '+':
      g = new Deduper(new Ag(settings));
      break;
    case '-':
      g = new Deduper(new Sg(settings));
      break;
    case 'x':
      g = new Deduper(new Mg(settings));
      break;
    case '/':
      g = new Deduper(new Dg(settings));
      break;
  }
}

/**
 * A run reducer that advances to a new problem or to the end of run if the
 * number of problems reaches the limit.
 *
 * @param {object} run The run state object to advance.
 * @param {string} op The operation, e.g, +, -, x, or /
 * @param {object} settings The settings state object.
 * @return {object} The next run state object.
 */
function advance(run, op, settings) {
  let res = {...run};

  if (!res.problems)
    res.problems = [];

  res.problems.push(run.problem);

  if (res.problems.length === 20)
    delete res.problem;
  else
    res.problem = g.next();

  return res;
}

/**
 * A reducer that handles the keydown event.
 *
 * @param {object} run The run state object.
 * @param {string} op The operation, e.g, +, -, x, or /
 * @param {object} settings The settings state object.
 * @param {object} action The action object.
 * @return {object} The next run state object.
 */
function onKeyDown(run, op, settings, action) {
  if (run.problem.done) {
    clearTimeout(timeout);
    return advance(run, op, settings);
  }

  let res = {
    problem: problemReducer(run.problem, action),
    problems: run.problems
  };

  if (res.problem.done && Solver.isCorrect(res.problem))
    timeout = setTimeout(() => action.dispatch({type: 'ADVANCE'}), delay);

  return res;
}

/**
 * The main run state reducer.
 *
 * @param {object} run The run state object.
 * @param {string} op The operation, e.g, +, -, x, or /
 * @param {object} settings The settings state object.
 * @param {object} action The action object.
 * @return {object} The next run state object.
 */
function runReducer(run, op, settings, action) {

  switch (action.type) {
    case 'START':
      initGenerator(op, settings);
      return {problem: g.next()};

    case 'RUN_EXIT':
      return;

    case 'KEYDOWN':
      return onKeyDown(run, op, settings, action);

    case 'ADVANCE':
      return advance(run, op, settings);
  }

  return run;
}

export default runReducer;