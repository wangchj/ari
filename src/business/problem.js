import randInt from './rand-int';

class Problem {
  static make(op, settings) {
    switch(op) {
      case '+':
        return this.makeAdd(settings);
      case '-':
        return this.makeSub(settings);
      case 'x':
        return this.makeMul(settings);
      case '/':
        return this.makeDiv(settings);
    }
  }

  static makeAdd(settings) {

    // TODO: show only carry problems

    let a, b;

    switch (settings.level) {
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

  static makeSub(settings) {
    let a, b;

    switch (settings.level) {
      case 1:
        a = randInt(1, 10);
        b = randInt(1, a);
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

  static makeMul(settings) {
    let a, b;

    switch (settings.level) {
      case 1:
        a = randInt(2, 12);
        b = randInt(2, 12);
        break;

      case 2:
        var bool = Math.round(Math.random()) === 1;
        var lg = randInt(11, 19);
        var sm = randInt(2, 12);
        a = bool ? lg : sm;
        b = bool ? sm : lg;
        break;

      case 3:
        a = randInt(11, 19);
        b = randInt(11, 19);
        break;

      case 4:
        a = randInt(15, 99);
        b = randInt(15, 99);
        break;
    }

    return {op: 'x', vals: [a, b]};
  }

  static makeDiv(settings) {
    let mul = this.makeMul(settings);
    let ans = this.eval(mul);
    var r = Math.round(Math.random()) === 1;
    return {op: '/', vals: [ans, r ? mul.vals[0] : mul.vals[1]]};
  }

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

export default Problem;