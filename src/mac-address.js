const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */


function checkSymbols(str) {
  let result = true;
  const alphabet = '1234567890ABCDEF-'

  for (let i = 0; i < str.length; i++) {
    result = result && alphabet.includes(str[i]);
  }

  return result;
}

function isMAC48Address(n) {

  let result = true;
 
  // len mast be 17 
  result = result && (n.length==17);
  
  // after split('-') mast be 6 elements
  let splitN = n.split('-');
  result = result && (splitN.length == 6);

  // string will be have 0123456789ABCDEF- char
  result = result && (checkSymbols(n));

  return result;
}
module.exports = {
  isMAC48Address
};
