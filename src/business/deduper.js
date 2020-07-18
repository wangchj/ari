/**
 * A problem generator that dedupes problems that's already been generated.
 */
class Deduper {
  /**
   * Constructs a new instance of Deduper.
   *
   * @param {object} g An instances of a problem generator.
   */
  constructor(g) {
    this.g = g;

    // Contains keys of problems already been genereated.
    this.keys = {};
  }

  /**
   * Gets the string representation (key) of a problem object to be use for
   * deduping.
   *
   * @param {object} p The problem object for which to get the key.
   * @return {string} The key
   */
  getKey(p) {
    return `${p.vals[0]}${p.op}${p.vals[1]}`;
  }

  /**
   * Gets the next deduped problem from the generator.
   *
   * @return {object} A problem.
   */
  next() {
    let p, k;

    for (let i = 0; i < 4; i++) {
      p = this.g.next();
      k = this.getKey(p);
      if (!this.keys[k])
        break;
    }

    this.keys[k] = true;
    return p;
  }
}

export default Deduper;