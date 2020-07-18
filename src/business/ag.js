import randInt from './rand-int';

/**
 * Addition problem generator.
 */
class Ag {
  /**
   * Constructs a new instance of this generator.
   *
   * @param {object} settings The run settings object.
   */
  constructor(settings) {
    this.settings = settings;
  }

  /**
   * Gets the next problem.
   *
   * @return {object} A problem object that contains an operator and operands.
   */
  next() {

    // TODO: show only carry problems

    let a, b;

    switch (this.settings.level) {
      case 1:
        a = randInt(1, 9);
        b = randInt(1, 9);
        break;

      case 2:
        var c = Math.round(Math.random()) === 1;
        a = c ? randInt(10, 89) : randInt(1, 9);
        b = c ? randInt(1, 9)   : randInt(10, 89);
        break;

      case 3:
        a = randInt(10, 99);
        b = randInt(10, 99);
        break;

      case 4:
        a = randInt(100, 999);
        b = randInt(100, 999);
        break;
    }

    return {op: '+', vals: [a, b]};
  }
}

export default Ag;