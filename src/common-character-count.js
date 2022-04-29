const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

class MyArray {
  constructor() {
    this.data = [];
  };

  push(e) {
    this.data.push(e);
  }

  // search elem in array and delete it
  // return true if success
  pop(e) {
    let index = this.data.indexOf(e);
    if (index == -1)
      return false;
    this.data.splice(index, 1);
    return true;
  }
}

function getCommonCharacterCount(s1, s2) {
  let a2 = new MyArray();
  let result = 0;

  for (let i = 0; i < s2.length; i++)
    a2.push(s2[i]);

  for (let i = 0; i < s1.length; i++)
    if (a2.pop(s1[i]))
      result++;

  return result;
}

module.exports = {
  getCommonCharacterCount
};
