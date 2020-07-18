import randInt from './rand-int';
import Mg from './mg';
import Solver from './solver';

/**
 * Addition problem generator.
 */
class Dg {
  /**
   * Constructs a new instance of this generator.
   *
   * @param {object} settings The run settings object.
   */
  constructor(settings) {
    this.settings = settings;
    this.mg = new Mg(settings);
  }

  /**
   * Gets the next problem.
   *
   * @return {object} A problem object that contains an operator and operands.
   */
  next() {
    let mul = this.mg.next();
    let ans = Solver.eval(mul);
    var r = Math.round(Math.random()) === 1;
    return {op: '/', vals: [ans, r ? mul.vals[0] : mul.vals[1]]};
  }
}

export default Dg;