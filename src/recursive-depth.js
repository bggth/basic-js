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
  calculateDepth(arr, depth=0) {
    if (depth==0)
      this.maxDepth = -1;
    if (typeof arr == 'object') {
      depth++;
      if (depth > this.maxDepth)
        this.maxDepth = depth;
      for (let i = 0; i < arr.length; i++)
        this.calculateDepth(arr[i], depth);
    }
    return this.maxDepth;   
  }
}

module.exports = {
  DepthCalculator
};
