const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function onChar(char) {

}

function encodeLine(str) {

  let prevChar = str[0];
  let charCounter = 1;
  let result = '';

  for (let i = 1; i < str.length; i++) {
    if (str[i] == prevChar) {
      charCounter++
    } else {
      if (charCounter!=1) 
        result = result + charCounter.toString()+prevChar;
      else
      result = result + prevChar;

      charCounter = 1;
      prevChar = str[i];
    }
  }

  if (charCounter!=1) 
    result = result + charCounter.toString()+prevChar;
  else
    result = result + prevChar;

  return result;

}

module.exports = {
  encodeLine
};
