const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */


function intToString(int) {
  return int.toString();
}

function stringToInt(str) {
  return parseInt(str, 10);
}

function deleteElemN(array, n) {
  array.splice(n, 1);
}

function strToCharArray(str) {
  let result = [];
  for (let i = 0; i < str.length; i++) {
    result.push(str[i]);
  }
  return result;
}

function charArrayToString(arr) {
  let result = '';
  for (let i = 0; i < arr.length; i++) {
    result = result + arr[i];
  }
  return result;
}

function copyArray(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i]);
  }
  return result;
}

function deleteDigit(n) {
  let arrN = strToCharArray(intToString(n));
  let maxN = 0;
  for (i = 0; i < arrN.length; i++) {
    let tmpN = copyArray(arrN);
    deleteElemN(tmpN, i);
    let testN = stringToInt(charArrayToString(tmpN));
    if (testN > maxN)
      maxN = testN;
  }
  return maxN;
}

module.exports = {
  deleteDigit
};
