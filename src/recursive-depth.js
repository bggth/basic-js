const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  constructor() {
    this.depth = 0;
    this.maxDepth = 0;
  }

  onMaxDepth(depth) {
    if (depth > this.maxDepth)
      this.maxDepth = depth;
  }

  recCalcDepth(arr) {
    //console.log(arr, this.depth);
    this.onMaxDepth(this.depth);
    if (typeof arr == 'object') {
      this.depth++;
      for (let i = 0; i < arr.length; i++)
        this.recCalcDepth(arr[i]);
    } else
      this.depth--;
    //return depth;
  }

  calculateDepth(arr) {
    this.recCalcDepth(arr);
    return this.maxDepth;
  }
}

module.exports = {
  DepthCalculator
};
