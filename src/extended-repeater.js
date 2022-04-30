const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeat(str, repeatTimes, separator, addition) {
  let result = ''
  let repeat = str + addition;
  result = repeat;
  while(--repeatTimes) {
    result = result+separator;
    result = result+repeat;
  }
  return result;
}

function repeater(str, options) {
  let result = '';
  let separator = options.separator?options.separator:'+';
  let repeatTimes = options.repeatTimes?options.repeatTimes:1;
  let addition = options.addition?options.addition:'';
  let additionRepeatTimes = options.additionRepeatTimes?options.additionRepeatTimes:1;
  let additionSeparator = options.additionSeparator?options.additionSeparator:'|';

  addition = repeat(addition, additionRepeatTimes, additionSeparator, '');
  result = repeat(str, repeatTimes, separator, addition);
  //console.debug(str, result);

  return result;
}

module.exports = {
  repeater
};
