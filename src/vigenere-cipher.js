const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direct) {
    this.direct = direct;
    this.flag = 1;
  }
  encrypt(message, key) {
    let result = '';
    if ((message == null) || (key == null))
      throw new Error('Incorrect arguments!');

    message = message.toUpperCase();
    //message = this.direct?message:this.reverse(message)
    key = key.toUpperCase();

    let keyIndex = 0;
    for (let i = 0; i < message.length; i++) {
      if ((message[i].charCodeAt(0) >= 'A'.charCodeAt(0)) && (message[i].charCodeAt(0) <= 'Z'.charCodeAt(0))) {
        //console.debug(message[i], key[keyIndex%key.length],   this.encodeChar(message[i], key[keyIndex%key.length], this.flag));
        result += this.encodeChar(message[i], key[keyIndex%key.length], this.flag);
        keyIndex++;
      } else {
        result += message[i];
      }
    }
    //console.debug(result);
    return result;//this.direct?result:this.reverse(result);
  }
  decrypt(message, key) {
    if ((message == null) || (key == null))
      throw new Error('Incorrect arguments!');
    this.flag = -this.flag;
    //message = this.direct?message:this.reverse(message)
    let result = this.encrypt(message, key);
    this.flag = -this.flag;
    return result;
  }

  encodeChar(char, key, flag) {
    let result = '';
    let charCode = char.charCodeAt(0);
    let delta = key.charCodeAt(0)-'A'.charCodeAt(0);
    //console.debug(charCode, keyCode);
    let resultCode = charCode + this.flag*delta;
    if (resultCode > 'Z'.charCodeAt(0))
      resultCode = resultCode - 26;      
    if (resultCode < 'A'.charCodeAt(0))
      resultCode = resultCode + 26;

    result = String.fromCharCode(resultCode);
    return result;
  }

  reverse(str) {
    return str.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
