const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {

  let sum = 0;
  let heigth = matrix.length;
  let width = matrix[0].length;

  //console.log(matrix[0][0]);

  for (let y = 0; y < width; y++) {
    let zeroFlag = false;
    for (let x = 0; x < heigth; x++) {
      if (matrix[x][y] == 0)
        zeroFlag = true;
      if (zeroFlag)
        matrix[x][y] = 0;
    }
  }

  for (let y = 0; y < width; y++) {
    for (let x = 0; x < heigth; x++) {
      sum = sum + matrix[x][y];
    }
  }

  return sum;
}

module.exports = {
  getMatrixElementsSum
};
