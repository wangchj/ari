import randInt from './rand-int';

/**
 * Multiplication problem generator.
 */
class Mg {
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
    let a, b;

    switch (this.settings.level) {
      case 1:
        a = this.getVal(2, 12);
        b = this.getVal(2, 12);
        break;

      case 2:
        var bool = Math.round(Math.random()) === 1;
        var lg = this.getVal(11, 19);
        var sm = this.getVal(2, 12);
        a = bool ? lg : sm;
        b = bool ? sm : lg;
        break;

      case 3:
        a = this.getVal(11, 19);
        b = this.getVal(11, 19);
        break;

      case 4:
        a = this.getVal(15, 99);
        b = this.getVal(15, 99);
        break;
    }

    return {op: 'x', vals: [a, b]};
  }

  /**
   * Gets a random operand within min and max, inclusive.
   *
   * @param {integer} min The inclusive lower bound.
   * @param {integer} max The inclusive upper bound.
   * @return {integer} A value between min and max.
   */
  getVal(min, max) {
    let res;

    for (let i = 0; i < 2; i++) {
      res = randInt(min, max);
      if (res !== 10 && res !== 100)
        break;
    }

    return res;
  }
}

export default Mg;