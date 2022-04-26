const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  //console.log('matrix', matrix)
  let resultCats = [];
  for (let i= 0; i < matrix[0].length; i++) {
    resultCats.push(0);
  }
  for (let i = 0; i < matrix.length; i++) {
    cats = matrix[i];
    console.log('cats', cats);
    for (let x = 0; x <= cats.length; x++) {
      if ((typeof cats[x] == 'number') && (cats[x] >= 0))
        resultCats[x] = resultCats[x] + cats[x];
      /*if (cats[x] == '^^')
        if (resultCats[x] == 0)
          resultCats[x] = 1;
          */
    }
    console.log('resultCats', resultCats);
  }

  let sum = 0;
  //console.log('matrix, resultCats', matrix, '|', resultCats);
  resultCats.forEach(elem =>{
    if (typeof elem == 'number')
      sum = sum + elem;
  });

  //console.log(resultCats);

  return sum;

}

module.exports = {
  countCats
};
