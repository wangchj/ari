class Problem {
  static randInt(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
  }

  static make(op, options) {
    switch(op) {
      case '+':
        return this.makeAdd(options);
      case '-':
        return this.makeSub(options);
      case 'x':
        return this.makeMul(options);
      case '/':
        return this.makeDiv(options);
    }
  }

  static makeAdd(options) {

    // TODO: show only carry problems

    switch (options.level) {
      case 'EASY':
        var c = Math.round(Math.random()) === 1;
        var a = c ? this.randInt(1, 89) : this.randInt(1, 9);
        var b = c ? this.randInt(1, 9) :  this.randInt(1, 89);
        return {op: '+', vals: [a, b]};

      case 'MEDIUM':
        var a = this.randInt(10, 99);
        var b = this.randInt(10, 99);
        return {op: '+', vals: [a, b]};

      case 'HARD':
        var a = this.randInt(100, 999);
        var b = this.randInt(100, 999);
        return {op: '+', vals: [a, b]};
    }
  }

  static makeSub(options) {

    // TODO: show only borrow problems

    switch (options.level) {
      case 'EASY':
        var a = this.randInt(1, 25);
        var b = this.randInt(1, Math.min(a, 10));
        return {op: '-', vals: [a, b]};

      case 'MEDIUM':
        var a = this.randInt(11, 99);
        var b = this.randInt(11, 99);
        return {op: '-', vals: [a, b]};

      case 'HARD':
        var a = this.randInt(101, 999);
        var b = this.randInt(101, 999);
        return {op: '-', vals: [a, b]};
    }
  }

  static makeMul(options) {
    switch (options.level) {
      case 'EASY':
        var a = this.randInt(2, 15);
        var b = this.randInt(2, 15);
        return {op: 'x', vals: [a, b]};

      case 'MEDIUM':
        var a = this.randInt(15, 99);
        var b = this.randInt(2, 9);
        return {op: 'x', vals: [a, b]};

      case 'HARD':
        var a = this.randInt(15, 99);
        var b = this.randInt(15, 99);
        return {op: 'x', vals: [a, b]};
    }
  }

  static makeDiv(options) {
    let mul = this.makeMul(options);
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