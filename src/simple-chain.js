const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  getLength() {
    return this.data.length;
  },
  addLink(value) {
    if (this.data == null) 
      this.data = [];
    this.data.push(value);
    return this;
  },
  removeLink(position) {
    if ((position-1 < 0) || (position >= this.data.length) || (typeof position != 'number')){
      this.data = [];
      throw new Error(`You can't remove incorrect link!`);
    }
    this.data.splice(position-1, 1);
    return this;
  },
  reverseChain() {
    this.data.reverse();
    return this;
  },
  finishChain() {
    let result = `( ${this.data[0]} )`;
    for (let i = 1; i < this.data.length; i++)
      result = result + `~~( ${this.data[i]} )`;
    this.data = [];
    return result;
  }
};

module.exports = {
  chainMaker
};
