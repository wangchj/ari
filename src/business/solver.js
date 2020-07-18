/**
 * Problem solver. Contains functions related to evaluating and finding the
 * correct answer of a problem.
 */
class Solver {
  /**
   * Gets the correct answer for a problem.
   *
   * @param {object} problem The problem object.
   * @return {integer} The answer
   */
  static eval(problem) {
    switch(problem.op) {
      case '+':
        return problem.vals.reduce((a, v) => a + v);
      case '-':
        return problem.vals.reduce((a, v) => a - v);
      case 'x':
        return problem.vals.reduce((a, v) => a * v);
      case '/':
        return problem.vals.reduce((a, v) => a / v);
    }
  }

  /**
   * Determines if the user's response is correct.
   *
   * @param {object} problem The problem object to be evaluated.
   * @return {boolean} true if the response is correct; false otherwise.
   */
  static isCorrect(problem) {
    return parseInt(problem.input) === this.eval(problem);
  }
}

export default Solver;