const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */

function minesweeper(matrix) {
  //console.log('matrix', matrix);
  let height = matrix.length;
  let width = matrix[0].length;
  let result = [];
  for (let y = 0; y < height; y++) {
    let line = [];
    for (let x = 0; x < width; x++) {
      let counter = 0;
      for (let dx = -1; dx <= 1; dx++)
        for (let dy = -1; dy <= 1; dy++){
          if (!((dx == 0 ) && (dy == 0))) {
            let tx = x + dx;
            let ty = y + dy;
            if ((tx >= 0) && (ty >= 0) && (tx < height) && (ty < width)) {
              //console.debug(tx, ty, matrix[tx][ty]);
              if (matrix[tx][ty])
                counter++;
            }
          }            
       }
      line.push(counter);   
    }
    result.push(line);
  }
  //console.log(result);
  return result;
}

module.exports = {
  minesweeper
};
