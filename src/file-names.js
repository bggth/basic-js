const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function checkElemInArray(arr, elem) {
  for (let i = 0; i <  arr.length; i++) {
    if (arr[i] == elem)
      return true;
  }
  return false;
}

function renameFiles(names) {
  let result = []
  let suff = new Object();
  for (let i = 0; i < names.length; i++) {
    if (checkElemInArray(result, names[i])) {
      if (suff[names[i]] == null) {
        suff[names[i]] =  1;
      } else {
        suff[names[i]]++;
      }
      result.push(`${names[i]}(${suff[names[i]]})`);
    } else {
      result.push(names[i]);
    }
  }
  return result;
}

module.exports = {
  renameFiles
};
