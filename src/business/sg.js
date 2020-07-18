import randInt from './rand-int';

/**
 * Addition problem generator.
 */
class Sg {
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
        a = randInt(2, 10);

        for (let i = 0; i < 3; i++) {
          b = randInt(1, a);
          if (a !== b)
            break;
        }

        break;

      case 2:
        a = randInt(10, 19);
        b = randInt((a % 10) + 1, 9);
        break;

      case 3:
        a = randInt(20, 99);
        b = randInt(1, Math.floor(a / 10) - 1) * 10 + randInt(a % 10 + 1, 9);
        break;

      case 4:
        a = randInt(101, 999);
        b = randInt(101, a);
        break;
    }

    return {op: '-', vals: [a, b]};
  }
}

export default Sg;