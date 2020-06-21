/**
 * Generates a random integer from min to max, inclusive.
 *
 * @param {integer} min The lower bound.
 * @param {integer} max The upper bound.
 * @return {integer} A random integer.
 */
function randInt(min, max) {
  return Math.round(Math.random() * (max - min)) + min;
}

export default randInt;