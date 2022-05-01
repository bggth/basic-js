const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */

class MyArray {
  constructor() {
    this.data = [];
    this.doubleNextFlag = false;
    this.discardNextFlag = false;
  }

  push(e) {
    if (this.checkCommand(e) == false) {

      if (this.doubleNextFlag) {
        this.data.push(e)
        this.doubleNextFlag = false;
      }

      if (this.discardNextFlag) {
        this.data.pop();
        this.discardNextFlag = false;
      }

      this.data.push(e);
    }

  }

  checkCommand(e) {
    let result = true;;
    const commands = ['--discard-next', '--discard-prev', '--double-next', '--double-prev'];
    let command = commands.indexOf(e);
    switch (command) {
      case -1:
        result = false;
        break;
      case 0:
        this.discardNextFlag = true;
        break;
      case 1:
        this.data.pop();
        break;
      case 2:
        this.doubleNextFlag = true;
        break;
      case 3:
        if (this.data.length > 0)
          this.data.push(this.data[this.data.length-1]);
        break;
    }
    return result;
  }
}

function transform(arr) {

  //console.debug(arr);

  if (arr instanceof Array == false)
    throw new Error(`'arr' parameter must be an instance of the Array!`);

  let result = new MyArray();

  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i]);
  }
  return result.data;
}

module.exports = {
  transform
};
